import "./AudioDescription.css";

export default function AudioDescription() {
  return (
    <div className="audio-description-page">
      <h1>Audio Description</h1>

      <p>
        Audio Description is an optional narration that describes what is happening 
        on screen, including physical actions, facial expressions, costumes, settings, 
        and scene changes. It’s especially useful for members who are blind or have 
        low vision.
      </p>

      <h2>How to Use Audio Description</h2>
      <p>
        Most titles on Netflix have Audio Description available. To turn it on:
      </p>
      <ul>
        <li>Play a title with Audio Description available.</li>
        <li>Select the <b>Audio & Subtitles</b> option.</li>
        <li>Choose a language with “Audio Description.”</li>
      </ul>

      <h2>Supported Devices</h2>
      <p>
        Audio Description can be enabled on most devices that support the Netflix app, 
        including:
      </p>
      <ul>
        <li>Smart TVs and streaming media players</li>
        <li>Web browsers</li>
        <li>Mobile devices (iOS & Android)</li>
        <li>Game consoles</li>
      </ul>

      <h2>More Help</h2>
      <p>
        For a full list of available Audio Description titles, visit the Netflix 
        <a href="https://help.netflix.com/en/node/25079" target="_blank" rel="noreferrer"> Help Center</a>.
      </p>

      <p className="last-updated">Last updated: January 2023</p>
    </div>
  );
}
