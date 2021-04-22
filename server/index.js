const express = require('express')
const path = require('path')
const volleyball = require('volleyball')
const session = require('express-session');
const passport = require('passport');
const db = require('./db');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sessionStore = new SequelizeStore({db})
const PORT = process.env.PORT || 3000;
const socketio = require('socket.io');

const app = express();

// This is a global Mocha hook, used for resource cleanup.
// Otherwise, Mocha v4+ never quits after tests.
if (process.env.NODE_ENV === 'test') {
  after('close the session store', () => sessionStore.stopExpiringSessions())
}

if (process.env.NODE_ENV !== 'production') require('../secrets');

// passport registration
passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})

const createApp = () => {
  // logging middleware
  // Only use logging middleware when not running tests
  const debug = process.env.NODE_ENV === 'test'
  app.use(volleyball.custom({ debug }))

  // body parsing middleware
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  // static middleware
  app.use(express.static(path.join(__dirname, '../public')))

  // session middleware with passport
  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'my best friend is Cody',
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/auth', require('./auth'));
  // all api calls
  app.use('/api', require('./api')) // include our routes!

  // client error, send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

  // Send index.html for any other requests
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  }) 

  // error handling middleware for server errors
  app.use((err, req, res, next) => {
    if (process.env.NODE_ENV !== 'test') console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error')
  })
}

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  );
  // set up our socket control center
  const io = socketio(server)
  require('./socket')(io)
};

const syncDb = () => db.sync();

async function bootApp() {
  //await sessionStore.sync()
  await syncDb();
  await createApp();
  await startListening();
}
// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  bootApp();
} else {
  createApp();
}

module.exports = app
