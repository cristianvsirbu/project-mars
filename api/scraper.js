import puppeteer from 'puppeteer/lib/cjs/puppeteer/puppeteer.js';
import dotenv from 'dotenv';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

async function getWeatherData() {
  let browser;
  try {
    browser = await puppeteer.connect({
      browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BROWSERLESS_API_KEY}`,
    });
    let page = await browser.newPage();
    page.setDefaultNavigationTimeout(2 * 60 * 1000);
    await page.goto('https://mars.nasa.gov/layout/embed/image/mslweather/', {
      waitUntil: 'domcontentloaded',
    });
    await page.waitForSelector('#Forecast');
    let weatherData = await page.evaluate(() => {
      const forecastRows = Array.from(document.querySelectorAll('#Forecast .item'));
      return forecastRows.map((forecastRow) => {
        const dateSol = forecastRow
          .querySelector('.dateSol')
          ?.textContent.trim()
          .replace(/^Sol\s+/i, '');
        const dateUTC = forecastRow.querySelector('.dateUTC')?.textContent.trim();
        const highCelsius = forecastRow
          .querySelector('.celsius .high')
          ?.textContent.trim()
          .replace('High: ', '');
        const lowCelsius = forecastRow
          .querySelector('.celsius .low')
          ?.textContent.trim()
          .replace('Low: ', '');
        return { dateSol, dateUTC, highCelsius, lowCelsius };
      });
    });
    await browser.close();
    return weatherData;
  } catch (error) {
    if (browser) await browser.close();
    throw error;
  }
}

export default async function handler(req, res) {
  try {
    const data = await getWeatherData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}