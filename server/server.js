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
app.use(express.static(path.join(__dirname, "../client/dist",)));

const indexPath = path.resolve(__dirname, "../client/dist/index.html");
app.get("/about", (_req, res) => res.sendFile(indexPath));
app.get("/about/mars", (_req, res) => res.sendFile(indexPath));
app.get("/about/moons", (_req, res) => res.sendFile(indexPath));
app.get("/about/moons/:moonId", (_req, res) => res.sendFile(indexPath));
app.get("/about/rovers", (_req, res) => res.sendFile(indexPath));
app.get("/about/rovers/:subcategory", (_req, res) => res.sendFile(indexPath));
app.get("/about/rovers/:subcategory/:roverId", (_req, res) => res.sendFile(indexPath));
app.get("/about/satellites", (_req, res) => res.sendFile(indexPath));
app.get("/about/satellites/:subcategory", (_req, res) => res.sendFile(indexPath));
app.get("/about/satellites/:subcategory/:satelliteId", (_req, res) => res.sendFile(indexPath));
app.get("/about/missions", (_req, res) => res.sendFile(indexPath));
app.get("/about/imagery", (_req, res) => res.sendFile(indexPath));
app.get("/about/weather", (_req, res) => res.sendFile(indexPath));
app.get("/about/partners", (_req, res) => res.sendFile(indexPath));

// Middleware to handle routing.
// app.get("*", (_req, res) => {
//     res.sendFile(path.join(__dirname, "../client/dist/index.html"));
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
