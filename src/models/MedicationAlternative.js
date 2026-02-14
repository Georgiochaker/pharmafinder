// src/models/MedicationAlternative.js
const mongoose = require("mongoose");

const medicationAlternativeSchema = new mongoose.Schema(
  {
    medication_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medication",
      required: true,
    },
    alternative_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medication",
      required: true,
    },
    reason: {
      type: String,
      enum: ["same_generic", "same_class", "manual", "other"],
      default: "manual",
    },
    score: {
      type: Number,
      default: 100,
    },
  },
  { timestamps: true }
);

medicationAlternativeSchema.index(
  { medication_id: 1, alternative_id: 1 },
  { unique: true }
);

const MedicationAlternative =
  mongoose.models.MedicationAlternative ||
  mongoose.model("MedicationAlternative", medicationAlternativeSchema);

module.exports = MedicationAlternative;
