const Appointment = require('../models/appointment.model');

// Récupérer tous les rendez-vous (admin)
exports.getAllAppointments = async (req, res) => {
    try {
        // Si besoin, adapter la population selon les champs disponibles
        const appointments = await Appointment.find().populate('user prestation');
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Récupérer les disponibilités (si utilisé)
exports.getAvailabilities = async (req, res) => {
    try {
        const allSlots = generateAvailableSlots(); // À définir selon votre logique
        const bookedAppointments = await Appointment.find().select('date');

        const availableSlots = allSlots.filter(slot =>
            !bookedAppointments.some(appointment =>
                new Date(appointment.date).getTime() === new Date(slot).getTime()
            )
        );

        res.json(availableSlots);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Prendre un rendez-vous
exports.createAppointment = async (req, res) => {
    try {
      // Extraction des champs depuis le corps de la requête
      const { userId, prestationId, date, title } = req.body;
  
      // Vérifier s'il existe déjà un rendez-vous pour ce créneau (même heure, quelle que soit la prestation)
      const existingAppointment = await Appointment.findOne({ date: date });
      if (existingAppointment) {
        return res.status(400).json({ error: 'Ce créneau horaire est déjà réservé.' });
      }
  
      // Créer un nouvel objet Appointment avec les données reçues
      const appointment = new Appointment({
        user: userId,
        prestation: prestationId,  // On conserve cette information si nécessaire
        date: date,
        title: title
      });
  
      await appointment.save();
  
      res.status(201).json({ message: 'Rendez-vous enregistré' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  

// Annuler un rendez-vous
exports.deleteAppointment = async (req, res) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        res.json({ message: 'Rendez-vous annulé' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
