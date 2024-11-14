require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.APP_PORT || 5001;

// Simulated in-memory data
let films = [
  { id: 1, title: 'Inception', genreId: 1, ratingId: 1 },
  { id: 2, title: 'The Dark Knight', genreId: 1, ratingId: 2 },
  { id: 3, title: 'Interstellar', genreId: 2, ratingId: 3 },
];

// main url
app.get('/', (req, res) => {
  res.json({code: 200, status: "SUCCESS", data: {app_name: "film-service", app_version: "1.0.0"}});
});

app.get('/api', (req, res) => {
  res.json({code: 200, status: "SUCCESS", data: {app_name: "film-service", app_version: "1.0.0"}});
});

// Get the list of films
app.get('/films', (req, res) => {
  res.json(films);
});

// Get a specific film by ID
app.get('/films/:id', (req, res) => {
  const film = films.find(f => f.id === parseInt(req.params.id));
  if (!film) return res.status(404).send('Film not found');
  res.json(film);
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
  console.log(`Film service running at http://localhost:${port}`);
});
