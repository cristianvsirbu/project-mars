import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';
import scraper from './scraper.js';
import { Router } from 'express';


const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

const router = Router();

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
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Export as a serverless function
export const handler = serverless(app);