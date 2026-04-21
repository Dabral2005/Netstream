import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/login/login';
import Player from './pages/player/player';
import Titlecard from './components/titlecards/Titlecard';
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";

// Footer Pages
import AudioDescription from './pages/AudioDescription/AudioDescription';
import HelpCenter from './pages/HelpCenter/HelpCenter';
import MediaCenter from './pages/MediaCenter/MediaCenter';
import InvestorRelations from './pages/InvestorRelations/InvestorRelations';
import TermsOfUse from './pages/TermsOfUse/TermsOfUse';
import Privacy from './pages/Privacy/Privacy';
import LegalNotices from './pages/LegalNotices/LegalNotices';
import CookiePreferences from './pages/CookiePreferences/CookiePreferences';
import CorporateInfo from './pages/CorporateInfo/CorporateInfo';
import ContactUs from './pages/ContactUs/ContactUs';

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

        {/* Footer Routes */}
        <Route path="/audio-description" element={<AudioDescription />} />
        <Route path="/help-centre" element={<HelpCenter />} />
        <Route path="/media-centre" element={<MediaCenter />} />
        <Route path="/investor-relations" element={<InvestorRelations />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/legal-notices" element={<LegalNotices />} />
        <Route path="/cookie-preferences" element={<CookiePreferences />} />
        <Route path="/corporate-information" element={<CorporateInfo />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Extra route for Titlecard if you need to access it directly */}
        <Route path='/titlecard' element={<Titlecard />} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App
