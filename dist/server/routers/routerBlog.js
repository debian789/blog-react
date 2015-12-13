'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var blog = (0, _express.Router)();

blog.get('/', function (req, res) {
  console.log('respondiendo desde la ruta');
  res.render('index', { title: 'Hoooola Angel :) !!' });
});

blog.get('/crear', function (req, res) {
  res.render('form-administrar');
});

exports.default = blog;