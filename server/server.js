'use strict'
import express from 'express'
import blogApi from 'server/routers/routerBlogApi'
import blog from 'server/routers/routerBlog'
import mongooseConfig from 'server/config/mongooseConfig'
//import engine from 'react-engine'
import bodyParser from 'body-parser'
import path from 'path'

const app = express()

app.use(express.static('public'))

// middleware para el manejo de datos de formulario body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// implementar react-engine para el render de react
// app.engine('.jsx', engine.server.create({
//  routes: require('server/views/routes.jsx'),
//  routesFilePath: 'server/views/routes.jsx'
// }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hjs')
// app.set('view', engine.expressView)

// respuesta HTML - render react
app.use('/', blog)

// app.get('/', (req, res) => {
//   res.render(req.url, {
//    title: 'hola jjj3j3j3j3 :P '
//  })
// })

// respuestas json
app.use('/api', blogApi)

app.listen(3001)
console.log('server iniciado puerto 3000')
