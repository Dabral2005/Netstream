// lib/moviesService.js
export const searchSuggestions = async (query) => {
  const apiKey = process.env.REACT_APP_MOVIESVERSE_KEY;   // <-- from .env
  const url = `https://moviesverse1.p.rapidapi.com/search/suggestions?q=${encodeURIComponent(
    query
  )}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": "moviesverse1.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
    },
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`MoviesVerse API error: ${err}`);
  }

  const data = await response.json();
  return data;   // JSON returned by the API
};