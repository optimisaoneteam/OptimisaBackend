'use strict'
const register = require('./esquemaRegister')

function showMac(req, res){
  let mac = req.params.mac

  register.findMac(mac,(err, register)=>{
    if(err) return res.status(500).send({message:`Error al realizar peticion: ${err}`})
    if(!registers) return res.status(404).send({message:`No existen registros `})
    res.status(200).send({mac})
  })
}
module.exports = {showMac}
