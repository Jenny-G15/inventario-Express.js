const express = require('express');
const cors = require('cors'); // Importar cors
const app = express();
const fs = require('fs');
const path = require('path');
const Rutas = require('./src/Routes/inventarioRut');

const PORT = process.env.PORT || 3000;

// Habilitar CORS para todas las rutas
app.use(cors());

// Middlewares el npm de express que realizamos
app.use(express.json());

// Rutas, aqui se pueden agregar las demas rutas que iremos creando
app.use('/api/products', Rutas);

//Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});