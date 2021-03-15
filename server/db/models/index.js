const User = require('./user');
const Note = require('./note');

// ASSOCIATIONS
Note.belongsTo(User);
User.hasMany(Note);

module.exports = {
  User,
  Note
}
