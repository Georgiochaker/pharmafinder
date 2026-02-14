// src/models/Medication.js
const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    manufacturer: { type: String },
    price_tracking: { type: Boolean, default: false },
    availability_status: { type: Boolean, default: true },
    stock_alert: { type: mongoose.Schema.Types.ObjectId, ref: 'StockAlert' },
    price: { type: mongoose.Schema.Types.ObjectId, ref: 'MedicationPrice' }
});

const Medication = mongoose.model('Medication', medicationSchema);
module.exports = Medication;
