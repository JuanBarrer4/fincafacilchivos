import mongoose from 'mongoose';

const vacunaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  dosis: { type: String, required: true },
  frecuencia: { type: String, required: true },
  viaAdministracion: { type: String, required: true },
  eficacia: { type: String, required: true }
});

const enfermedadSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  agenteCausal: { type: String, required: true },
  sintomasClinicos: { type: String, required: true },
  modoTransmision: { type: String, required: true },
  impactoProduccion: { type: String, required: true },
  prevencion: { type: String, required: true },
  tratamiento: { type: String, required: true }
});

const saludAnimalSchema = new mongoose.Schema({
  vacunas: [vacunaSchema],
  enfermedades: [enfermedadSchema]
});

const SaludAnimal = mongoose.model('SaludAnimal', saludAnimalSchema);

export default SaludAnimal;