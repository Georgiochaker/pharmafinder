// src/models/StockAlert.js
const mongoose = require('mongoose');

const stockAlertSchema = new mongoose.Schema({
    medication_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Medication' },
    threshold: { type: Number, required: true },  // The stock level at which alert is triggered
    alert_message: { type: String, required: true },
    resolved: { type: Boolean, default: false }
});

const StockAlert = mongoose.model('StockAlert', stockAlertSchema);
module.exports = StockAlert;
