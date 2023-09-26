const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const scraper = require('./scraper');
const { Router } = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = Router();

// Enable CORS for all routes
app.use(cors());

// Serve existing "public" directory for static assets.
app.use(express.static(path.join(__dirname, 'public')));

// Define the route to fetch daily weather data
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

app.get('*', (req, res) => {
    // Serve index.html for any other requests.
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.json(), router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// Export as a serverless function
module.exports.handler = serverless(app);