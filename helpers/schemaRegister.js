'use strict'
//----------------------//
const mongoose = require('mongoose')
const Schema = mongoose.Schema
//creacion de esquema

const RegisterSchema = Schema({
//crearemos los campos
  mac: String,
  latitud: String,
  longitud: String

})


module.exports = mongoose.model('registers', RegisterSchema)//parametros: nombre de la coleccion y nombre del esquema
