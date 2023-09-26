const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const scraper = require('./scraper');
const { Router } = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = Router();
const NodeCache = require('node-cache');

const ReactDOMServer = require('react-dom/server');
const StaticRouter = require('react-router-dom/StaticRouter');
const App = require('../client/src/App');

// const NodeCache = require('node-cache');
const path = require('path');


// Create a new NodeCache instance with a TTL of one day
const cache = new NodeCache({ stdTTL: 86400 });

// Enable CORS for all routes
app.use(cors({
    origin: 'https://project-mars.onrender.com',
}));

// Serve existing "public" directory for static assets.
app.use(express.static(path.join(__dirname, '../client/public')));

// Define the route to fetch daily weather data
router.get('/daily-weather', async (_req, res) => {
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

app.use(express.json(), router);

// Middleware to handle routing.
app.get("*", (req, res) => {
    let html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
    );
    res.send("<!DOCTYPE html>" + html);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Export as a serverless function
module.exports.handler = serverless(app);