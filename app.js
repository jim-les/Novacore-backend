// app.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');
const scrapeRoutes = require('./scrapper.js');

const app = express();
app.use(cors());

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/eventRoutes'));
app.use('/api', require('./routes/userRoutes'));
// app.use('/api', require('./routes/participantRoutes
// app.use('/api', require('./routes/winnerRoutes'));
app.use('/api', scrapeRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
