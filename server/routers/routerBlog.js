import {Router} from 'express'
import passport from 'passport'
import UserSchema from 'server/models/userSchema'

let blog = Router()

blog.get('/', (req, res) => {
  console.log('respondiendo desde la ruta')
  res.render('index', {title: 'Hoooola Angel :) !!'})
})

blog.get('/login', (req, res) => {
  res.render('login')
})

blog.post('/login', passport.authenticate('local', {
  successRedirect: '/welcome',
  failureRedirect: '/login'
}))

blog.get('/register', (req, res) => {
  res.render('register')
})

blog.post('/register', (req, res, next) => {
  console.log(req.body)
  let user = new UserSchema(req.body)

  user.save((err) => {
    if (err) {
      console.log(err)
      return res.redirect('/login')
    }

    req.login(user, (err) => {
      if (err) {
        return next(err)
      }

      return res.redirect('/welcome')
    })
  })
})

blog.get('/welcome', ensureAuth, (req, res) => {
  res.render('welcome', { usuario: req.user.username })
})

blog.get('/crear', (req, res) => {
  res.render('form-administrar')
})

// Validar si esta autenticado que permita el otro middleware
function ensureAuth (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

export default blog
