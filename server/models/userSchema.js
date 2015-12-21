'use strict'

import mongoose from 'mongoose'
import crypto from 'crypto'
let Schema = mongoose.Schema

let UserSchema = new Schema({
  username: String,
  salt: String,
  password: {
    type: String,
    validate: [
      (password) => {
        return password && password.length > 6
      }, 'La contraseña debe ser mas larga'
    ]
  },
  email: String
})

UserSchema.pre('save', (next) => {
  console.log(this)
  if (this.password) {
    this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64')
    this.password = this.hasPassword(this.password)
  }

  next()
})

UserSchema.methods.hashPassword = (password) => {
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64')
}

UserSchema.methods.authenticate = (password) => {
  return this.password === this.hashPassword(password)
}

export default mongoose.model('User', UserSchema)
