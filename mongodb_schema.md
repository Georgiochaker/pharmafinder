# PharmaFinder MongoDB Schema

Below are the recommended MongoDB document structures for each main entity in PharmaFinder. Use these as a reference for your backend models (e.g., Mongoose schemas).

---

## users
```
{
  _id: ObjectId,
  name: String,
  email: String,
  password_hash: String,
  role: String, // patient, pharmacy, admin
  created_at: Date
}
```

## pharmacies
```
{
  _id: ObjectId,
  name: String,
  address: String,
  phone: String,
  latitude: Number,
  longitude: Number,
  created_at: Date
}
```

## medications
```
{
  _id: ObjectId,
  name: String,
  description: String,
  manufacturer: String,
  is_prescription: Boolean,
  created_at: Date
}
```

## inventory
```
{
  _id: ObjectId,
  pharmacy_id: ObjectId, // reference to pharmacies
  medication_id: ObjectId, // reference to medications
  quantity: Number,
  last_updated: Date
}
```

## medication_alternatives
```
{
  _id: ObjectId,
  medication_id: ObjectId, // reference to medications
  alternative_id: ObjectId // reference to medications
}
```

---

### Index Recommendations
- inventory: index on `pharmacy_id` and `medication_id`
- medication_alternatives: index on `medication_id`

---

For implementation, use these structures to create Mongoose models in your Node.js backend.
