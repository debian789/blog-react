import {Router} from 'express'
import PortafolioSchema from 'server/models/portafolioSchema'

let portafolio = Router()

portafolio.get('/portafolio', (req, res) => {
  PortafolioSchema.find({}, (err, data) => {
    if (err) {
      res.sendStatus(500)
    }
    res.json(data)
  })
})

portafolio.post('/portafolio', (req, res) => {
  let portafolio = new PortafolioSchema()

  portafolio.titulo = req.body.titulo
  portafolio.descripcion = req.body.descripcion
  portafolio.imagenPrincipal = req.body.imagenPrincipal
  portafolio.fechaCreacion = req.body.fechaCreacion
  portafolio.url = req.body.url
  portafolio.tecnologias = req.body.tecnologias

  portafolio.save((err) => {
    if (err) {
      res.sendStatus(err)
    }

    res.json(portafolio)
  })
})

portafolio.post('/portafolio/:id', (req, res) => {
  let id = req.params.id

  PortafolioSchema.update({'_id': id}, {
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    imagenPrincipal: req.body.imagenPrincipal,
    fechaCreacion: req.body.fechaCreacion,
    url: req.body.url,
    tecnologias: req.body.tecnologias
  }, (err, data) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.json(data)
    }
  })
})

portafolio.get('/portafolio/:id', (req, res) => {
  let id = req.params.id

  PortafolioSchema.findOne({'_id': id}, (err, data) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.json(data)
    }
  })
})

portafolio.post('/portafolio/eliminar/:id', (req, res) => {
  let id = req.params.id

  PortafolioSchema.findOneAndRemove({'_id': id}, (err, datos) => {
    if (err) {
      return res.sendStatus(500)
    }

    res.json(datos)
  })
})

export default portafolio
