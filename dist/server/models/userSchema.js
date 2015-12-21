'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passportLocalMongoose = require('passport-local-mongoose');

var _passportLocalMongoose2 = _interopRequireDefault(_passportLocalMongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
//import crypto from 'crypto'

var UserSchema = new Schema({
  username: String,
  salt: String,
  password: {
    type: String,
    validate: [function (password) {
      return password && password.length > 6;
    }, 'La contraseña debe ser mas larga']
  },
  email: String
});

UserSchema.plugin(_passportLocalMongoose2.default);

// UserSchema.pre('save', (next) => {
//   console.log(this)
//   if (this.password) {
//     this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64')
//     this.password = this.hasPassword(this.password)
//   }
//
//   next()
// })
//
// UserSchema.methods.hashPassword = (password) => {
//   return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64')
// }
//
// UserSchema.methods.authenticate = (password) => {
//   return this.password === this.hashPassword(password)
// }

exports.default = _mongoose2.default.model('User', UserSchema);