'use strict'
//llamada al schema registro creado en la clase register
const register = require('../helpers/register')

//funcion que permite hacer post
function Registration(req, res){
  console.log('POST /api/register')
  console.log(req.body)
  //almacenaremos en la BD un producto y sus caracteristicas
  let rec = new register()
  rec.mac = req.body.mac
  rec.latitud = req.body.lat
  rec.longitud = req.body.lon
  rec.save((err , registertStored)=>{
    if (err) res.status(500).send({message: `Error al salvar en DB ${err}`})
    res.status(200).send({registers: registertStored})
  })
}

//funcion que permite hacer get a la info registreada
module.exports = { Registration}
