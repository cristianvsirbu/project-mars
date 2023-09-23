import express from 'express';
import cors from 'cors';
import scraper from './scraper.js';
import serverless from 'serverless-http';

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

const router = express.Router();

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

app.use(express.json(), router);

// Export as a serverless function
export const handler = serverless(app);

// Start the server locally if not in production
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
