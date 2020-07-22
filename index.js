const express = require('express');

require('dotenv').config();

const cors = require('cors');

const { dbConnection } = require('./database/config');


// Crear el servidor express
const app = express();

// Configurar COR
app.use(cors());

// base de datos
dbConnection();


// usuario mongo joserafamellado password shibainu1068

// Rutas
app.get('/', (req, res) => {

    res.status(200).json({
        ok: true,
        msg: 'Hola Mundo'
    });
});


//
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);

});