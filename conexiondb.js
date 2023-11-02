require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;


// Función para conectar a la base de datos
async function connectDB() {
    try {
    // Conectar a la base de datos
    const client = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
      // Más opciones de configuración si es necesario
    });

    // En este punto, la conexión a la base de datos se ha establecido correctamente
    console.log("Conexión a MongoDB exitosa");

    // Devolver el cliente de la base de datos
    return client;
} catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    throw error;
    }
}

module.exports = connectDB;
