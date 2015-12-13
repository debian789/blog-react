import mongoose from 'mongoose'

let BlogSchema = new mongoose.Schema({
  // id: { type: Number, required: true, unique: true },
  titulo: { type: String, required: 'Titulo requerido' },
  descripcion: String,
  fechaCreacion: { type: Date, default: Date.now }
})

export default mongoose.model('Blog', BlogSchema)
