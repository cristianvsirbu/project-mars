const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
    // Changes the cache location for Puppeteer.
    cacheDirectory: join('/opt/render/project/server/.cache/puppeteer', '.cache', 'puppeteer'),
};