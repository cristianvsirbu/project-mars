import puppeteer from "puppeteer/lib/cjs/puppeteer/puppeteer.js";
import dotenv from 'dotenv';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

// Correctly determine __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
const envPath = path.resolve(__dirname, '../.env');
console.log('Loading .env from:', envPath);
dotenv.config({ path: envPath });

console.log('BROWSERLESS_API_KEY:', process.env.BROWSERLESS_API_KEY);

async function scraper() {
    let browser;
    try {
        console.log('Connecting to browserless...');
        browser = await puppeteer.connect({
            browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BROWSERLESS_API_KEY}`
        });
        console.log('Connected to browserless.');

        let page = await browser.newPage();
        page.setDefaultNavigationTimeout(2 * 60 * 1000);
        console.log('Navigating to Mars weather page...');
        await page.goto("https://mars.nasa.gov/layout/embed/image/mslweather/", { waitUntil: "domcontentloaded" });
        console.log('Page loaded.');

        console.log('Waiting for weather data...');
        await page.waitForSelector('#Forecast');

        let weatherData = await page.evaluate(() => {
            const forecastRows = Array.from(document.querySelectorAll('#Forecast .item'));

            const data = forecastRows.map((forecastRow) => {
                const dateSol = forecastRow.querySelector('.dateSol')?.textContent.trim().replace(/^Sol\s+/i, '');
                const dateUTC = forecastRow.querySelector('.dateUTC')?.textContent.trim();
                const highCelsius = forecastRow.querySelector('.celsius .high')?.textContent.trim().replace('High: ', '');
                const lowCelsius = forecastRow.querySelector('.celsius .low')?.textContent.trim().replace('Low: ', '');

                return { dateSol, dateUTC, highCelsius, lowCelsius };
            });

            return data;
        });
        console.log('Weather data retrieved:', weatherData);

        await browser.close();
        return weatherData;
    } catch (error) {
        console.error('Error in scraper function:', error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

scraper().then(data => console.log('Scraper completed with data:', data)).catch(err => console.error('Scraper failed with error:', err));

export default scraper;