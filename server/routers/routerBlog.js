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
  successRedirect: '/admin',
  failureRedirect: '/login'
}))

blog.get('/register', (req, res) => {
  res.render('register')
})

blog.post('/register', (req, res, next) => {
  console.log(req.body)

  UserSchema.register(new UserSchema({username: req.body.username}), req.body.password, (err, account) => {
    if (err) {
      return res.render('register', {account: account})
    }

    passport.authenticate('local')(req, res, () => {
      res.redirect('/admin')
    })
  })
})

blog.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

blog.get('/admin', ensureAuth, (req, res) => {
  res.render('admin', { usuario: req.user.username })
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
