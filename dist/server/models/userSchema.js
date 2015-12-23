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

exports.default = _mongoose2.default.model('User', UserSchema);