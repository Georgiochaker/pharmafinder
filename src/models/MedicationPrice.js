// src/models/MedicationPrice.js
const mongoose = require('mongoose');

const medicationPriceSchema = new mongoose.Schema({
    medication_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Medication' },
    pharmacy_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Pharmacy' },
    price: { type: Number, required: true },
    effective_date: { type: Date, required: true }
});

const MedicationPrice = mongoose.model('MedicationPrice', medicationPriceSchema);
module.exports = MedicationPrice;
