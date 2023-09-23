import puppeteer from "puppeteer";
import chromium from "chrome-aws-lambda";


async function scraper() {
    let browser;
    try {
        const executablePath = await chromium.executablePath;
        browser = await puppeteer.launch({
            args: chromium.args,
            executablePath: executablePath,
            headless: "new",
        });

        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(2 * 60 * 1000);
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36');
        await page.goto("https://mars.nasa.gov/msl/weather/", { waitUntil: "domcontentloaded" });
        await page.waitForSelector('#weather_observation tbody tr');

        const weatherData = await page.evaluate(() => {
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

                console.log("forecastRows length:", forecastRows.length);
                console.log("observationRows length:", observationRows.length);

                return { dateSol, pressure, sunrise, sunset, UTC, highCelsius, lowCelsius };
            });
            console.log("data:", data);
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

export default scraper;
