import React, { useEffect, useState, useRef } from 'react';
import './Titlecard.css';
import { Link } from 'react-router-dom';

const Titlecard = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGE1NmRhOTZlOTNjNDFhZjQ5YjFiODIxYTBjOTA2OSIsIm5iZiI6MTc1MzgwNzQ2OS45NTcsInN1YiI6IjY4ODhmYTZkZGU2YjUwY2FjMGZlMTgwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S9CRJPcNtSRn6hvMv3QDQfx9_oku2p5EkorDdo6H85A'
    }
  };


  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    // Fetch data
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => {
        if (res && res.results) {
          setApiData(res.results);
        }
      })
      .catch(err => console.error("Error fetching data:", err));

    // Add event listener
    const currentRef = cardsRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel);
    }

    // Cleanup
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, [category]);

  return (
    <div className='tilecards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          if (!card.backdrop_path) return null;

          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt={card.original_title || card.name || "Untitled"}
              />
              <p>{card.original_title || card.name || "Untitled"}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Titlecard;
