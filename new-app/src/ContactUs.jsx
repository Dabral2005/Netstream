import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>

      <p>
        Need help? We’re here for you. You can reach Netflix customer support 
        through multiple channels for quick assistance.
      </p>

      <h2>Live Chat</h2>
      <p>
        The fastest way to connect with us is via live chat. 
        <a 
          href="https://help.netflix.com/en/contactus" 
          target="_blank" 
          rel="noreferrer"
        >
          Start a chat now
        </a>.
      </p>

      <h2>Call Us</h2>
      <p>
        You can call Netflix directly from the Netflix app on Android or iOS, 
        or dial your local support number from our 
        <a 
          href="https://help.netflix.com/en/node/412" 
          target="_blank" 
          rel="noreferrer"
        >
          Call Support Page
        </a>.
      </p>

      <h2>Help Centre</h2>
      <p>
        For FAQs, billing help, and troubleshooting, visit the{" "}
        <a href="/help-centre">Help Centre</a>.
      </p>

      <h2>Mailing Address</h2>
      <p>
        Netflix, Inc.<br />
        121 Albright Way<br />
        Los Gatos, CA 95032, USA
      </p>

      <p className="last-updated">Last updated: January 2023</p>
    </div>
  );
}
