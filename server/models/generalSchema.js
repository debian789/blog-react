import mongoose from 'mongoose'

let GeneralSchema = new mongoose.Schema({
  nombre: {type: String},
  imagenPerfil: {type: String},
  descripcion: {type: String},
  sobremi: {type: String},
  facebook: {type: String},
  twitter: {type: String},
  github: {type: String},
  mensajeContacto: {type: String}
})

export default mongoose.model('General', GeneralSchema)
