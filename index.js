const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

//Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

//CORS
app.use(cors());

//Directorio Público
app.use(express.static('public')); //Middleware

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
// CRUD: EVENTOS
app.use('/api/events', require('./routes/events'));

app.get('*', (req, res) => { //Para deployar nuestra app de react junto con el backend en prod.
    res.sendFile(__dirname + '/public/index.html');
})

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT} `);    
});