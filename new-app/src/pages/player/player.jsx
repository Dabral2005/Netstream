import React, { useEffect, useState } from 'react';
import './player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams, Link } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "a8a56da96e93c41af49b1b821a0c9069";
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGE1NmRhOTZlOTNjNDFhZjQ5YjFiODIxYTBjOTA2OSIsIm5iZiI6MTc1MzgwNzQ2OS45NTcsInN1YiI6IjY4ODhmYTZkZGU2YjUwY2FjMGZlMTgwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S9CRJPcNtSRn6hvMv3QDQfx9_oku2p5EkorDdo6H85A',
    },
  };

  useEffect(() => {
    setLoading(true);
    
    // Fetch trailer
    const fetchTrailer = fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json());

    // Fetch movie details
    const fetchDetails = fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`, options)
      .then(res => res.json());

    // Fetch similar movies
    const fetchSimilar = fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`, options)
      .then(res => res.json());

    // Fetch cast
    const fetchCast = fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`, options)
      .then(res => res.json());

    Promise.all([fetchTrailer, fetchDetails, fetchSimilar, fetchCast])
      .then(([trailerData, detailsData, similarData, castData]) => {
        if (trailerData.results && trailerData.results.length > 0) {
          const trailer = trailerData.results.find(
            (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
          );
          setApiData(trailer || trailerData.results[0]);
        }
        setMovieDetails(detailsData);
        setSimilar(similarData.results?.slice(0, 12) || []);
        setCast(castData.cast?.slice(0, 8) || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const formatRuntime = (mins) => {
    if (!mins) return '';
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h}h ${m}m`;
  };

  if (loading) {
    return (
      <div className="player-page">
        <div className="player-loading">
          <div className="player-spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="player-page page-enter">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <img src={back_arrow_icon} alt="Back" />
      </button>

      {/* Video Player */}
      <div className="player-container">
        {apiData ? (
          <iframe
            src={`https://www.youtube.com/embed/${apiData.key}?autoplay=1&rel=0`}
            title={apiData.name || 'Trailer'}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="no-trailer">
            <p>No trailer available for this title.</p>
            <button onClick={() => navigate(-1)} className="go-back-btn">Go Back</button>
          </div>
        )}
      </div>

      {/* Movie Details Section */}
      {movieDetails && (
        <div className="movie-details">
          <div className="details-main">
            <div className="details-left">
              <div className="details-meta">
                <span className="match-score">{Math.min(99, Math.max(65, Math.round((movieDetails.vote_average || 7) * 10)))}% Match</span>
                <span className="detail-year">{movieDetails.release_date?.slice(0, 4)}</span>
                <span className="detail-rating">{movieDetails.adult ? '18+' : 'U/A 13+'}</span>
                <span className="detail-runtime">{formatRuntime(movieDetails.runtime)}</span>
                <span className="detail-quality">HD</span>
              </div>
              <p className="detail-overview">{movieDetails.overview}</p>
            </div>
            <div className="details-right">
              {cast.length > 0 && (
                <p><span className="detail-label">Cast:</span> {cast.map(c => c.name).join(', ')}</p>
              )}
              {movieDetails.genres && (
                <p><span className="detail-label">Genres:</span> {movieDetails.genres.map(g => g.name).join(', ')}</p>
              )}
              {movieDetails.tagline && (
                <p><span className="detail-label">Tagline:</span> {movieDetails.tagline}</p>
              )}
            </div>
          </div>

          {/* More Like This */}
          {similar.length > 0 && (
            <div className="more-like-this">
              <h3>More Like This</h3>
              <div className="similar-grid">
                {similar.map((movie) => {
                  if (!movie.backdrop_path) return null;
                  return (
                    <Link to={`/player/${movie.id}`} className="similar-card" key={movie.id}>
                      <div className="similar-img-wrapper">
                        <img
                          src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
                          alt={movie.title}
                          loading="lazy"
                        />
                        <div className="similar-duration">{movie.release_date?.slice(0, 4)}</div>
                      </div>
                      <div className="similar-info">
                        <div className="similar-meta">
                          <span className="match-score-sm">{Math.min(99, Math.max(60, Math.round((movie.vote_average || 6) * 10)))}%</span>
                          <span className="similar-rating">{movie.adult ? '18+' : 'U/A 13+'}</span>
                        </div>
                        <p className="similar-desc">
                          {movie.overview ? movie.overview.slice(0, 120) + (movie.overview.length > 120 ? '...' : '') : 'No description available.'}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Player;
