import mongoose from 'mongoose';

const gestionAnimalSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  codigo: { type: String, required: true, unique: true },
  sexo: { type: String, enum: ['macho', 'hembra'], required: true },
  raza: { type: String, required: true },
  peso: { type: Number, required: true },
  fechaNacimiento: { type: Date, required: true },
  fechaIngreso: { type: Date, required: true },
  salud: { type: String, enum: ['optimo', 'sano', 'enfermo', 'muerto'], required: true },
  gestante: { type: Boolean, required: true },
  estadoReproductivo: { type: String, enum: ['vacía', 'preñada', 'desconocido'], required: true },
  observaciones: { type: String },
  estado: { type: String, enum: ['Normal', 'Embarazada'], default: 'Normal' },
  vacuna: { type: String }, // Campo para registrar la vacuna aplicada
  enfermedad: { type: String } // Campo para registrar la enfermedad en caso de salud "enfermo"
});

const GestionAnimal = mongoose.model('GestionAnimal', gestionAnimalSchema);

export default GestionAnimal;