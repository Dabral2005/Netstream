import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/login/login';
import Player from './pages/player/Player';
import Titlecard from './components/titlecards/Titlecard';
import Privacy from "./Privacy";
import HelpCenter from "./HelpCenter";
import AudioDescription from "./AudioDescription";
import LegalNotices from "./LegalNotices";
import ContactUs from "./ContactUs";

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
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/help-centre" element={<HelpCenter />} />
        <Route path="/audio-description" element={<AudioDescription />} />
        <Route path="/legal-notices" element={<LegalNotices />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Extra route for Titlecard if you need to access it directly */}
        <Route path='/titlecard' element={<Titlecard />} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App
