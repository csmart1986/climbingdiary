
const {db}  = require("./server/db");


const { User, Note, Gym } = require('./server/db/index');

console.log("db:", db)
async function seed() {
    await db.sync({ force: true });

    // seed your database here!

    // User
    const users = [
      {
        firstName: 'Catherine',
        lastName: 'Martin',
        email: 'cathysue86@gmail.com',
        username: 'csmart',
        password: 'test'
      },
      {
        firstName: 'Jim',
        lastName: 'Poon',
        email: 'jimpoon@gmail.com',
        username: 'jpoon',
        password: 'test'
      },
    ];
    const [ catherine ] = await User.bulkCreate(users, {returning: true});

    // Note
    const notes = [
      {
        businessId: "8b4xgDOH4bextUIFJ-megw",
        date: '2021-04-09',
        noteBody: "Here are my notes for Brooklyn Boulders!",
        userId: 1,
      },
      {
        businessId: "qk4sGfV2DQQs1Pe0k54-fA",
        date: '2021-04-09',
        noteBody: "Here are my notes for Planet Granite!",
        userId: 1,
      },
      {
        businessId: "yR2AbNAOuzqpJfmGwV0O3g",
        date: '2021-04-09',
        noteBody: "Here are my notes for Mission Cliffs!",
        userId: 1,
      },
      {
        businessId: "yR2AbNAOuzqpJfmGwV0O3g",
        date: '2021-06-01',
        noteBody: "Fell 3 times on 5.11c",
        userId: 1,
      },
      {
        businessId: "ecoN_Wu43bsU3MZbJRZEhg",
        date: '2021-04-09',
        noteBody: "Here are my notes for Dogpatch Boulders!",
        userId: 2,
      }
    ];
    const [note1] = await Note.bulkCreate(notes);

    // Gym
    const gyms = [
      {
        businessId: "8b4xgDOH4bextUIFJ-megw", 
        userId: 1
      }, 
      {
        businessId: 'qk4sGfV2DQQs1Pe0k54-fA',
        userId: 1
      } 
    ];
    const [gym1] = await Gym.bulkCreate(gyms);
};


// We've separated the `seed` function from the `runSeed` function.
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
};

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.

if (module === require.main) {
  runSeed();
};

module.exports = seed;