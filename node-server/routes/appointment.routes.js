const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointment.controllers');

// Routes pour les rendez-vous
router.get('/', appointmentController.getAllAppointments);
router.get('/availabilities', appointmentController.getAvailabilities);
router.post('/', appointmentController.createAppointment);
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;
