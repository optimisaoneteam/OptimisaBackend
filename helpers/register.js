'use strict'
//----------------------//
const mongoose = require('mongoose')
const Schema = mongoose.Schema
//creacion de esquema

const RegisterSchema = Schema({
//crearemos los campos
  id: Number,
  date: String,
  description: String
})

module.exports = mongoose.model('register', RegisterSchema)
