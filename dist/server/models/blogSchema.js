'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlogSchema = new _mongoose2.default.Schema({
  titulo: { type: String, required: 'Titulo requerido' },
  imagenPrincipal: { type: String, default: '' },
  descripcion: String,
  fechaCreacion: { type: Date, default: Date.now }
});

exports.default = _mongoose2.default.model('Blog', BlogSchema);