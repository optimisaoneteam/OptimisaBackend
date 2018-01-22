'use strict'
const register = require('../helpers/register')

function Registration(req, res){
  console.log('POST /api/register')
  console.log(req.body)
  //almacenaremos en la BD un producto y sus caracteristicas
  let rec = new register()
  rec.id = req.body.id
  rec.date = req.body.date
  rec.description = req.body.description
  rec.save((err , registertStored)=>{
    if (err) res.status(500).send({message: `Error al salvar en DB ${err}`})
    res.status(200).send({rec: registertStored})
  })
}

module.exports = { Registration }
