const mongoose = require('mongoose');

const prestationSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    duration: Number,
    image: Buffer,
});

module.exports = mongoose.model('Prestation', prestationSchema);
