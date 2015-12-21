'use strict'

import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'
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

UserSchema.plugin(passportLocalMongoose)

export default mongoose.model('User', UserSchema)
