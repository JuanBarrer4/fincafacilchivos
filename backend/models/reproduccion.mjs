import mongoose from 'mongoose';

const nacimientoSchema = new mongoose.Schema({
  machos: { type: Number, required: true },
  hembras: { type: Number, required: true },
  totalNacidos: {
    type: Number,
    required: true,
    default: function () {
      return this.machos + this.hembras;
    }
  }
});

const reproduccionSchema = new mongoose.Schema({
  tiempoEmbarazo: { type: String, required: true },
  recomendaciones: { type: [String], required: true },
  alimentos: { type: [String], required: true },
  cuidados: { type: [String], required: true },
  nacimientos: [nacimientoSchema]
});

const Reproduccion = mongoose.model('Reproduccion', reproduccionSchema);

export default Reproduccion;