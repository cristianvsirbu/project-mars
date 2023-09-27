const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const scraper = require('./scraper');
const { Router } = require('express');
const port = process.env.PORT || 3000;
const router = Router();
const NodeCache = require('node-cache');

// Create a new NodeCache instance with a TTL of one day
const cache = new NodeCache({ stdTTL: 86400 });

// Enable CORS for all routes
app.use(cors());

app.use(express.json(), router);


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
app.use(express.static(path.join(__dirname, '../client/dist')));

// Middleware to handle routing.
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
