import React from 'react';
import './AudioDescription.css';
import { useNavigate } from 'react-router-dom';

const AudioDescription = () => {
  const navigate = useNavigate();

  return (
    <div className="static-page">
      <div className="static-page-header">
        <span className="back-link" onClick={() => navigate(-1)}>← Back</span>
        <h1>Audio Description</h1>
      </div>

      <div className="static-page-content">
        <p>
          Audio Description (AD) is an optional narration that describes what is happening on screen, including physical actions, facial expressions, costumes, settings, and scene changes.
        </p>

        <h2>Our Commitment to Accessibility</h2>
        <p>
          At Netstream, we are committed to making our service accessible to everyone. We offer a wide range of titles with Audio Description in multiple languages.
        </p>

        <h2>How to find titles with Audio Description</h2>
        <p>
          You can find titles with Audio Description by looking for the AD icon (a small box with "AD" inside) on the title's detail page, or by browsing the 'Audio Description' category on the home screen.
        </p>

        <h2>How to turn on Audio Description</h2>
        <ol>
          <li>Open the Netstream app or website.</li>
          <li>Start playing a movie or TV show.</li>
          <li>Select the 'Audio & Subtitles' menu (usually represented by a speech bubble icon).</li>
          <li>Choose an audio track that includes "Audio Description" in the name.</li>
        </ol>

        <h2>Supported Devices</h2>
        <p>
          Audio Description is supported on most Netstream ready devices, including Smart TVs, mobile devices, and computers.
        </p>

        <p className="last-updated">Last Updated: April 21, 2026</p>
      </div>
    </div>
  );
};

export default AudioDescription;
