const puppeteer = require("puppeteer-core");


async function scraper() {
    let browser;
    try {
        const path = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
        browser = await puppeteer.launch({ executablePath: path });
        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(2 * 60 * 1000);
        await page.goto("https://mars.nasa.gov/msl/weather/", { waitUntil: "domcontentloaded" });

        await page.waitForSelector('#weather_observation tbody tr');

        const weatherData = await page.evaluate(() => {
            const forecastRows = Array.from(document.querySelectorAll('#Forecast .item'));
            const observationRows = Array.from(document.querySelectorAll('#weather_observation tbody tr'));

            const data = forecastRows.map((forecastRow, index) => {
                const dateSol = forecastRow.querySelector('.dateSol')?.textContent.trim();

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
    }
}
scraper();

module.exports = scraper;
