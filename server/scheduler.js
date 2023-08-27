const cron = require('node-cron');


const cronExpression = '0 0 * * *'; // Run daily at midnight
const updateUrl = `http://localhost:3000/daily-weather`; 

cron.schedule(cronExpression, async () => {
    try {
        const response = await fetch(updateUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
});
