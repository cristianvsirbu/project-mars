export default async function handler(req, res) {
  const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : [];
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { endpoint } = req.query;

    if (!endpoint) {
      return res.status(400).json({ error: 'Missing endpoint parameter' });
    }

    const API_KEY = process.env.NASA_API_KEY;

    if (!API_KEY) {
      return res.status(500).json({ error: 'NASA API key not configured on server' });
    }

    const url = new URL(`https://api.nasa.gov${endpoint}`);

    Object.entries(req.query).forEach(([key, value]) => {
      if (key !== 'endpoint') {
        url.searchParams.append(key, value);
      }
    });

    url.searchParams.append('api_key', API_KEY);

    const response = await fetch(url.toString());

    if (!response.ok) {
      return res.status(response.status).json({
        error: `NASA API error: ${response.status} ${response.statusText}`
      });
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    console.error('NASA proxy error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}