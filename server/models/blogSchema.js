import mongoose from 'mongoose'

let BlogSchema = new mongoose.Schema({
  titulo: { type: String, required: 'Titulo requerido' },
  imagenPrincipal: {type: String, default: 'None'},
  descripcion: String,
  fechaCreacion: { type: Date, default: Date.now }
})

export default mongoose.model('Blog', BlogSchema)
