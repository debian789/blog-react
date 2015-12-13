'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _blogSchema = require('../models/blogSchema');

var _blogSchema2 = _interopRequireDefault(_blogSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blog = (0, _express.Router)();

blog.get('/blog', function (req, res) {
  _blogSchema2.default.find({}, function (err, datos) {
    if (err) {
      return res.sendStatus(500);
    }

    res.json(datos);
  });
});

blog.post('/blog', function (req, res) {
  var blog = new _blogSchema2.default();
  var titulo = 'Hola express';
  var descripcion = 'Esta es una Noticia nueva jejeje :P ';
  blog.titulo = titulo;
  blog.descripcion = descripcion;
  blog.save(function (err) {
    if (err) {
      return res.json(err); // return res.sendStatus(500).json(err)
    }

    res.json(blog);
  });

  // res.json({"hola":"Miguel :) !"});
});

exports.default = blog;