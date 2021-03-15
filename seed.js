const { green, red } = require("chalk");
const db  = require("./server/db");


const User = require('./server/db/models/user');
const Note = require('./server/db/models/note');

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!

    // User
    const users = [
      {firstName: 'Catherine', lastName: 'Martin', email: 'cathysue86@gmail.com', password: 'test'},
    ];
    const [ catherine ] = await User.bulkCreate(users);

    // Note
    const notes = [
      {businessId: "8b4xgDOH4bextUIFJ-megw", note: "blahhhh", visited: true, userId: 1}
      
    ];
    const [note1] = await Note.bulkCreate(notes);

  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch(err => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
