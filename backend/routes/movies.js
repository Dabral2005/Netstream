// backend/routes/movies.js
const express = require('express');
const router = express.Router();
const { suggestions } = require('../services/movieverse');

/**
 * GET /api/movies/suggestions?q=...
 */
router.get('/suggestions', async (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ error: 'Missing query param "q"' });
  }

  try {
    const results = await suggestions(q);
    res.json(results);
  } catch (err) {
    console.error('[MovieVerse] error:', err);
    res.status(502).json({ error: err.message || 'Bad Gateway' });
  }
});

module.exports = router;