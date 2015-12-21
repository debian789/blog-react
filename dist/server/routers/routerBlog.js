'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _userSchema = require('server/models/userSchema');

var _userSchema2 = _interopRequireDefault(_userSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blog = (0, _express.Router)();

blog.get('/', function (req, res) {
  console.log('respondiendo desde la ruta');
  res.render('index', { title: 'Hoooola Angel :) !!' });
});

blog.get('/login', function (req, res) {
  res.render('login');
});

blog.post('/login', _passport2.default.authenticate('local', {
  successRedirect: '/welcome',
  failureRedirect: '/login'
}));

blog.get('/register', function (req, res) {
  res.render('register');
});

blog.post('/register', function (req, res, next) {
  console.log(req.body);
  var user = new _userSchema2.default(req.body);

  user.save(function (err) {
    if (err) {
      console.log(err);
      return res.redirect('/login');
    }

    req.login(user, function (err) {
      if (err) {
        return next(err);
      }

      return res.redirect('/welcome');
    });
  });
});

blog.get('/welcome', ensureAuth, function (req, res) {
  res.render('welcome', { usuario: req.user.username });
});

blog.get('/crear', function (req, res) {
  res.render('form-administrar');
});

// Validar si esta autenticado que permita el otro middleware
function ensureAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/login');
}

exports.default = blog;