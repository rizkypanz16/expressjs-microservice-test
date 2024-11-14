const express = require('express');
const app = express();
const port = 5003;

// Simulated in-memory data
let ratings = [
  { id: 1, score: 9 },
  { id: 2, score: 8 },
  { id: 3, score: 10 },
];

// main url
app.get('/', (req, res) => {
  res.json({code: 200, status: "SUCCESS", data: {app_name: "rating-service", app_version: "1.0.0"}});
});

app.get('/api', (req, res) => {
  res.json({code: 200, status: "SUCCESS", data: {app_name: "rating-service", app_version: "1.0.0"}});
});

// Get the list of ratings
app.get('/ratings', (req, res) => {
  res.json(ratings);
});

// Get a specific rating by ID
app.get('/ratings/:id', (req, res) => {
  const rating = ratings.find(r => r.id === parseInt(req.params.id));
  if (!rating) return res.status(404).send('Rating not found');
  res.json(rating);
});

// Handle undefined routes (catch-all)
app.all('*', (req, res) => {
  res.status(400).json({
    status: "error",
    error: {
      code: 400,
      message: "Bad Request - The requested resource could not be found.",
      details: `The path '${req.originalUrl}' is not defined in this API.`
    },
    meta: {
      timestamp: new Date().toISOString()
    }
  });
});

app.listen(port, () => {
  console.log(`Rating service running at http://localhost:${port}`);
});
