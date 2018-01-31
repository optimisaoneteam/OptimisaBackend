'use strict'
//----------------------//
const schema = require('../helpers/schemaUsers')
//funcion que permite hacer post
function saveUser(req, res){//almacenaremos en la BD un producto y sus caracteristicas
  let rec = new schema()

  rec.name = req.body.name
  rec.mac = req.body.mac
  //direccion con una api
  //tipo de evento ejemplo general
  //informacion adiccional, ejemplo fui al cine (no hacer la caja especificamente)
    rec.save((err , userStored)=>{
    if (err) res.status(500).send({message: `Error al salvar en DB ${err}`})
    res.status(200).send({users: userStored})
  })
}
module.exports = { saveUser}
/*
    {user : 'Ignacio', mac : '0:a:f5:4f:90:74'},
    {titulo : 'Test', director : 'e4:90:7e:bf:a8:86'}
*/
