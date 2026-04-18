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
        <li><a href="#gift">Gift Cards</a></li>
        <li><a href="#media">Media Centre</a></li>
        <li><a href="#investor">Investor Relations</a></li>
        <li><a href="#jobs">Jobs</a></li>
        <li><a href="#terms">Terms of Use</a></li>
        <li><Link to="/privacy">Privacy</Link></li>
        <li><Link to="/legal-notices">Legal Notices</Link></li>
        <li><a href="#cookies">Cookie Preferences</a></li>
        <li><a href="#corporate">Corporate Information</a></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>

      <button className="service-code-btn">Service Code</button>

      <p className='copyright-text'>© 1997-2026 Netstream, Inc.</p>
    </footer>
  )
}

export default Footer
