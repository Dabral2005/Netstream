import React from 'react';
import './LegalNotices.css';
import { useNavigate } from 'react-router-dom';

const LegalNotices = () => {
  const navigate = useNavigate();

  return (
    <div className="static-page">
      <div className="static-page-header">
        <span className="back-link" onClick={() => navigate(-1)}>← Back</span>
        <h1>Legal Notices</h1>
      </div>

      <div className="static-page-content">
        <p>
          The Netstream service, including all content and software associated therewith, or any other features or functionalities associated with the Netstream service, are the property of Netstream and its licensors and are protected by applicable intellectual property and other laws.
        </p>

        <h2>Copyright</h2>
        <p>
          The Netstream service, including all content provided on the Netstream service, is protected by copyright, trade secret or other intellectual property laws and treaties.
        </p>

        <h2>Trademarks</h2>
        <p>
          Netstream and the Netstream Logo are trademarks of Netstream, Inc. If you haven't received our permission, do not use the Netstream marks as your own or in any manner that implies sponsorship or endorsement by Netstream.
        </p>

        <h2>Third Party Notices</h2>
        <p>
          The software installed on Netstream ready devices to enable streaming of the Netstream service may contain software available under open source or free software licenses ("Open Source Software") and/or commercial software licensed to Netstream by third parties ("Commercial Software").
        </p>

        <h2>Open Source Software</h2>
        <p>
          We use various open source components to Build Netstream. A complete list of current open source licenses and notices can be provided upon request to legal@netstream.com.
        </p>

        <p className="last-updated">Last Updated: April 21, 2026</p>
      </div>
    </div>
  );
};

export default LegalNotices;
