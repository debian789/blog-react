'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _portafolioSchema = require('server/models/portafolioSchema');

var _portafolioSchema2 = _interopRequireDefault(_portafolioSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var portafolio = (0, _express.Router)();

portafolio.get('/portafolio', function (req, res) {
  _portafolioSchema2.default.find({}, function (err, data) {
    if (err) {
      res.sendStatus(500);
    }
    res.json(data);
  });
});

portafolio.post('/portafolio', function (req, res) {
  var portafolio = new _portafolioSchema2.default();

  portafolio.titulo = req.body.titulo;
  portafolio.descripcion = req.body.descripcion;
  portafolio.imagenPrincipal = req.body.imagenPrincipal;
  portafolio.fechaCreacion = req.body.fechaCreacion;
  portafolio.url = req.body.url;
  portafolio.tecnologias = req.body.tecnologias;

  portafolio.save(function (err) {
    if (err) {
      res.sendStatus(err);
    }

    res.json(portafolio);
  });
});

portafolio.post('/portafolio/:id', function (req, res) {
  var id = req.params.id;

  _portafolioSchema2.default.update({ '_id': id }, {
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    imagenPrincipal: req.body.imagenPrincipal,
    fechaCreacion: req.body.fechaCreacion,
    url: req.body.url,
    tecnologias: req.body.tecnologias
  }, function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

portafolio.post('/portafolio/eliminar/:id', function (req, res) {
  var id = req.param.id;

  _portafolioSchema2.default.findOneAndRemove({ '_id': id }, function (err, datos) {
    if (err) {
      return res.sendStatus(500);
    }

    res.json(datos);
  });
});

exports.default = portafolio;