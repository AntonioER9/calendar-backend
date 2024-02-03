const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();

//Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

//Directorio Público
app.use(express.static('public')); //Middleware

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
// CRUD: EVENTOS

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT} `);    
});