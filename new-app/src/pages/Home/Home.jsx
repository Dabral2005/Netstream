import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import Titlecard from "../../components/titlecards/Titlecard";
import Footer from "../../components/footer/Footer";

import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import profile_img from "../../assets/profile_img.png"; // fallback image
import caret_icon from "../../assets/caret_icon.svg";
import { useNavigate } from "react-router-dom";

// ================= Navbar ===================
const Navbar = ({ onSearch }) => {
  const navRef = useRef();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  //  State for user info
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Load user info from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("netflix_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(searchQuery);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li><span onClick={() => handleScrollTo("top")}>Home</span></li>
          <li><span onClick={() => handleScrollTo("movies")}>Movies</span></li>
          <li><span onClick={() => handleScrollTo("new-popular")}>New & Popular</span></li>
          <li><span onClick={() => handleScrollTo("upcoming")}>Upcoming's</span></li>
          <li><span onClick={() => handleScrollTo("top-picks")}>Top Picks</span></li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="search-input"
          />
          <img
            src={search_icon}
            alt="search"
            className="icons search-icon"
            onClick={() => onSearch(searchQuery)}
          />
        </div>

        {/* ✅ Show user profile dynamically */}
        <div className="navbar-profile">
          <img
            src={user?.picture || profile_img}
            alt="profile"
            className="profile"
          />
          <span style={{ color: "white", marginLeft: "8px" }}>
            {user?.name || ""}
          </span>
          <img src={caret_icon} alt="caret" />
          <div className="dropdown">
            {user ? (
              <p onClick={handleLogout}>Sign out</p>
            ) : (
              <p onClick={() => navigate("/login")}>Sign in</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ================= Home ===================
const Home = () => {
  const navigate = useNavigate();
  const [heroMovie, setHeroMovie] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [showDescription, setShowDescription] = useState(false);

  const API_KEY = "a8a56da96e93c41af49b1b821a0c9069";

  // Fetch hero movie
  useEffect(() => {
    const fetchHeroMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/12444?api_key=${API_KEY}&append_to_response=videos&language=en-US`
        );
        const data = await res.json();
        setHeroMovie(data);
      } catch (err) {
        console.error("Error fetching hero movie:", err);
      }
    };

    fetchHeroMovie();
  }, []);

  // Search API call
  const handleSearch = async (query) => {
    if (!query) return;
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          query
        )}&api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      setSearchResults(data.results || []);
    } catch (err) {
      console.error("Error fetching search results:", err);
    }
  };

  return (
    <div className="home">
      <div id="top">
        <Navbar onSearch={handleSearch} />

        {/* Hero Section */}
        {heroMovie ? (
          <div className="hero">
            <img src={hero_banner} alt="" className="banner-image" />
            <div className="hero-caption">
              <img src={hero_title} alt="" className="caption-img" />

              {showDescription && <p>{heroMovie.overview}</p>}

              <div className="hero-btn">
                <button
                  className="btn"
                  onClick={() => navigate(`/player/${heroMovie.id}`)}
                >
                  <img src={play_icon} alt="" />
                  Play
                </button>
                <button
                  className="btn dark-btn"
                  onClick={() => setShowDescription(!showDescription)}
                >
                  <img src={info_icon} alt="" />
                  {showDescription ? "Hide Info" : "More Info"}
                </button>
              </div>

              <Titlecard />
            </div>
          </div>
        ) : (
          <div className="hero-loading">
            <p style={{ color: "white", fontSize: "20px" }}>Loading movie...</p>
          </div>
        )}
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="search-results">
          <h2>Search Results</h2>
          <div className="results-grid">
            {searchResults.map((movie) => (
              <div
                key={movie.id}
                className="movie-card"
                onClick={() => navigate(`/player/${movie.id}`)}
              >
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                      : "https://via.placeholder.com/200x300?text=No+Image"
                  }
                  alt={movie.title}
                />
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* More Categories */}
      <div className="morecards">
        <div id="movies">
          <Titlecard title={"Blockbuster Movies"} category={"top_rated"} />
        </div>
        <div id="new-popular">
          <Titlecard title={"New & Popular"} category={"popular"} />
        </div>
        <div id="upcoming">
          <Titlecard title={"Upcoming"} category={"upcoming"} />
        </div>
        <div id="top-picks">
          <Titlecard title={"Top Picks For You"} category={"now_playing"} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
