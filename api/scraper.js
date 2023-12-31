import puppeteer from "puppeteer/lib/cjs/puppeteer/puppeteer.js";

export default async function scraper(request, response) {
    let browser;
    try {
        browser = await puppeteer.connect({
            browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BROWSERLESS_API_KEY}`
        });
        let page = await browser.newPage();
        await page.goto("https://mars.nasa.gov/msl/weather/");
        await page.waitForSelector('#weather_observation tbody tr');

        let weatherData = await page.evaluate(() => {
            const forecastRows = Array.from(document.querySelectorAll('#Forecast .item'));
            const observationRows = Array.from(document.querySelectorAll('#weather_observation tbody tr'));

            const data = forecastRows.map((forecastRow, index) => {
                const observation = observationRows[observationRows.length - 1 - index]
                const dateSol = forecastRow.querySelector('.dateSol')?.textContent.trim().replace(/^Sol\s+/i, '');
                const UTC = observation?.querySelector('.sol')?.textContent.trim();
                const highCelsius = observation?.querySelector('.temperature.max .celsius')?.textContent.trim();
                const lowCelsius = observation?.querySelector('.temperature.min .celsius')?.textContent.trim();
                const pressure = observation?.querySelector('.pressure.max')?.textContent.trim();
                const sunrise = observation?.querySelector('.sun.rise')?.textContent.trim();
                const sunset = observation?.querySelector('.sun.set')?.textContent.trim();

                return { dateSol, pressure, sunrise, sunset, UTC, highCelsius, lowCelsius };
            });

            return data;
        });
        if (browser) {
            await browser.close();
        }
        return response.status(200).json(weatherData);
        
    } catch (error) {
        console.error(error);
    }
}

