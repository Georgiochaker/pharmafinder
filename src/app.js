const express = require('express');
const connectDB = require('./config/db');  // MongoDB connection
const medicationRoutes = require('./api/medications');  // Medication routes
const pharmacyRoutes = require('./api/pharmacies');  // Pharmacy routes

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());  // Middleware to parse incoming JSON requests

// Use API routes
app.use('/api/medications', medicationRoutes);  // Medication endpoints
app.use('/api/pharmacies', pharmacyRoutes);  // Pharmacy endpoints

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
