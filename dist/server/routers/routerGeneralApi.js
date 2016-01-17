'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _generalSchema = require('server/models/generalSchema');

var _generalSchema2 = _interopRequireDefault(_generalSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var general = (0, _express.Router)();
function validarAutenticacion(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/');
  }
}
general.get('/general', function (req, res) {
  _generalSchema2.default.findOne({}, function (err, data) {
    if (err) {
      return res.sendStatus(500);
    }
    res.json(data);
  });
});

general.post('/general', validarAutenticacion, function (req, res) {
  _generalSchema2.default.findOneAndUpdate({}, {
    nombre: req.body.nombre,
    imagenPerfil: req.body.imagenPerfil,
    descripcion: req.body.descripcion,
    sobremi: req.body.sobremi,
    facebook: req.body.facebook,
    twitter: req.body.twitter,
    github: req.body.github
  }, { new: true, upsert: true }, function (err) {
    if (err) {
      return res.json(err);
    }

    res.json(general);
  });
});

exports.default = general;