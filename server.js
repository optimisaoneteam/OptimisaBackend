'use strict'
/*Aqui tenemos la configuracion de express.
importacion de modulos
importamos express, bodyParser y mongoose*/
const express = require('express')
const bodyParser = require('body-parser')
const app = express() //obtengo los recursos express
const mongoose = require('mongoose');//utilzamos mongoose para poner en marcha una BD y sus propiedades
const config = require('./configuration/config')//usamos el modulo correspondiente al puerto y ruta BD
const insert = require('./routes/insert')//llamada a al modulo para insertar datos
const display = require('./routes/display')
//prueba
const insertUser = require('./configuration/insertUsers')
const displayUser = require('./configuration/displayUsers')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//enlace localhost and llamada a la clase.nombre del metodo
//en verde se define la ruta en que se trabajara
app.post('/api/insert', insert.saveEvent)
app.get('/api/display', display.getEvents)
//prueba
app.post('/api/insert/users', insertUser.saveUser)
app.get('/api/display/users', displayUser.getUsers)

mongoose.connect(config.db, (err, res) => { //se conecta a la base de datos
    if(err){
      return console.log(`Error al conectar a DB: ${err}`)
    }
    console.log('conexión a BD establecida...')
    app.listen(config.port , () => {//una vez conectada, empieza a escuchar al servidor de express
      console.log(`API REST corriendo el localhost:${config.port}`);
    });

    app.get('/', function (req, res) {
    res.send('Hello Optimisa!');
    });
})
