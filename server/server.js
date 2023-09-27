const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const scraper = require('./scraper');
const port = process.env.PORT || 3000;
const NodeCache = require('node-cache');

// Create a new NodeCache instance with a TTL of one day
const cache = new NodeCache({ stdTTL: 86400 });

// Enable CORS for all routes
app.use(cors());

// Parse incoming requests data
app.use(express.json());

// Define the route to fetch daily weather data
app.get('/daily-weather', async (_req, res) => {
    try {
        // Check if data is in cache
        const cachedData = cache.get('/daily-weather');
        if (cachedData) {
            console.log('Data retrieved from cache.');
            return res.json(cachedData);
        }
        const weatherData = await scraper();
        cache.set('/daily-weather', weatherData);
        res.json(weatherData);
        console.log(weatherData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching weather data' });
    }
});

// Serve existing "dist" directory for static assets.
app.use(express.static(path.join(__dirname, "../client/dist")));


// Catch any requests 
app.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
