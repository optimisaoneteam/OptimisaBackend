'use strict'
//llamada al schema registro creado en la clase register
const schema = require('../helpers/schemaRegister')


function getEvents(req, res){ //FUNCION QUE RETORNA EL OBJETO REQUEST (PETICIÓN) Y RESPONSE(RESPUESTA)

  //la funcion busqueda, tiene como params el JSOn y una funcion
  schema.find({}, (err, registers)=>{
    if(err) return res.status(500).send({message:`Error al realizar peticion: ${err}`})
    if(!registers) return res.status(404).send({message:`No existen registros `})
    res.status(200).send({registers})
  });
}

module.exports = { getEvents }
