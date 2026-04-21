import React from 'react';
import './Privacy.css';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="static-page">
      <div className="static-page-header">
        <span className="back-link" onClick={() => navigate(-1)}>← Back</span>
        <h1>Privacy Statement</h1>
      </div>

      <div className="static-page-content">
        <p>
          This Privacy Statement explains our practices, including your choices, regarding the collection, use, and disclosure of certain information, including your personal information, by the Netstream family of companies ("Netstream") in connection with the Netstream service.
        </p>

        <h2>Contacting Us</h2>
        <p>
          If you have general questions about your account or how to contact customer service for assistance, please visit our online Help Centre. For questions specifically about this Privacy Statement, or our use of your personal information, cookies or similar technologies, please contact our Data Protection Officer/Privacy Office by email at privacy@netstream.com.
        </p>

        <h2>Collection of Information</h2>
        <p>We receive and store information about you such as:</p>
        <ul>
          <li><strong>Information you provide to us:</strong> This includes your name, email address, address or postal code, payment method(s), and telephone number.</li>
          <li><strong>Information we collect automatically:</strong> We collect information about you and your use of our service, your interactions with us and our advertising, as well as information regarding your computer or other device used to access our service.</li>
          <li><strong>Information from partners:</strong> We also collect information from other companies with whom you have a relationship.</li>
        </ul>

        <h2>Use of Information</h2>
        <p>
          We use information to provide, analyze, administer, enhance and personalize our services and marketing efforts, to process your registration, your orders and your payments, and to communicate with you on these and other topics.
        </p>

        <h2>Disclosure of Information</h2>
        <p>
          We disclose your information for certain purposes and to third parties, as described below:
        </p>
        <ul>
          <li><strong>Service Providers:</strong> We use other companies, agents or contractors ("Service Providers") to perform services on our behalf or to assist us with the provision of services to you.</li>
          <li><strong>Promotional Offers:</strong> We may offer joint promotions or programs that, in order for your participation, will require us to share your information with third parties.</li>
          <li><strong>Protection of Netstream and others:</strong> Netstream and its Service Providers may disclose and otherwise use your personal and other information where we or they reasonably believe such disclosure is needed to satisfy any applicable law, regulation, legal process, or governmental request.</li>
        </ul>

        <h2>Your Choices</h2>
        <p>
          <strong>Email and Text Messages.</strong> If you no longer want to receive certain communications from us via email or text message, simply access the "Notifications" section of the "Account" page on our website and uncheck those items to unsubscribing.
        </p>

        <p className="last-updated">Last Updated: April 21, 2026</p>
      </div>
    </div>
  );
};

export default Privacy;
