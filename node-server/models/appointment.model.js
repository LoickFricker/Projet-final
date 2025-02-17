const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  prestation: { type: mongoose.Schema.Types.ObjectId, ref: 'Prestation', required: true },
  date: { type: Date, required: true },
  title: { type: String },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' }
});

// Ajout d'un index unique sur le champ date uniquement
appointmentSchema.index({ date: 1 }, { unique: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
