'use strict'
//llamada al schema registro creado en la clase register
const register = require('../helpers/esquemaRegister')

//funcion que permite hacer post
function Registration(req, res){
  console.log('POST /api/register')
  //registrar_evento
  console.log(req.body)
  //almacenaremos en la BD un producto y sus caracteristicas
  let rec = new register()
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

module.exports = { Registration}
