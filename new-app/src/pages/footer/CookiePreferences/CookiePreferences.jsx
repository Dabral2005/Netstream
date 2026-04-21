import React from 'react';
import './CookiePreferences.css';
import { useNavigate } from 'react-router-dom';

const CookiePreferences = () => {
  const navigate = useNavigate();

  return (
    <div className="static-page">
      <div className="static-page-header">
        <span className="back-link" onClick={() => navigate(-1)}>← Back</span>
        <h1>Cookie Preferences</h1>
      </div>

      <div className="static-page-content">
        <p>
          Netstream and our partners use cookies and similar technologies to understand how you use our service, customize your experience and measure our advertising efforts.
        </p>

        <h2>What are Cookies?</h2>
        <p>
          Cookies are small data files that are stored on your device when you browse and use websites and other online services. They are widely used to make websites work, or work more efficiently, as well as to provide reporting information and assist with service or advertising personalization.
        </p>

        <h2>Essential Cookies</h2>
        <p>
          These cookies are strictly necessary to provide our website or online service. For example, we or our partners may use these cookies to authenticate and identify our members when they use our websites and applications so we can provide our service to them. They also help us to enforce our Terms of Use, prevent fraud and maintain the security of our service.
        </p>

        <h2>Performance and Functionality Cookies</h2>
        <p>
          These cookies are not essential, but help us to personalize and enhance your online experience with Netstream. For example, they help us to remember your preferences and prevent you from having to re-enter information you previously provided (for example, during member sign up). We also use these cookies to collect information (such as popular pages, conversion rates, viewing patterns, click-through and other information) about our visitors' use of the Netstream service so that we can enhance and personalize our website and service and conduct market research.
        </p>

        <h2>Advertising Cookies</h2>
        <p>
          These cookies use information about your visit to this and other websites, such as the pages you visit, your use of our service or your response to ads and emails, to deliver ads that are more relevant to you. These types of ads are called "interest-based advertising." Many of the advertising cookies associated with our service belong to our partners.
        </p>

        <div className="cookie-action-box">
          <button className="manage-cookies-btn" onClick={() => alert("Cookie settings saved!")}>Accept All Cookies</button>
          <button className="manage-cookies-btn secondary" onClick={() => alert("Essential cookies only!")}>Essential Only</button>
        </div>

        <p className="last-updated">Last Updated: April 21, 2026</p>
      </div>
    </div>
  );
};

export default CookiePreferences;
