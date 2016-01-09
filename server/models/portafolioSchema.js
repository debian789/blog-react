import mongoose from 'mongoose'

let PortafolioSchema = new mongoose.Schema({
  titulo: {type: String},
  descripcion: {type: String},
  imagenPrincipal: {type: String},
  fechaCreacion: {type: Date},
  url: {type: String},
  tecnologias: {type: Array}
})

export default mongoose.model('Portafolio', PortafolioSchema)
