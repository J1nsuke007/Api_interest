const express = require('express');
const morgan = require('morgan');
const app = express();
const puerto = process.env.PORT || 4000

//Middlewares

//Sirve para entender y leer objetos de tipo json
app.use(express.json())

//sirve para dar informacion de la peticion que hace el cliente
app.use(morgan('dev'));

//importamos nuetro archivo "rutas" el cual tiene nuestros endpoints
app.use(require('./rutas'));

//escuchamos desde el puerto tal para realizar distintas tareas
app.listen(puerto, ()=>{
    console.log(`Escuchando en el puerto ${puerto}`);
})