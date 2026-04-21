import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UnderConstruction.css';

const UnderConstruction = () => {
  const navigate = useNavigate();

  return (
    <div className="under-construction">
      <div className="under-construction-content">
        <h1>Page Under Construction</h1>
        <p>We're working hard to bring you this page soon. Please check back later.</p>
        <button className="back-home-btn" onClick={() => navigate('/home')}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default UnderConstruction;
