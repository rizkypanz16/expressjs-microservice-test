const express = require('express');
const app = express();
const port = 5002;

// Simulated in-memory data
let genres = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Sci-Fi' },
];

// main url
app.get('/', (req, res) => {
  res.json({code: 200, status: "SUCCESS", data: {app_name: "genre-service", app_version: "1.0.0"}});
})

app.get('/api', (req, res) => {
  res.json({code: 200, status: "SUCCESS", data: {app_name: "genre-service", app_version: "1.0.0"}});
})

// Get the list of genres
app.get('/genres', (req, res) => {
  res.json(genres);
});

// Get a specific genre by ID
app.get('/genres/:id', (req, res) => {
  const genre = genres.find(g => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('Genre not found');
  res.json(genre);
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
  console.log(`Genre service running at http://localhost:${port}`);
});
