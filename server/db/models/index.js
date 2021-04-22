const User = require('./user');
const Note = require('./note');
const Gym = require('./gym');

// ASSOCIATIONS
Note.belongsTo(User);
User.hasMany(Note);

User.hasMany(Gym);

Note.belongsTo(Gym);
Gym.hasMany(Note);

module.exports = {
  User,
  Note, 
  Gym
}
