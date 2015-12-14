'use strict'
import express from 'express'
import blogApi from 'server/routers/routerBlogApi'
import blog from 'server/routers/routerBlog'
import mongooseConfig from 'server/config/mongooseConfig'
//import engine from 'react-engine'
import bodyParser from 'body-parser'
import path from 'path'

const app = express()

app.use(require('stylus').middleware(path.join(__dirname, 'public')))
app.use(express.static('public'))

// middleware para el manejo de datos de formulario body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hjs')

// respuesta HTML - render react
app.use('/', blog)

// app.get('/', (req, res) => {
//   res.render(req.url, {
//    title: 'hola jjj3j3j3j3 :P '
//  })
// })

// respuestas json
app.use('/api', blogApi)

app.listen(3000)
console.log('server iniciado puerto 3000')
