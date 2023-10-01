import scraper from "./scraper.js";


export default async function handler(_request, response) {
        const data = await scraper();
        response.status(200).json(data);
        console.log(data);
}
