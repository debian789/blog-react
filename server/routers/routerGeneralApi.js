import {Router} from 'express'
import GeneralSchema from 'server/models/generalSchema'

let general = Router()

general.get('/general', (req, res) => {
  GeneralSchema.findOne({}, (err, data) => {
    if (err) {
      return res.sendStatus(500)
    }
    res.json(data)
  })
})

general.post('/general', (req, res) => {
  // let general = new GeneralSchema()
  // let _id = req.body._id
  console.log(req.body)

  GeneralSchema.findOneAndUpdate({}, {
    nombre: req.body.nombre,
    imagenPerfil: req.body.imagenPerfil,
    descripcion: req.body.descripcion,
    facebook: req.body.facebook,
    twitter: req.body.twitter,
    github: req.body.github
  }, (err) => {
    if (err) {
      return res.json(err)
    }
    res.json(general)
  })
})

export default general
