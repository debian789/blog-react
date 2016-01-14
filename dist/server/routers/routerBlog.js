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
  res.render('index', { title: '' });
});

blog.get('/login', function (req, res) {
  res.render('login');
});

blog.post('/login', _passport2.default.authenticate('local', {
  successRedirect: '/admin',
  failureRedirect: '/login'
}));

// blog.get('/register', (req, res) => {
//   res.render('register')
// })

// blog.post('/register', (req, res, next) => {
//   console.log(req.body)

//   UserSchema.register(new UserSchema({username: req.body.username}), req.body.password, (err, account) => {
//     if (err) {
//       return res.render('register', {account: account})
//     }

//     passport.authenticate('local')(req, res, () => {
//       res.redirect('/admin')
//     })
//   })
// })

blog.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

blog.get('/admin', ensureAuth, function (req, res) {
  res.render('admin', { usuario: req.user.username });
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