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
router.use(express.static(path.join(__dirname, "../client/dist")));

const indexPath = path.resolve(__dirname, "../client/dist/index.html");
router.get("/about", (_req, res) => res.sendFile(indexPath));
router.get("/about/mars", (_req, res) => res.sendFile(indexPath));
router.get("/about/moons", (_req, res) => res.sendFile(indexPath));
router.get("/about/moons/:moonId", (_req, res) => res.sendFile(indexPath));
router.get("/about/rovers", (_req, res) => res.sendFile(indexPath));
router.get("/about/rovers/:subcategory", (_req, res) => res.sendFile(indexPath));
router.get("/about/rovers/:subcategory/:roverId", (_req, res) => res.sendFile(indexPath));
router.get("/about/satellites", (_req, res) => res.sendFile(indexPath));
router.get("/about/satellites/:subcategory", (_req, res) => res.sendFile(indexPath));
router.get("/about/satellites/:subcategory/:satelliteId", (_req, res) => res.sendFile(indexPath));
router.get("/about/missions", (_req, res) => res.sendFile(indexPath));
router.get("/about/imagery", (_req, res) => res.sendFile(indexPath));
router.get("/about/weather", (_req, res) => res.sendFile(indexPath));
router.get("/about/partners", (_req, res) => res.sendFile(indexPath));

// Catch any requests that don't match the ones above
router.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
