const Sequelize = require('sequelize');
const db = require('../db');
console.log(db)
const Note = db.define('note', {
  businessId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  note: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  visited: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
})

module.exports = Note;