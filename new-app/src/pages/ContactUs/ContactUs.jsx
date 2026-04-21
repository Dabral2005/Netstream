import React from 'react';
import './ContactUs.css';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div className="static-page">
      <div className="static-page-header">
        <span className="back-link" onClick={() => navigate(-1)}>← Back</span>
        <h1>Contact Us</h1>
      </div>

      <div className="static-page-content">
        <p>
          Need help? The Netstream customer service team is available 24/7 to assist you with any questions or issues you may have.
        </p>

        <h2>Online Support</h2>
        <p>
          The fastest way to get help is through our <a href="/help-centre">Help Centre</a>. You can find answers to frequently asked questions about billing, account settings, and troubleshooting.
        </p>

        <h2>Live Chat</h2>
        <p>
          Connect with a Netstream representative instantly via our live chat service. Available 24 hours a day, 7 days a week.
        </p>
        <button className="contact-btn" onClick={() => alert("Chat window opening...")}>Start Live Chat</button>

        <h2>Call Us</h2>
        <p>
          You can call us directly from the Netstream app on your mobile device (data charges may apply) or from a landline.
        </p>
        <div className="phone-box">
          <span className="number">000-800-040-1843</span>
          <span className="info">Service Code: 492-384</span>
        </div>

        <h2>Corporate Address</h2>
        <p>
          Netstream, Inc.<br />
          121 Albright Way<br />
          Los Gatos, CA 95032<br />
          USA
        </p>

        <p className="last-updated">Last Updated: April 21, 2026</p>
      </div>
    </div>
  );
};

export default ContactUs;
