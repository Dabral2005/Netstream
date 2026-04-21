import React from 'react';
import './HelpCenter.css';
import { useNavigate } from 'react-router-dom';

const HelpCenter = () => {
  const navigate = useNavigate();

  return (
    <div className="static-page">
      <div className="static-page-header">
        <span className="back-link" onClick={() => navigate(-1)}>← Back</span>
        <h1>Help Centre</h1>
      </div>

      <div className="static-page-content">
        <p>
          Welcome to the Netstream Help Centre. Find answers to common questions, troubleshooting tips, and account support.
        </p>

        <div className="help-search-box">
          <input type="text" placeholder="What do you need help with?" />
          <button onClick={() => alert("Searching...")}>Search</button>
        </div>

        <h2>Popular Topics</h2>
        <div className="topic-grid">
          <div className="topic-card">
            <h3>Getting Started</h3>
            <p>How to sign up, manage profiles, and start watching.</p>
          </div>
          <div className="topic-card">
            <h3>Managing Account</h3>
            <p>Update email, password, and payment methods.</p>
          </div>
          <div className="topic-card">
            <h3>Billing & Payments</h3>
            <p>Review charges, invoice history, and billing cycles.</p>
          </div>
          <div className="topic-card">
            <h3>Watching Netstream</h3>
            <p>Supported devices, 4K streaming, and downloads.</p>
          </div>
        </div>

        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How do I cancel my subscription?</h3>
          <p>You can cancel your Netstream membership at any time from the 'Account' section. Follow the cancellation link and you're done.</p>
        </div>
        <div className="faq-item">
          <h3>What devices can I use to watch?</h3>
          <p>Netstream is available on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>

        <h2>Contact Support</h2>
        <p>
          If you can't find what you're looking for, our support team is available via <a href="/contact-us">Contact Us</a>.
        </p>

        <p className="last-updated">Last Updated: April 21, 2026</p>
      </div>
    </div>
  );
};

export default HelpCenter;
