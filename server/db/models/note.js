const Sequelize = require('sequelize');
const db = require('../db');

const Note = db.define('note', {
  noteBody: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  date:  {
    type: Sequelize.DATEONLY,
    allowNull: false,
    validate: {
      notEmpty: true,
      isDate: true,
    },
  },
})

module.exports = Note;