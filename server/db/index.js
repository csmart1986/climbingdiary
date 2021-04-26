// establish connection to database
const db = require('./db');

// import all Models from relevant files
const User = require('./user');
const Note = require('./note');
const Gym = require('./gym');

// Associations - establish relationships between models
Note.belongsTo(User);
User.hasMany(Note);

User.hasMany(Gym);

module.exports = { 
    db, 
    User, 
    Note, 
    Gym
}