// backend/routes/movies.js
const express = require('express');
const axios = require('axios');

const router = express.Router();

/**
 * GET /api/movies/suggestions?q=<query>
 * Forwards the request to the RapidAPI MovieVerse endpoint.
 * The RapidAPI key is taken from an environment variable
 *   MOVIESVERSE_KEY
 */
router.get('/suggestions', async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Missing query param "q"' });

  try {
    const response = await axios.get(
      'https://moviesverse1.p.rapidapi.com/search/suggestions',
      {
        params: { q },
        headers: {
          'x-rapidapi-key': process.env.MOVIESVERSE_KEY,
          'x-rapidapi-host': 'moviesverse1.p.rapidapi.com',
          'Content-Type': 'application/json',
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error('[movies] error:', err.message);
    res.status(502).json({ error: err.response?.data?.message || 'Bad Gateway' });
  }
});

module.exports = router;