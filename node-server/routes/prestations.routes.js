// node-server/routes/prestations.js
const express = require('express');
const multer = require('multer');
const router = express.Router();
const prestationsController = require('../controllers/prestations.controllers.js');

const upload = multer();

router.get('/image/:id', prestationsController.getPrestationImage);
router.get('/', prestationsController.getAllPrestations);
router.post('/', upload.single('image'), prestationsController.createPrestation);
router.delete('/:id', prestationsController.deletePrestation);

module.exports = router;
