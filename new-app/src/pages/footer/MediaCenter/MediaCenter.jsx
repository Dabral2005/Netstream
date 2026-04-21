import React from 'react';
import './MediaCenter.css';
import { useNavigate } from 'react-router-dom';

const MediaCenter = () => {
  const navigate = useNavigate();

  return (
    <div className="static-page">
      <div className="static-page-header">
        <span className="back-link" onClick={() => navigate(-1)}>← Back</span>
        <h1>Media Centre</h1>
      </div>

      <div className="static-page-content">
        <p>
          Welcome to the Netstream Media Centre. Here you can find the latest news, press releases, and media assets related to our service and original productions.
        </p>

        <h2>Latest Press Releases</h2>
        <div className="press-release-item">
          <h3>Netstream Announces Record-Breaking Subscriber Growth in Q1 2026</h3>
          <p className="date">April 15, 2026</p>
          <p>Netstream today announced financial results for its first quarter ended March 31, 2026, surpassing all expectations in user acquisition and engagement.</p>
        </div>

        <div className="press-release-item">
          <h3>New Original Series "The Singularity" to Premiere Worldwide in May</h3>
          <p className="date">April 02, 2026</p>
          <p>Netstream unveiled the trailer for its highly anticipated sci-fi drama "The Singularity," coming exclusively to the platform next month.</p>
        </div>

        <h2>Media Assets</h2>
        <p>
          High-resolution logos, executive headshots, and show-specific imagery are available for download for editorial use only.
        </p>
        <button className="download-btn" onClick={() => alert("Asset package download started!")}>Download Press Kit</button>

        <h2>Media Contacts</h2>
        <p>
          For press inquiries, please contact our global communications team:
        </p>
        <ul>
          <li><strong>North America:</strong> pr-na@netstream.com</li>
          <li><strong>Europe, Middle East, and Africa:</strong> pr-emea@netstream.com</li>
          <li><strong>Asia Pacific:</strong> pr-apac@netstream.com</li>
        </ul>

        <p className="last-updated">Last Updated: April 21, 2026</p>
      </div>
    </div>
  );
};

export default MediaCenter;
