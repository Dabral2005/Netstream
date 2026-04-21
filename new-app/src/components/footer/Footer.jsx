import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-icons">
        <a href="https://www.facebook.com/netflix" target="_blank" rel="noopener noreferrer">
          <img src={facebook_icon} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/netflix" target="_blank" rel="noopener noreferrer">
          <img src={instagram_icon} alt="Instagram" />
        </a>
        <a href="https://twitter.com/netflix" target="_blank" rel="noopener noreferrer">
          <img src={twitter_icon} alt="Twitter" />
        </a>
        <a href="https://www.youtube.com/netflix" target="_blank" rel="noopener noreferrer">
          <img src={youtube_icon} alt="YouTube" />
        </a>
      </div>

      <ul className="footer-links">
        <li><Link to="/audio-description">Audio Description</Link></li>
        <li><Link to="/help-centre">Help Centre</Link></li>
        <li><Link to="/under-construction">Gift Cards</Link></li>
        <li><Link to="/media-centre">Media Centre</Link></li>
        <li><Link to="/investor-relations">Investor Relations</Link></li>
        <li><Link to="/under-construction">Jobs</Link></li>
        <li><Link to="/terms-of-use">Terms of Use</Link></li>
        <li><Link to="/privacy">Privacy</Link></li>
        <li><Link to="/legal-notices">Legal Notices</Link></li>
        <li><Link to="/cookie-preferences">Cookie Preferences</Link></li>
        <li><Link to="/corporate-information">Corporate Information</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>

      <button className="service-code-btn" onClick={() => alert("Service Code: 492-384-592")}>Service Code</button>

      <p className='copyright-text'>© 1997-2026 Netstream, Inc.</p>
    </footer>
  )
}

export default Footer
