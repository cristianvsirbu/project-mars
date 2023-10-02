
<img 
src="./readme_assets/home_pc.webp" 
alt="Project Mars"
width="80%"
align="left">
<img 
src="./readme_assets/home_mobile.webp" 
alt="Project Mars"
width="20%"
align="right">

<h1 align="center">Project Mars</h1>
<p align="center">Project Mars is a frontend web application that provides a captivating journey through the Martian landscape. As a frontend developer, I've used various technologies and techniques to create an engaging and informative experience for users interested in the Red Planet.</p>

<h2>Project Structure</h2>
The project is structured to ensure clarity and maintainability. <b>It contains two branches for data scraping:</b>

- **`server`:**
 Features a traditional client-server architecture where the server serves the scraped data to the frontend.

- **`serverless`:**
Utilizes a serverless function on Vercel, making data retrieval more efficient.

<h2>Technologies Used</h2>

<h3>Frontend</h3>

- **React:** The frontend of Project Mars is built with React, providing a dynamic and responsive user interface.
- **React Router:** For client-side routing, enabling seamless navigation within the application.
- **Recharts:** Utilized for creating interactive charts and visualizations.
- **Three.js:** To incorporate 3D models and enhance the user experience.
- **Vite:** As a fast build tool for the frontend development stack.

<h3>Data Scraping</h3>

- **Puppeteer:** Used to scrape data from NASA's site and generate API endpoints for the frontend.
- **Node.js**: Used for backend operations in the classic client-server scheme.
- **Serverless Function (Vercel):** The serverless architecture on Vercel efficiently serves scraped data to the frontend.

<h3>Design and Styling</h3>

- **Tailwind CSS:** Employed for styling, ensuring a modern and visually appealing design.
- **Figma/Adobe Illustrator:** Custom-created and edited assets and illustrations to enhance the project's aesthetics.
- **Draco3D:** Used for compressing 3D models to improve loading times.

<h3>Optimization</h3>

- **Asset Compression:** All assets, including 3D models, are compressed for optimal network efficiency.
- **Text Compression (gzip):** Text-based content is compressed to reduce load times and improve performance.
- **React Context:** Used for managing and sharing state data across component tree without having to pass props manually at every level of nesting (prop drilling).
- **`node-cache`:**  Used for caching data for 24 hours in the  **`server`** to minimize redundant data fetching.
- **`localStorage`:** Utilized to store weather data for 24 hours in the **`serverless`** function to enhance network efficiency.


<h3>Performance Metrics</h3>
The project's performance has been optimized using data from <b><i>Lighthouse</i></b> and <b><i>WebVitals</i></b>, obtaining excellent results.
