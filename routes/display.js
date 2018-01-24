'use strict'
//llamada al schema registro creado en la clase register
const register = require('../helpers/esquemaRegister')



function getRegister(req, res){
  register.find({}, (err, registers)=>{
    if(err) return res.status(500).send({message:`Error al realizar peticion: ${err}`})
    if(!registers) return res.status(404).send({message:`No existen registros `})
    res.status(200).send({registers})
  });
}

module.exports = { getRegister }
