// PharmaFinder Mongoose Models
// Use these models in your Node.js backend to interact with MongoDB

// User Model
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password_hash: { type: String, required: true },
	role: { type: String, required: true }, // patient, pharmacy, admin
	created_at: { type: Date, default: Date.now },
});

export const User =
	mongoose.models.User || mongoose.model("User", userSchema);

// Pharmacy Model
const pharmacySchema = new mongoose.Schema({
	name: { type: String, required: true },
	address: { type: String, required: true },
	phone: String,
	latitude: Number,
	longitude: Number,
	created_at: { type: Date, default: Date.now },
});

export const Pharmacy =
	mongoose.models.Pharmacy || mongoose.model("Pharmacy", pharmacySchema);

// Medication Model
const medicationSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: String,
	manufacturer: String,
	is_prescription: { type: Boolean, default: false },
	created_at: { type: Date, default: Date.now },
});

export const Medication =
	mongoose.models.Medication || mongoose.model("Medication", medicationSchema);

// Inventory Model
const inventorySchema = new mongoose.Schema({
	pharmacy_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Pharmacy",
		required: true,
	},
	medication_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Medication",
		required: true,
	},
	quantity: { type: Number, default: 0 },
	last_updated: { type: Date, default: Date.now },
});
inventorySchema.index({ pharmacy_id: 1, medication_id: 1 }, { unique: true });

export const Inventory =
	mongoose.models.Inventory || mongoose.model("Inventory", inventorySchema);

// Medication Alternatives Model
const medicationAlternativeSchema = new mongoose.Schema({
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
});
medicationAlternativeSchema.index(
	{ medication_id: 1, alternative_id: 1 },
	{ unique: true },
);

export const MedicationAlternative =
	mongoose.models.MedicationAlternative ||
	mongoose.model("MedicationAlternative", medicationAlternativeSchema);
