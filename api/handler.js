import scraper from "./scraper.js";


export default async function handler(_request, response) {
    try {
        const data = await scraper();
        response.status(200).json(data);
        console.log(data);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}
