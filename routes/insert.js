'use strict'
//llamada al schema registro creado en la clase register
const schema = require('../helpers/schemaRegister')

const schemaUsers = require('../helpers/schemaUsers')
//funcion que permite hacer post

function saveEvent(req, res){//almacenaremos en la BD un producto y sus caracteristicas
  console.log('POST /api/insert')//registrar_evento
  console.log(req.body)

  let rec = new schema()
  let usermac = new schemaUsers()

  rec.mac = req.body.mac
  rec.latitud = req.body.lat
  rec.longitud = req.body.lon
  //direccion con una api
  //tipo de evento ejemplo general
  //informacion adiccional, ejemplo fui al cine (no hacer la caja especificamente)
  rec.save((err , registertStored)=>{
    if (err) res.status(500).send({message: `Error al salvar en DB ${err}`})
    res.status(200).send({registers: registertStored})
  })
}
/*function saveEvent(req, res, callBack){
  let usermac = new schemaUsers()
  let registermac = new schemaRegister()
  if(usermac.mac == registermac.mac){
   console.log('el usuario existe en la base de datos'+usermac.name +
   ' y su dirección mac :'+usermac.mac)

   let rec = new schema()
   rec.mac = req.body.mac
   rec.latitud = req.body.lat
   rec.longitud = req.body.lon
  callback();

}
saveEvent(req, res,function(rq, res){
  console.log("")
})*/


module.exports = { saveEvent}
