import puppeteer from "puppeteer";

async function scraper() {
     let browser;
     try {
         browser = await puppeteer.connect({
             browserWSEndpoint: "wss://chrome.browserless.io?token=1a79e431-4a5b-431e-8eb6-71e7dcaaf0c9"
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
         await browser.close();
         console.log(weatherData);
        return weatherData;
    } catch (error) {
        console.error(error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

export default scraper;
