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
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useNavigate } from "react-router-dom";

// ================= Navbar ===================
const Navbar = ({ onSearch }) => {
  const navRef = useRef();
  const searchRef = useRef();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add("nav-dark");
        } else {
          navRef.current.classList.remove("nav-dark");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("netflix_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        if (!searchQuery) {
          setSearchActive(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchQuery]);

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
    if (e.key === "Escape") {
      setSearchActive(false);
      setSearchQuery("");
      onSearch("");
    }
  };

  const handleSearchClick = () => {
    setSearchActive(true);
    setTimeout(() => {
      const input = searchRef.current?.querySelector("input");
      if (input) input.focus();
    }, 100);
  };

  const handleLogout = () => {
    localStorage.removeItem("netflix_user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Netstream" onClick={() => handleScrollTo("top")} />
        <ul>
          <li className="active"><span onClick={() => handleScrollTo("top")}>Home</span></li>
          <li><span onClick={() => handleScrollTo("movies")}>Movies</span></li>
          <li><span onClick={() => handleScrollTo("new-popular")}>New & Popular</span></li>
          <li><span onClick={() => handleScrollTo("upcoming")}>Upcoming</span></li>
          <li><span onClick={() => handleScrollTo("top-picks")}>My List</span></li>
        </ul>
      </div>

      <div className="navbar-right">
        {/* Expandable Search */}
        <div className="search-wrapper" ref={searchRef}>
          <button className="search-toggle" onClick={handleSearchClick}>
            <img src={search_icon} alt="search" />
          </button>
          <div className={`search-container ${searchActive ? "active" : ""}`}>
            <input
              type="text"
              placeholder="Titles, people, genres"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value === "") onSearch("");
              }}
              onKeyDown={handleKeyDown}
              className="search-input"
            />
          </div>
        </div>

        {/* Notification Bell */}
        <div className="notification-bell" title="Notifications">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.73 21a2 2 0 0 1-3.46 0M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="notification-dot"></span>
        </div>

        {/* Profile */}
        <div className="navbar-profile">
          <img
            src={user?.picture || profile_img}
            alt="profile"
            className="profile"
            referrerPolicy="no-referrer"
          />
          <img src={caret_icon} alt="caret" className="caret" />
          <div className="dropdown">
            {user && (
              <>
                <div className="dropdown-item">
                  <img src={user?.picture || profile_img} alt="" style={{ width: 28, height: 28, borderRadius: 4 }} referrerPolicy="no-referrer" />
                  {user?.name || "User"}
                </div>
                <div className="dropdown-item">Manage Profiles</div>
                <div className="dropdown-item">Transfer Profile</div>
                <div className="dropdown-item">Account</div>
                <div className="dropdown-item">Help Centre</div>
                <div className="dropdown-divider"></div>
              </>
            )}
            <div className="dropdown-signout" onClick={handleLogout}>
              Sign out of Netstream
            </div>
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
  const [isSearching, setIsSearching] = useState(false);

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
    if (!query) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      setSearchResults(data.results || []);
    } catch (err) {
      console.error("Error fetching search results:", err);
    }
  };

  return (
    <div className="home page-enter">
      <Navbar onSearch={handleSearch} />

      {/* If searching, show only results */}
      {isSearching && searchResults.length > 0 ? (
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
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : "https://via.placeholder.com/300x450?text=No+Image"
                  }
                  alt={movie.title}
                />
                <div className="card-title">{movie.title}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <div id="top">
            {heroMovie ? (
              <div className="hero">
                <div className="hero-img-container">
                  <img src={hero_banner} alt="" className="banner-image" />
                </div>
                <div className="hero-caption">
                  {heroMovie.title || heroMovie.original_name ? (
                    <h1 className="hero-dynamic-title">
                      {heroMovie.title || heroMovie.original_name}
                    </h1>
                  ) : (
                    <img src={hero_title} alt="" className="caption-img" />
                  )}

                  <div className="maturity-badge">
                    <span className="maturity-rating">U/A 13+</span>
                    <span className="maturity-year">{heroMovie.release_date?.slice(0, 4)}</span>
                    <span className="maturity-duration">Movie</span>
                  </div>

                  {showDescription && (
                    <p className="hero-overview">{heroMovie.overview}</p>
                  )}

                  <div className="hero-btn">
                    <button
                      className="btn"
                      onClick={() => navigate(`/player/${heroMovie.id}`)}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5V19L19 12L8 5Z" fill="black"/>
                      </svg>
                      Play
                    </button>
                    <button
                      className="btn dark-btn"
                      onClick={() => setShowDescription(!showDescription)}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                        <path d="M12 16V12M12 8H12.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      {showDescription ? "Less Info" : "More Info"}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="hero-loading">
                <div className="skeleton hero-skeleton"></div>
              </div>
            )}
          </div>

          {/* More Categories */}
          <div className="morecards">
            <Titlecard title={"Popular on Netstream"} />
            <div id="movies">
              <Titlecard title={"Blockbuster Movies"} category={"top_rated"} />
            </div>
            <Titlecard title={"Top 10 in India Today"} category={"popular"} isTopTen={true} />
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
        </>
      )}
    </div>
  );
};

export default Home;
