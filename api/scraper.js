import puppeteer from "puppeteer/lib/cjs/puppeteer/puppeteer.js";
import dotenv from 'dotenv';
import path from 'path';
import process from 'process';

const __filename = import.meta.url.substring(import.meta.url.lastIndexOf('/') + 1);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });
async function scraper() {
    let browser;
    try {
        browser = await puppeteer.connect({
            browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BROWSERLESS_API_KEY}`
        });
        let page = await browser.newPage();
        page.setDefaultNavigationTimeout(2 * 60 * 1000);
        await page.goto("https://mars.nasa.gov/layout/embed/image/mslweather/", { waitUntil: "domcontentloaded" });
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
        await browser.close();
        return weatherData;
    } catch (error) {
        console.error(error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

scraper().then(data => console.log(data)).catch(err => console.error(err));

export default scraper;