// index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/recipes', recipeRoutes);

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('MongoDB connection error:', error));

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
