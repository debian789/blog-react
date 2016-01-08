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
  let general = new GeneralSchema()
  general.nombre = req.body.nombre
  general.imagenPerfil = req.body.imagenPerfil
  general.descripcion = req.body.descripcion
  general.facebook = req.body.facebook
  general.twitter = req.body.twitter
  general.github = req.body.github
  general.googleAnalytics = req.body.googleAnalytics

  general.save((err) => {
    if (err) {
      return res.json(err)
    }
    res.json(general)
  })
})

export default general
