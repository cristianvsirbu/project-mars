const puppeteer = require('puppeteer');
const chromium = require('chrome-aws-lambda');

async function scraper() {
     let browser;
     try {
       browser = await puppeteer.launch({
            args: chromium.args,
            executablePath: await chromium.executablePath,
            headless: 'new',
            ignoreHTTPSErrors: true,
        });
        let page = await browser.newPage();
        page.setDefaultNavigationTimeout(2 * 60 * 1000);
        await page.goto("https://mars.nasa.gov/msl/weather/", { waitUntil: "domcontentloaded" });
        await page.waitForSelector('#weather_observation tbody tr');

        let weatherData = await page.evaluate(() => {
            const forecastRows = Array.from(document.querySelectorAll('#Forecast .item'));
            const observationRows = Array.from(document.querySelectorAll('#weather_observation tbody tr'));

            const data = forecastRows.map((forecastRow, index) => {
                const dateSol = forecastRow.querySelector('.dateSol')?.textContent.trim().replace(/^Sol\s+/i, '');
                const UTC = observationRows[observationRows.length - 1 - index]?.querySelector('.sol')?.textContent.trim();
                const highCelsius = observationRows[observationRows.length - 1 - index]?.querySelector('.temperature.max .celsius')?.textContent.trim();
                const lowCelsius = observationRows[observationRows.length - 1 - index]?.querySelector('.temperature.min .celsius')?.textContent.trim();
                const pressure = observationRows[observationRows.length - 1 - index]?.querySelector('.pressure.max')?.textContent.trim();
                const sunrise = observationRows[observationRows.length - 1 - index]?.querySelector('.sun.rise')?.textContent.trim();
                const sunset = observationRows[observationRows.length - 1 - index]?.querySelector('.sun.set')?.textContent.trim();

                return { dateSol, pressure, sunrise, sunset, UTC, highCelsius, lowCelsius };
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
scraper();

module.exports = scraper;
