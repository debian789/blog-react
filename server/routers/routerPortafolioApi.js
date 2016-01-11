import {Router} from 'express'
import PortafolioSchema from 'server/models/portafolioSchema'

let portafolio = Router()
function validarAutenticacion (req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/')
  }
}

portafolio.get('/portafolio', (req, res) => {
  PortafolioSchema.find({}, (err, data) => {
    if (err) {
      res.sendStatus(500)
    }
    res.json(data)
  })
})

portafolio.post('/portafolio', validarAutenticacion, (req, res) => {
  let portafolio = new PortafolioSchema()

  portafolio.titulo = req.body.titulo
  portafolio.descripcion = req.body.descripcion
  portafolio.imagenPrincipal = req.body.imagenPrincipal
  portafolio.fechaCreacion = req.body.fechaCreacion
  portafolio.urlWeb = req.body.urlWeb
  portafolio.urlRepositorio = req.body.urlRepositorio
  portafolio.tecnologias = req.body.tecnologias
  portafolio.cliente = req.body.cliente
  portafolio.tipo = req.body.tipo

  portafolio.save((err) => {
    if (err) {
      res.sendStatus(err)
    }

    res.json(portafolio)
  })
})

portafolio.post('/portafolio/:id', validarAutenticacion, (req, res) => {
  let id = req.params.id

  PortafolioSchema.update({'_id': id}, {
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    imagenPrincipal: req.body.imagenPrincipal,
    fechaCreacion: req.body.fechaCreacion,
    urlWeb: req.body.urlWeb,
    urlRepositorio: req.body.urlRepositorio,
    tecnologias: req.body.tecnologias,
    cliente: req.body.cliente,
    tipo: req.body.tipo
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

portafolio.post('/portafolio/eliminar/:id', validarAutenticacion, (req, res) => {
  let id = req.params.id

  PortafolioSchema.findOneAndRemove({'_id': id}, (err, datos) => {
    if (err) {
      return res.sendStatus(500)
    }

    res.json(datos)
  })
})

export default portafolio
