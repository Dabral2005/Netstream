import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/login/login';
import Player from './pages/player/player';
import Titlecard from './components/titlecards/Titlecard';
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LoadingBar = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? <div className="top-loading-bar"></div> : null;
};

const App = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("netflix_user");
    if (savedUser) {
      setProfile(JSON.parse(savedUser));
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <LoadingBar />
      <Routes>
        {/* Default redirect */}
        <Route path='/' element={<Navigate to="/login" />} />

        {/* Login Page */}
        <Route path='/login' element={<Login setProfile={setProfile} />} />

        {/* Protect Home Page */}
        <Route
          path='/home'
          element={profile ? <Home /> : <Navigate to="/login" replace />}
        />

        {/* Player Page */}
        <Route
          path='/player/:id'
          element={profile ? <Player /> : <Navigate to="/login" replace />}
        />

        {/* Static Pages */}
        <Route path="/under-construction" element={<UnderConstruction />} />

        {/* Extra route for Titlecard if you need to access it directly */}
        <Route path='/titlecard' element={<Titlecard />} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App
