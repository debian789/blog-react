'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _contactoSchema = require('server/models/contactoSchema');

var _contactoSchema2 = _interopRequireDefault(_contactoSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contacto = (0, _express.Router)();

function validarAutenticacion(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/');
  }
}

contacto.post('/contacto/eliminar/:id', validarAutenticacion, function (req, res) {
  var id = req.params.id;

  _contactoSchema2.default.findOneAndRemove({ '_id': id }, function (err, datos) {
    if (err) {
      return res.sendStatus(500);
    }

    res.json(datos);
  });
});

contacto.get('/contacto', validarAutenticacion, function (req, res) {
  _contactoSchema2.default.find({}, function (err, datos) {
    if (err) {
      return res.sendStatus(500);
    }

    res.json(datos);
  });
});

contacto.post('/contacto', function (req, res) {
  var contacto = new _contactoSchema2.default();

  contacto.nombre = req.body.nombre;
  contacto.email = req.body.email;
  contacto.asunto = req.body.asunto;
  contacto.consulta = req.body.consulta;

  contacto.save(function (err) {
    if (err) {
      return res.sendStatus(500);
    }

    res.json(contacto);
  });
});

exports.default = contacto;