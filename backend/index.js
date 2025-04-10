import express from 'express';
import Myroutes from '../backend/routes/routes.mjs';
import AuthRoutes from '../backend/routes/authroute.mjs';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8080;

dotenv.config();

const uri = 'mongodb+srv://nuncho:nuncho12@cluster0.g63qsew.mongodb.net/fincaFacil?retryWrites=true&w=majority&appName=Cluster0';

app.use(express.static(path.join(__dirname, '../frontend/view')));

app.use(express.json());

// Unir rutas
app.use('/', Myroutes);

app.use('/api', AuthRoutes); // ruta de login

mongoose.connect(uri)
  .then(() => {
    console.log('✅ Conexión a MongoDB exitosa');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Error al conectar a MongoDB:', error.message);
  });

