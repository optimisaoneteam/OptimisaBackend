'use strict'
//Aqui tenemos la configuracion de express.
//importacion de modulos
//importamos express, bodyParser y mongoose
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
//en este fichero pedimos la informacion de configuracion
//y la info de la conf con express
//para usar nuevas variables, bueas practicas
//utilzamos mongoose para poner en marcha una BD y sus propiedades
const mongoose = require('mongoose');
const config = require('./configuration/config')
const registration = require('./routes/insert')
const display = require('./routes/display')

const testmac = require('./helpers/testmac')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//usamos el modulo api, que creamos en ruta

//enlace localhost and llamada a la clase.nombre del metodo
app.post('/api/register', registration.Registration)
app.get('/api/register', display.getRegister)
//idealmente que se llame obtener evento
app.get('/api/register',testmac.showMac)
//se conecta a la base de datos
mongoose.connect(config.db, (err, res) => {
    if(err){
      return console.log(`Error al conectar a DB: ${err}`)
    }
    console.log('conexión a BD establecida...')
  //una vez conectada, empieza a escuchar al servidor de express
    app.listen(config.port , () => {
      console.log(`API REST corriendo el localhost:${config.port}`);
    });
    app.get('/', function (req, res) {
    res.send('Hello Optimisa!');
    });

})
