const User = require('./user');
const Note = require('./note');
const Gym = require('./gym');

// ASSOCIATIONS
Note.belongsTo(User);
User.hasMany(Note);

User.hasMany(Gym);

module.exports = {
  User,
  Note, 
  Gym
}
