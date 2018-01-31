'use strict'
//----------------------//
const mongoose = require('mongoose')
const Schema = mongoose.Schema
//creacion de esquema
const UserSchema = Schema({
//crearemos los campos
  name: String,
  mac: String

})
module.exports = mongoose.model('users', UserSchema)
