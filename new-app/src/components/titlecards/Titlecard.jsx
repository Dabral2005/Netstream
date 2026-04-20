import React, { useEffect, useState, useRef } from 'react';
import './Titlecard.css';
import { Link } from 'react-router-dom';

// Genre mapping for displaying genre pills
const GENRE_MAP = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime",
  99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History",
  27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Sci-Fi",
  10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"
};

// Generate fake match percentage
const getMatchScore = (voteAvg) => {
  return Math.min(99, Math.max(65, Math.round(voteAvg * 10)));
};

const Titlecard = ({ title, category, type = "movie", isTopTen = false }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedCards, setLikedCards] = useState({});
  const [myListCards, setMyListCards] = useState({});
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGE1NmRhOTZlOTNjNDFhZjQ5YjFiODIxYTBjOTA2OSIsIm5iZiI6MTc1MzgwNzQ2OS45NTcsInN1YiI6IjY4ODhmYTZkZGU2YjUwY2FjMGZlMTgwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S9CRJPcNtSRn6hvMv3QDQfx9_oku2p5EkorDdo6H85A'
    }
  };

  useEffect(() => {
    setLoading(true);
    const endpointCategory = category || (type === 'tv' ? 'on_the_air' : 'now_playing');
    fetch(`https://api.themoviedb.org/3/${type}/${endpointCategory}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => {
        if (res && res.results) {
          setApiData(res.results);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [category, type]);

  const [modalData, setModalData] = useState(null);

  // Close modal on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setModalData(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const openModal = (e, card) => {
    e.preventDefault();
    setModalData(card);
  };

  const closeModal = () => {
    setModalData(null);
  };

  // ... (keeping other helper functions same)
  const scrollLeft = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollBy({ left: -800, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollBy({ left: 800, behavior: 'smooth' });
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const currentRef = cardsRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  // Render skeleton cards while loading
  if (loading) {
    return (
      <div className='titlecards'>
        <div className="titlecards-header">
          <h2>{title || "Popular on Netstream"}</h2>
        </div>
        <div className="card-list">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`skeleton ${isTopTen ? 'skeleton-card-tall' : 'skeleton-card'}`} />
          ))}
        </div>
      </div>
    );
  }

  // Define Modal UI
  const renderModal = () => {
    if (!modalData) return null;
    const matchScore = getMatchScore(modalData.vote_average || 7);
    const releaseStr = modalData.release_date || modalData.first_air_date || '';
    const year = releaseStr ? releaseStr.slice(0, 4) : '';
    const genres = (modalData.genre_ids || []).slice(0, 3).map(id => GENRE_MAP[id]).filter(Boolean);

    return (
      <div className="info-modal-overlay" onClick={closeModal}>
        <div className="info-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="info-modal-close" onClick={closeModal}>✕</button>
          
          <div className="info-modal-hero">
            <img 
              src={`https://image.tmdb.org/t/p/original${modalData.backdrop_path || modalData.poster_path}`} 
              alt={modalData.title || modalData.name} 
              className="info-modal-backdrop"
            />
            <div className="info-modal-gradient"></div>
            <div className="info-modal-hero-content">
              <h1 className="info-modal-title">{modalData.title || modalData.name}</h1>
              <div className="info-modal-buttons">
                <Link to={`/player/${modalData.id}`} className="modal-btn play-btn">
                  ▶ Play
                </Link>
                <button className="modal-btn action-btn" onClick={() => setMyListCards(p => ({...p, [modalData.id]: !p[modalData.id]}))}>
                  {myListCards[modalData.id] ? '✓' : '＋'}
                </button>
                <button className="modal-btn action-btn" onClick={() => setLikedCards(p => ({...p, [modalData.id]: !p[modalData.id]}))}>
                  {likedCards[modalData.id] ? '❤️' : '👍'}
                </button>
              </div>
            </div>
          </div>

          <div className="info-modal-body">
            <div className="info-modal-left">
              <div className="info-modal-meta">
                <span className="info-match-score">{matchScore}% Match</span>
                <span className="info-year">{year}</span>
                <span className="info-rating">{modalData.adult ? '18+' : 'U/A 13+'}</span>
                <span className="info-hd">HD</span>
              </div>
              <p className="info-modal-overview">{modalData.overview || "No description available."}</p>
            </div>
            
            <div className="info-modal-right">
              <div className="info-modal-tags">
                <span className="tag-label">Genres:</span> {genres.join(', ') || 'N/A'}
              </div>
              {modalData.original_language && (
                <div className="info-modal-tags">
                  <span className="tag-label">Language:</span> {modalData.original_language.toUpperCase()}
                </div>
              )}
              {modalData.popularity && (
                <div className="info-modal-tags">
                  <span className="tag-label">Popularity:</span> {Math.round(modalData.popularity)} K
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Top 10 Layout
  if (isTopTen) {
    return (
      <div className='titlecards'>
        {renderModal()}
        <div className="titlecards-header">
          <h2>{title || "Top 10 Today"}</h2>
        </div>
        <div className="card-list-wrapper">
          <button className="scroll-arrow left" onClick={scrollLeft}>
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <div className="card-list" ref={cardsRef}>
            {apiData.slice(0, 10).map((card, index) => {
              if (!card.poster_path) return null;
              return (
                 <div className="top-ten-card" key={card.id} onClick={(e) => openModal(e, card)}>
                  <span className="top-ten-number">{index + 1}</span>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${card.poster_path}`}
                    alt={card.title || "Untitled"}
                    className="top-ten-poster"
                  />
                </div>
              );
            })}
          </div>
          <button className="scroll-arrow right" onClick={scrollRight}>
            <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </div>
    );
  }

  // Regular Layout with hover cards
  return (
    <div className='titlecards'>
      {renderModal()}
      <div className="titlecards-header">
        <h2>{title || "Popular on Netstream"}</h2>
        <span className="explore-arrow">Explore All ›</span>
      </div>
      <div className="card-list-wrapper">
        <button className="scroll-arrow left" onClick={scrollLeft}>
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <div className="card-list" ref={cardsRef}>
          {apiData.map((card) => {
            if (!card.backdrop_path) return null;

            const genres = (card.genre_ids || []).slice(0, 3).map(id => GENRE_MAP[id]).filter(Boolean);
            const matchScore = getMatchScore(card.vote_average || 7);
            const releaseStr = card.release_date || card.first_air_date || '';
            const year = releaseStr ? releaseStr.slice(0, 4) : '';

            return (
              <div className="card" key={card.id}>
                <Link to={`/player/${card.id}`}>
                  <div className="card-image-wrapper">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                      alt={card.title || card.name || "Untitled"}
                      loading="lazy"
                    />
                    <div className="card-title-overlay">
                      {card.title || card.name || "Untitled"}
                    </div>
                  </div>
                </Link>

                {/* Hover Info Card */}
                <div className="card-hover-info">
                  <div className="hover-actions">
                    <Link to={`/player/${card.id}`} className="hover-action-btn play-btn" title="Play">▶</Link>
                    <button 
                      className="hover-action-btn" 
                      title="Add to My List"
                      onClick={(e) => {
                        e.preventDefault();
                        setMyListCards(prev => ({ ...prev, [card.id]: !prev[card.id] }));
                      }}
                    >
                      {myListCards[card.id] ? '✓' : '＋'}
                    </button>
                    <button 
                      className="hover-action-btn" 
                      title="Like"
                      onClick={(e) => {
                        e.preventDefault();
                        setLikedCards(prev => ({ ...prev, [card.id]: !prev[card.id] }));
                      }}
                    >
                      {likedCards[card.id] ? '❤️' : '👍'}
                    </button>
                    <button 
                      className="hover-action-btn expand-btn" 
                      title="More Info"
                      onClick={(e) => openModal(e, card)}
                    >
                      ˅
                    </button>
                  </div>
                  <div className="hover-meta">
                    <span className="match-score">{matchScore}% Match</span>
                    <span className="hover-rating">{card.adult ? '18+' : 'U/A 13+'}</span>
                    <span className="hover-duration">{year}</span>
                  </div>
                  <div className="hover-genres">
                    {genres.map((genre, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <span className="genre-dot"></span>}
                        <span>{genre}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="scroll-arrow right" onClick={scrollRight}>
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </div>
  );
};

export default Titlecard;
