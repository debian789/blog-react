import {Router} from 'express'
import GeneralSchema from 'server/models/generalSchema'

let general = Router()
function validarAutenticacion (req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/')
  }
}
general.get('/general', (req, res) => {
  GeneralSchema.findOne({}, (err, data) => {
    if (err) {
      return res.sendStatus(500)
    }
    res.json(data)
  })
})

general.post('/general', validarAutenticacion, (req, res) => {
  GeneralSchema.findOneAndUpdate({}, {
    nombre: req.body.nombre,
    imagenPerfil: req.body.imagenPerfil,
    descripcion: req.body.descripcion,
    sobremi: req.body.sobremi,
    facebook: req.body.facebook,
    twitter: req.body.twitter,
    github: req.body.github,
    mensajeContacto: req.body.mensajeContacto
  }, {new: true, upsert: true}, (err) => {
    if (err) {
      return res.json(err)
    }

    res.json(general)
  })
})

export default general
