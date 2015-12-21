'use strict'
import http from 'http'
import express from 'express'
import blogApi from 'server/routers/routerBlogApi'
import blog from 'server/routers/routerBlog'
import mongooseConfig from 'server/config/mongooseConfig'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import expressSession from 'express-session'
import passport from 'passport'
import { Strategy } from 'passport-local'
import path from 'path'
import UserSchema from 'server/models/userSchema'
import flash from 'connect-flash'

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

passport.use(new LocalStrategy(UserSchema.authenticate()))
passport.serializeUser(UserSchema.serializeUser())
passport.deserializeUser(UserSchema.deserializeUser())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hjs')

// respuesta HTML - render react
app.use('/', blog)


// respuestas json
app.use('/api', blogApi)

server.listen(3000)
console.log('server iniciado puerto 3000')
