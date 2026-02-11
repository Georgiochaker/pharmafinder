import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import {
	User,
	Pharmacy,
	Medication,
	Inventory,
	MedicationAlternative,
} from "../../../models";
import connectDB from "../../../db";

export async function POST(request) {
	try {
		await connectDB();

		// Clear existing data
		await User.deleteMany({});
		await Pharmacy.deleteMany({});
		await Medication.deleteMany({});
		await Inventory.deleteMany({});
		await MedicationAlternative.deleteMany({});

		// Create sample users
		const hashedPassword = await bcrypt.hash("password123", 10);
		const users = await User.insertMany([
			{
				name: "Admin User",
				email: "admin@pharmafinder.com",
				password_hash: hashedPassword,
				role: "admin",
			},
			{
				name: "John Pharmacy",
				email: "pharmacy@example.com",
				password_hash: hashedPassword,
				role: "pharmacy",
			},
			{
				name: "Jane Patient",
				email: "patient@example.com",
				password_hash: hashedPassword,
				role: "patient",
			},
		]);

		// Create sample pharmacies
		const pharmacies = await Pharmacy.insertMany([
			{
				name: "City Care Pharmacy",
				address: "123 Main St, Beirut",
				phone: "01-123456",
				latitude: 33.8938,
				longitude: 35.5018,
			},
			{
				name: "Green Cross Pharmacy",
				address: "456 North Ave, Tripoli",
				phone: "06-987654",
				latitude: 34.4367,
				longitude: 35.8498,
			},
			{
				name: "Health Plus Pharmacy",
				address: "789 East Rd, Sidon",
				phone: "07-456789",
				latitude: 33.5579,
				longitude: 35.3714,
			},
		]);

		// Create sample medications
		const medications = await Medication.insertMany([
			{
				name: "Panadol",
				description: "Pain reliever and fever reducer",
				manufacturer: "GSK",
				is_prescription: false,
			},
			{
				name: "Augmentin",
				description: "Antibiotic for bacterial infections",
				manufacturer: "Pfizer",
				is_prescription: true,
			},
			{
				name: "Paracetamol",
				description: "Generic pain reliever",
				manufacturer: "Various",
				is_prescription: false,
			},
			{
				name: "Amoxicillin",
				description: "Antibiotic",
				manufacturer: "Various",
				is_prescription: true,
			},
			{
				name: "Ibuprofen",
				description: "Anti-inflammatory pain reliever",
				manufacturer: "Various",
				is_prescription: false,
			},
		]);

		// Create inventory
		await Inventory.insertMany([
			{
				pharmacy_id: pharmacies[0]._id,
				medication_id: medications[0]._id,
				quantity: 50,
			},
			{
				pharmacy_id: pharmacies[0]._id,
				medication_id: medications[1]._id,
				quantity: 30,
			},
			{
				pharmacy_id: pharmacies[0]._id,
				medication_id: medications[2]._id,
				quantity: 25,
			},
			{
				pharmacy_id: pharmacies[1]._id,
				medication_id: medications[0]._id,
				quantity: 0,
			},
			{
				pharmacy_id: pharmacies[1]._id,
				medication_id: medications[2]._id,
				quantity: 40,
			},
			{
				pharmacy_id: pharmacies[1]._id,
				medication_id: medications[3]._id,
				quantity: 20,
			},
			{
				pharmacy_id: pharmacies[2]._id,
				medication_id: medications[0]._id,
				quantity: 15,
			},
			{
				pharmacy_id: pharmacies[2]._id,
				medication_id: medications[4]._id,
				quantity: 35,
			},
		]);

		// Create medication alternatives
		await MedicationAlternative.insertMany([
			{
				medication_id: medications[0]._id, // Panadol
				alternative_id: medications[2]._id, // Paracetamol
			},
			{
				medication_id: medications[2]._id, // Paracetamol
				alternative_id: medications[0]._id, // Panadol
			},
			{
				medication_id: medications[1]._id, // Augmentin
				alternative_id: medications[3]._id, // Amoxicillin
			},
			{
				medication_id: medications[3]._id, // Amoxicillin
				alternative_id: medications[1]._id, // Augmentin
			},
		]);

		return NextResponse.json(
			{
				message: "Database seeded successfully",
				counts: {
					users: users.length,
					pharmacies: pharmacies.length,
					medications: medications.length,
				},
			},
			{ status: 200 },
		);
	} catch (err) {
		console.error("Seed error:", err);
		return NextResponse.json(
			{ error: "Seeding failed", details: err.message },
			{ status: 500 },
		);
	}
}
