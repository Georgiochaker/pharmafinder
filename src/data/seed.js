// 
export const pharmacies = [
  { id: 1, name: "City Care Pharmacy", address: "Beirut", state: "Beirut", contact_number: "01-123456" },
  { id: 2, name: "Green Cross", address: "Tripoli", state: "Tripoli", contact_number: "06-987654" },
];


export const medications = [
  { id: 1, name: "Panadol", description: "Pain reliever", manufacturer: "Company A", price_tracking: "Yes", availability_status: "In Stock" },
  { id: 2, name: "Augmentin", description: "Antibiotic", manufacturer: "Company B", price_tracking: "No", availability_status: "Out of Stock" },
];
export const inventory = [
  { pharmacyId: 1, medicationId: 1, qty: 25, price: 2.5 },
  { pharmacyId: 2, medicationId: 1, qty: 0, price: 2.7 },
];

// 
export const medicationPrices = [
  { price_id: 1, medication_id: 1, pharmacy_id: 1, price: 2.5, effective_date: "2026-02-01" },
  { price_id: 2, medication_id: 2, pharmacy_id: 2, price: 5.0, effective_date: "2026-01-15" },
];

// 
export const medicationExpiries = [
  { expiry_id: 1, medication_id: 1, expiration_date: "2027-05-01", batch_number: "B123" },
  { expiry_id: 2, medication_id: 2, expiration_date: "2026-06-30", batch_number: "B124" },
];

// 
export const medicationInteractions = [
  { interaction_id: 1, medication_id_1: 1, medication_id_2: 2, interaction_description: "May reduce the effectiveness of Panadol." },
  { interaction_id: 2, medication_id_1: 2, medication_id_2: 1, interaction_description: "Increased risk of side effects." },
];

// 
export const stockAlerts = [
  { alert_id: 1, pharmacy_id: 1, medication_id: 1, alert_threshold: 5, alert_message: "Low stock of Panadol", alert_created_at: "2026-02-01", resolved: false },
  { alert_id: 2, pharmacy_id: 2, medication_id: 2, alert_threshold: 3, alert_message: "Out of stock of Augmentin", alert_created_at: "2026-01-15", resolved: true },
];
