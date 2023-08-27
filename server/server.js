const express = require('express');
const scraper = require('./scraper.js');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());
// app.use('/weather', createProxyMiddleware({ target: 'http://localhost:3000/daily-weather', changeOrigin: true }));

app.use(express.json());

// Define the route to fetch daily weather data
app.get('/daily-weather', async (req, res) => {
    try {
        const weatherData = await scraper();
        res.json(weatherData);
        console.log(weatherData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching weather data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
