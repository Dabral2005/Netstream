import "./LegalNotices.css";

export default function LegalNotices() {
  return (
    <div className="legal-notices-page">
      <h1>Legal Notices</h1>

      <p>
        This page contains important legal information about your use of Netflix services.
      </p>

      <h2>Copyright</h2>
      <p>
        All content on Netflix, including movies, series, graphics, logos, and software, 
        is protected by copyright laws. Unauthorized use, distribution, or reproduction 
        is strictly prohibited.
      </p>

      <h2>Trademarks</h2>
      <p>
        Netflix and the Netflix logo are registered trademarks of Netflix, Inc. 
        Other product and company names mentioned on this site may be trademarks 
        of their respective owners.
      </p>

      <h2>Open Source Software</h2>
      <p>
        Netflix uses certain open-source software components. A list of these 
        components and their licenses is available at the 
        <a href="https://netflix.github.io" target="_blank" rel="noreferrer"> Netflix Open Source site</a>.
      </p>

      <h2>Service Terms</h2>
      <p>
        Use of the Netflix service is subject to our 
        <a href="https://help.netflix.com/legal/termsofuse" target="_blank" rel="noreferrer"> Terms of Use</a> 
        and <a href="/privacy"> Privacy Policy</a>.
      </p>

      <h2>Contact Information</h2>
      <p>
        For legal inquiries, you may contact us at:
        <br />
        Netflix, Inc. <br />
        100 Winchester Circle <br />
        Los Gatos, CA 95032, USA
      </p>

      <p className="last-updated">Last updated: January 2023</p>
    </div>
  );
}
