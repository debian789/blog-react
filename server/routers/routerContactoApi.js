import {Router} from 'express'
import ContactoSchema from 'server/models/contactoSchema'

let contacto = Router()

function validarAutenticacion (req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/')
  }
}

contacto.post('/contacto/eliminar/:id', validarAutenticacion, (req, res) => {
  let id = req.params.id

  ContactoSchema.findOneAndRemove({'_id': id}, (err, datos) => {
    if (err) {
      return res.sendStatus(500)
    }

    res.json(datos)
  })
})

contacto.get('/contacto', validarAutenticacion, (req, res) => {
  ContactoSchema.find({}, (err, datos) => {
    if (err) {
      return res.sendStatus(500)
    }

    res.json(datos)
  })
})

contacto.post('/contacto', (req, res) => {
  let contacto = new ContactoSchema()

  contacto.nombre = req.body.nombre
  contacto.email = req.body.email
  contacto.asunto = req.body.asunto
  contacto.consulta = req.body.consulta

  contacto.save((err) => {
    if (err) {
      return res.sendStatus(500)
    }

    res.json(contacto)
  })
})

export default contacto
