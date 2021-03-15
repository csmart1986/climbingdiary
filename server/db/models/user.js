const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

//const Note = require('./note')

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('password')
    }
  },
})

module.exports = User;

// User.beforeCreate(async user => {
//   await Note.create({
//     userId: user.id
//   })
// })

// /**
//  * instanceMethods
//  */


// User.prototype.correctPassword = function(candidatePwd) {
//   return User.encryptPassword(candidatePwd, this.salt()) === this.password()
// }

// /**
//  * classMethods
//  */
// User.generateSalt = function() {
//   return crypto.randomBytes(16).toString('base64')
// }

// User.encryptPassword = function(plainText, salt) {
//   return crypto
//     .createHash('RSA-SHA256')
//     .update(plainText)
//     .update(salt)
//     .digest('hex')
// }

// /**
//  * hooks
//  */
// const setSaltAndPassword = user => {
//   if (user.changed('password')) {
//     user.salt = User.generateSalt()
//     user.password = User.encryptPassword(user.password(), user.salt())
//   }
// }

// User.afterCreate(async user => {
//   const note = await Note.create()
//   user.addNote(note)
// })

// User.afterBulkCreate(users => {
//   users.forEach(async user => {
//     await Note.create({
//       userId: user.id
//     })
//   })
// })

// User.beforeCreate(user => {
//   if (!user.password && !user.googleId) {
//     throw new Error('must have password')
//   } else if (user.password) {
//     setSaltAndPassword(user)
//   }
// })

// User.beforeUpdate(setSaltAndPassword)
// User.beforeBulkCreate(users => {
//   users.forEach(setSaltAndPassword)
// })
