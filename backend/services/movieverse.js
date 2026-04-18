// backend/services/movieverse.js
const axios = require('axios');

const client = axios.create({
  baseURL: 'https://moviesverse1.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': process.env.MOVIESVERSE_KEY,
    'x-rapidapi-host': 'moviesverse1.p.rapidapi.com',
    'Content-Type': 'application/json',
  },
});

module.exports = {
  async suggestions(q) {
    const { data } = await client.get('/search/suggestions', { params: { q } });
    return data; // array of suggestion objects
  },

  // you can add more wrappers (search, getMovie, etc.) as needed
};