'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _generalSchema = require('server/models/generalSchema');

var _generalSchema2 = _interopRequireDefault(_generalSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var general = (0, _express.Router)();

general.get('/general', function (req, res) {
  _generalSchema2.default.findOne({}, function (err, data) {
    if (err) {
      return res.sendStatus(500);
    }
    res.json(data);
  });
});

general.post('/general', function (req, res) {
  var general = new _generalSchema2.default();
  general.nombre = req.body.nombre;
  general.imagenPerfil = req.body.imagenPerfil;
  general.descripcion = req.body.descripcion;
  general.facebook = req.body.facebook;
  general.twitter = req.body.twitter;
  general.github = req.body.github;
  general.googleAnalytics = req.body.googleAnalytics;

  general.save(function (err) {
    if (err) {
      return res.json(err);
    }
    res.json(general);
  });
});

exports.default = general;