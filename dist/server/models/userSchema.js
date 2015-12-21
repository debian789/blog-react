'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

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

UserSchema.pre('save', function (next) {
  console.log(undefined);
  if (undefined.password) {
    undefined.salt = new Buffer(_crypto2.default.randomBytes(16).toString('base64'), 'base64');
    undefined.password = undefined.hasPassword(undefined.password);
  }

  next();
});

UserSchema.methods.hashPassword = function (password) {
  return _crypto2.default.pbkdf2Sync(password, undefined.salt, 10000, 64).toString('base64');
};

UserSchema.methods.authenticate = function (password) {
  return undefined.password === undefined.hashPassword(password);
};

exports.default = _mongoose2.default.model('User', UserSchema);