'use strict'
const schemaRegister = require('../helpers/schemaRegister')
const schemaUsers = require('../helpers/schemaRegister')
//console.log('el usuario existe en la bd y su mac es tanto')

function search(req, res){
  let usermac = new schemaUsers()
  let registermac = new schemaRegister()
  if(usermac.mac == registermac.mac){
   console.log('el usuario existe en la base de datos'+usermac.name +
   ' y su dirección mac :'+usermac.mac)
  }
}

module.exports= {search}
