const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/climbingdiary', {
  logging: false // unless you like the logs
});

module.exports = db;