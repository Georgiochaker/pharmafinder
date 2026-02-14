// src/models/Pharmacy.js
const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true },
    contact_number: { type: String, required: true },
    medications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Medication' }]  // Reference to medications
});

const Pharmacy = mongoose.model('Pharmacy', pharmacySchema);
module.exports = Pharmacy;
