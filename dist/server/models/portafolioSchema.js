'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PortafolioSchema = new _mongoose2.default.Schema({
  titulo: { type: String },
  descripcion: { type: String },
  imagenPrincipal: { type: String },
  fechaCreacion: { type: Date },
  urlWeb: { type: String },
  urlRepositorio: { type: String },
  tecnologias: { type: Array },
  cliente: { type: String },
  tipo: { type: String },
  estado: { type: Boolean }
});

exports.default = _mongoose2.default.model('Portafolio', PortafolioSchema);