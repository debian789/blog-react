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
//import bCrypt from 'bcrypt-node'
import flash from 'connect-flash'

const LocalStrategy = Strategy
const app = express()
const server = http.createServer(app)

app.use(require('stylus').middleware(path.join(__dirname, 'public')))
app.use(express.static('public'))

//app.use(flash())

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

//function isValidPassword (user, password) {
//  return bCrypt.compareSync(password, user.password)
//}

// passport.use(new LocalStrategy ((username, password, done) => {
//   UserSchema.findOne({ 'username': username }, (err, user) => {
//     if (err) return done(err)
//
//     if (!user) {
//       return done(null, false,{message: 'Usuario no encontrado'})//, req.flash('message', 'User Not Found.'))
//     }
//
//     if (!isValidPassword(user, password)) {
//       return done(null, false, {message: 'Password no valido'}) //, req.flash('message', 'Invalid Password'))
//     }
//
//     return done(null, user)
//   })
//   //if (username === 'soy' && password === 'angel') {
//   //  return done(null, { name: 'Super', lastname: 'User', username: 'superuser' })
//   //}
//
// //  done(null, false, {message: 'Unknown user'})
// }))






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
