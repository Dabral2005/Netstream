import React from 'react';
import './InvestorRelations.css';
import { useNavigate } from 'react-router-dom';

const InvestorRelations = () => {
  const navigate = useNavigate();

  return (
    <div className="static-page">
      <div className="static-page-header">
        <span className="back-link" onClick={() => navigate(-1)}>← Back</span>
        <h1>Investor Relations</h1>
      </div>

      <div className="static-page-content">
        <p>
          Netstream, Inc. (Nasdaq: NSTRM) is committed to providing timely and accurate information to our shareholders and the broader investment community.
        </p>

        <h2>Stock Information</h2>
        <div className="stock-info">
          <div className="stock-card">
            <span className="label">Symbol</span>
            <span className="value">NSTRM (NASDAQ)</span>
          </div>
          <div className="stock-card">
            <span className="label">Last Price</span>
            <span className="value">$248.52</span>
          </div>
          <div className="stock-card">
            <span className="label">Change</span>
            <span className="value positive">+3.42 (1.4%)</span>
          </div>
        </div>

        <h2>Financial Results</h2>
        <div className="financial-list">
          <div className="financial-item">
            <span className="title">Q1 2026 Earnings Release</span>
            <button className="link-btn">Download PDF</button>
          </div>
          <div className="financial-item">
            <span className="title">2025 Annual Report (Form 10-K)</span>
            <button className="link-btn">Download PDF</button>
          </div>
          <div className="financial-item">
            <span className="title">Q4 2025 Letter to Shareholders</span>
            <button className="link-btn">View Online</button>
          </div>
        </div>

        <h2>Events & Presentations</h2>
        <ul>
          <li><strong>May 12, 2026</strong> - Netstream 2026 Annual Meeting of Shareholders</li>
          <li><strong>June 04, 2026</strong> - Global Technology & Media Conference</li>
          <li><strong>July 18, 2026</strong> - Q2 2026 Earnings Call</li>
        </ul>

        <h2>Investor Contacts</h2>
        <p>
          For investor inquiries, please contact:
        </p>
        <p>
          <strong>Investor Relations Team</strong><br />
          ir@netstream.com<br />
          (408) 555-0199
        </p>

        <p className="last-updated">Last Updated: April 21, 2026</p>
      </div>
    </div>
  );
};

export default InvestorRelations;
