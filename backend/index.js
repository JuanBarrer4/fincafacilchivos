import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Importar rutas
import Myroutes from './routes/routes.mjs';
import AuthRoutes from './routes/authroute.mjs';

// Configurar rutas y constantes
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware para JSON
app.use(express.json());

// Servir archivos estáticos (HTML, CSS, JS frontend)
app.use(express.static(path.join(__dirname, '../frontend/view')));

// Rutas
app.use('/', Myroutes); // rutas generales
app.use('/api', AuthRoutes); // login, auth

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Conexión a MongoDB exitosa');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Error al conectar a MongoDB:', error.message);
  });
