import "./ContactUs.css";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();

  return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>

      <p>
        Need help? We're here for you. You can reach Netstream customer support 
        through multiple channels for quick assistance.
      </p>

      <h2>Live Chat</h2>
      <p>
        The fastest way to connect with us is via live chat.{' '}
        <a href="#chat">Start a chat now</a>.
      </p>

      <h2>Call Us</h2>
      <p>
        You can call Netstream support directly from the app on Android or iOS, 
        or dial your local support number.
      </p>

      <h2>Help Centre</h2>
      <p>
        For FAQs, billing help, and troubleshooting, visit the{" "}
        <a href="/help-centre" onClick={(e) => { e.preventDefault(); navigate("/help-centre"); }}>Help Centre</a>.
      </p>

      <h2>Mailing Address</h2>
      <p>
        Netstream, Inc.<br />
        121 Albright Way<br />
        Los Gatos, CA 95032, USA
      </p>

      <p className="last-updated">Last updated: April 2026</p>
    </div>
  );
}
