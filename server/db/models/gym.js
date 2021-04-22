const Sequelize = require('sequelize');
const db = require('../db');

const Gym = db.define('gym', {
    businessId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
});

module.exports = Gym;