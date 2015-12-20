import {Router} from 'express'
import passport from 'passport'
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
