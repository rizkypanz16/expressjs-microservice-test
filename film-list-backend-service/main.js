require('dotenv').config();
const cors = require('cors');
const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.APP_PORT || 5000;

// URLs of the other microservices
const filmServiceUrl = process.env.APP_FILM_SERVICE_URL || 'http://localhost:5001/films';
const genreServiceUrl = process.env.APP_GENRE_SERVICE_URL || 'http://localhost:5002/genres';
const ratingServiceUrl = process.env.APP_RATING_SERVICE_URL || 'http://localhost:5003/ratings';

// Enable CORS for all origins
app.use(cors());

// main url
app.get('/', (req, res) => {
  res.json({code: 200, status: "SUCCESS", data: {app_name: "film-microservices", app_version: "1.0.0"}});
});

app.get('/api', (req, res) => {
  res.json({code: 200, status: "SUCCESS", data: {app_name: "film-microservices", app_version: "1.0.0"}});
});


// Get the full list of films with their genres and ratings
app.get('/film-list', async (req, res) => {
  try {
    // Fetch the films from the film service
    const filmsResponse = await axios.get(filmServiceUrl);
    const films = filmsResponse.data;

    // Fetch the genres from the genre service
    const genresResponse = await axios.get(genreServiceUrl);
    const genres = genresResponse.data;

    // Fetch the ratings from the rating service
    const ratingsResponse = await axios.get(ratingServiceUrl);
    const ratings = ratingsResponse.data;

    // Add genre and rating info to each film
    const filmList = films.map(film => {
      const genre = genres.find(g => g.id === film.genreId);
      const rating = ratings.find(r => r.id === film.ratingId);
      return {
        ...film,
        genre: genre ? genre.name : 'Unknown',
        rating: rating ? rating.score : 'No rating',
      };
    });

    res.json(filmList);
  } catch (error) {
    console.error('Error fetching data from microservices:', error);
    res.status(500).json({
      code: 500,
      status: "error",
      error: {
        code: 500,
        message: "An unexpected error occurred while fetching data",
        details: error.message || error
      },
      meta: {
        timestamp: new Date().toISOString()
      }
    });
  }
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
  console.log(`Film List service running at http://localhost:${port}`);
});
