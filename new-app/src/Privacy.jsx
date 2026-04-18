import "./Privacy.css";
import { useNavigate } from "react-router-dom";

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="static-page">
      <div className="static-page-header">
        <span className="back-link" onClick={() => navigate(-1)}>←</span>
        <h1>Privacy Statement</h1>
      </div>

      <p>
        This Privacy Statement explains our practices, including your choices, 
        regarding the collection, use, and disclosure of certain information, 
        including your personal information, by the Netstream family of companies.
      </p>

      <h2>Contacting Us</h2>
      <p>
        If you have general questions about your account or how to contact 
        customer service for assistance, please visit our online help center.
      </p>

      <h2>The Collection of Information</h2>
      <p>We receive and store information about you such as:</p>
      <ul>
        <li>Information you provide to us: name, email, payment methods, etc.</li>
        <li>Information we collect automatically: usage data, interactions, etc.</li>
        <li>Information from partners: billing info, IP address, etc.</li>
      </ul>

      <h2>Use of Information</h2>
      <p>
        We use the information to provide, analyze, improve, and personalize our 
        services, to process your registration, your orders, and your payments, 
        and to communicate with you on these and other topics.
      </p>

      <h2>Disclosure of Information</h2>
      <p>
        We disclose your information for certain purposes and to third parties, 
        as described in this section of the Privacy Statement.
      </p>

      <h2>Your Choices</h2>
      <p>
        You can request access to your personal information or correct or update 
        out-of-date or inaccurate personal information we hold about you.
      </p>

      <h2>Changes to This Privacy Statement</h2>
      <p>
        We will update this Privacy Statement from time to time in response to 
        changing legal, regulatory, or operational requirements.
      </p>

      <p className="last-updated">Last updated: April 2026</p>
    </div>
  );
}
