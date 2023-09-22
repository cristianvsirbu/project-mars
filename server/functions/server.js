const express = require('express');
const cors = require('cors');
const scraper = require('./scraper.js');
const serverless = require('serverless-http');

const app = express();
const port = 3000;

// Enabled CORS for all routes
app.use(cors());

const router = express.Router();

// Defined the route to fetch daily weather data
router.get('/daily-weather', async (req, res) => {
    try {
        const weatherData = await scraper();
        res.json(weatherData);
        console.log(weatherData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching weather data' });
    }
});

app.use(express.json(), router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports.handler = serverless(app);