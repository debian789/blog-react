'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _blogSchema = require('../models/blogSchema');

var _blogSchema2 = _interopRequireDefault(_blogSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blog = (0, _express.Router)();
function validarAutenticacion(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/');
  }
}

blog.get('/blog', function (req, res) {
  _blogSchema2.default.find({}, function (err, datos) {
    if (err) {
      return res.sendStatus(500);
    }

    res.json(datos);
  });
});

blog.get('/blog/:id', function (req, res) {
  var id = req.params.id;
  _blogSchema2.default.findOne({ '_id': id }, function (err, datos) {
    if (err) {
      return res.sendStatus(500);
    }

    res.json(datos);
  });
});

blog.post('/blog/eliminar/:id', validarAutenticacion, function (req, res) {
  var id = req.params.id;
  _blogSchema2.default.findOneAndRemove({ '_id': id }, function (err, datos) {
    if (err) {
      return res.sendStatus(500);
    }

    res.json(datos);
  });
});

blog.post('/blog/:id', validarAutenticacion, function (req, res) {
  var id = req.params.id;
  var datos = req.body;
  console.log(datos);
  _blogSchema2.default.update({ '_id': id }, {
    titulo: datos.titulo,
    imagenPrincipal: datos.imagenPrincipal,
    descripcion: datos.descripcion
  }, function (err, data) {
    if (err) {
      res.sendStatus(500);
      console.log('no se actualizo');
    } else {
      res.json(data);
      console.log('se actualizo correctamente');
    }
  });
});

blog.post('/blog', validarAutenticacion, function (req, res) {
  var blog = new _blogSchema2.default();
  var titulo = req.body.titulo;
  var imagenPrincipal = req.body.imagenPrincipal;
  var descripcion = req.body.descripcion;

  blog.titulo = titulo;
  blog.imagenPrincipal = imagenPrincipal;
  blog.descripcion = descripcion;

  blog.save(function (err) {
    if (err) {
      return res.json(err); // return res.sendStatus(500).json(err)
    }

    res.json(blog);
  });
});

exports.default = blog;