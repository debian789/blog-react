import {Router} from 'express'

let blog = Router()

blog.get('/', (req, res) => {
  console.log('respondiendo desde la ruta')
  res.render('index', {title: 'Hoooola Angel :) !!'})
})

blog.get('/crear', (req, res) => {
  res.render('form-administrar')
})

export default blog
