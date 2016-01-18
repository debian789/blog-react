'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GeneralSchema = new _mongoose2.default.Schema({
  nombre: { type: String },
  imagenPerfil: { type: String },
  descripcion: { type: String },
  sobremi: { type: String },
  facebook: { type: String },
  twitter: { type: String },
  github: { type: String },
  mensajeContacto: { type: String }
});

exports.default = _mongoose2.default.model('General', GeneralSchema);