import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
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

      <ul>
        <li><Link to="/audio-description">Audio Description</Link></li>
        <li><Link to="/help-centre">Help Centre</Link></li>
        <li><Link to="/privacy">Privacy</Link></li>
        <li><Link to="/legal-notices">Legal Notices</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>

      <p className='copyright-text'>© 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
