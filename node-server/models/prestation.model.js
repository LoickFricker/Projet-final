const mongoose = require('mongoose');

const prestationSchema = new mongoose.Schema({
    title: {String, required: true },
    description: {String, required: true },
    price: {Number, required: true },
    duration: {Number, required: true },
    image: {Buffer, required: true }
});

module.exports = mongoose.model('Prestation', prestationSchema);
