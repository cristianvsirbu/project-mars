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
        await page.goto("https://mars.nasa.gov/layout/embed/image/mslweather/", { waitUntil: "domcontentloaded" });
        await page.waitForSelector('#Forecast');

        let weatherData = await page.evaluate(() => {
            const forecastRows = Array.from(document.querySelectorAll('#Forecast .item'));

            return forecastRows.map((forecastRow) => {
                const dateSol = forecastRow.querySelector('.dateSol')?.textContent.trim().replace(/^Sol\s+/i, '');
                const UTC = forecastRow?.querySelector('.dateUTC')?.textContent.trim();
                const highCelsius = forecastRow
                    .querySelector('.celsius .high')
                    ?.textContent.trim()
                    .replace('High: ', '');
                const lowCelsius = forecastRow
                    .querySelector('.celsius .low')
                    ?.textContent.trim()
                    .replace('Low: ', '');

                return { dateSol, UTC, highCelsius, lowCelsius };
            });
        });
        await browser.close();
        return weatherData;
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

module.exports = scraper;
