//Mantendremos la configuracion del puerto y bd
//solo elemtos de configuración
module.exports = {
  port : process.env.PORT || 8090,
  db: process.env.MONGODB || 'mongodb://localhost:27017/shop'
}
