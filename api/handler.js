import scraper from "./scraper.js";


export default async function handler(_request, response) {
    try {
        const data = await scraper();
        response.statusCode = 200;
        response.json(data);
        console.log("HANDLER:", data);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}
