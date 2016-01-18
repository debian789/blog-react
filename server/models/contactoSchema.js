'use strict'
import mongoose from 'mongoose'

let ContactoSchema = new mongoose.Schema({
  nombre: {type: String},
  email: {type: String},
  asunto: {type: String},
  consulta: {type: String}
})

export default mongoose.model('Contacto', ContactoSchema)
