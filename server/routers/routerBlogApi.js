import {Router} from 'express'
import BlogSchema from '../models/blogSchema'

let blog = Router()
function validarAutenticacion (req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/')
  }
}

blog.get('/blog', (req, res) => {
  BlogSchema.find({}, (err, datos) => {
    if (err) {
      return res.sendStatus(500)
    }

    res.json(datos)
  })
})

blog.get('/blog/:id', (req, res) => {
  let id = req.params.id
  BlogSchema.findOne({'_id': id}, (err, datos) => {
    if (err) {
      return res.sendStatus(500)
    }

    res.json(datos)
  })
})

blog.post('/blog/eliminar/:id', validarAutenticacion, (req, res) => {
  let id = req.params.id
  BlogSchema.findOneAndRemove({'_id': id}, (err, datos) => {
    if (err) {
      return res.sendStatus(500)
    }

    res.json(datos)
  })

})

blog.post('/blog/:id', validarAutenticacion, (req, res) => {
  let id = req.params.id
  let datos = req.body
  console.log(datos)
  BlogSchema.update({'_id': id }, {
    titulo: datos.titulo,
    imagenPrincipal: datos.imagenPrincipal,
    descripcion: datos.descripcion
  }, (err, data) => {
    if (err) {
      res.sendStatus(500)
      console.log('no se actualizo')
    } else {
      res.json(data)
      console.log('se actualizo correctamente')
    }
  })
})

blog.post('/blog', validarAutenticacion, (req, res) => {
  let blog = new BlogSchema()
  let titulo = req.body.titulo
  let imagenPrincipal = req.body.imagenPrincipal
  let descripcion = req.body.descripcion

  blog.titulo = titulo
  blog.imagenPrincipal = imagenPrincipal
  blog.descripcion = descripcion

  blog.save((err) => {
    if (err) {
      return res.json(err)// return res.sendStatus(500).json(err)
    }

    res.json(blog)
  })
})

export default blog
