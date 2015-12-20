'use strict'
import http from 'http'
import express from 'express'
import blogApi from 'server/routers/routerBlogApi'
import blog from 'server/routers/routerBlog'
import mongooseConfig from 'server/config/mongooseConfig'
//import engine from 'react-engine'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import expressSession from 'express-session'
import passport from 'passport'
import { Strategy } from 'passport-local'
import path from 'path'
const LocalStrategy = Strategy

const app = express()
const server = http.createServer(app)

app.use(require('stylus').middleware(path.join(__dirname, 'public')))
app.use(express.static('public'))

// middleware para el manejo de datos de formulario body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieParser())

app.use(expressSession({
  secret: 'holamundo',
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy ((username, password, done) => {
  if (username === 'soy' && password === 'angel') {
    return done(null, { name: 'Super', lastname: 'User', username: 'superuser' })
  }

  done(null, false, {message: 'Unknown user'})
}))

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hjs')

// respuesta HTML - render react
app.use('/', blog)


// respuestas json
app.use('/api', blogApi)

server.listen(3000)
console.log('server iniciado puerto 3000')
