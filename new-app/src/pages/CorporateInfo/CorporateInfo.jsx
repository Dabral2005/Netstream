import React from 'react';
import './CorporateInfo.css';
import { useNavigate } from 'react-router-dom';

const CorporateInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="static-page">
      <div className="static-page-header">
        <span className="back-link" onClick={() => navigate(-1)}>← Back</span>
        <h1>Corporate Information</h1>
      </div>

      <div className="static-page-content">
        <p>
          Netstream, Inc. is a leading entertainment services provider. Below you will find key corporate information about our company.
        </p>

        <h2>Headquarters</h2>
        <p>
          Netstream, Inc.<br />
          121 Albright Way<br />
          Los Gatos, CA 95032<br />
          USA
        </p>

        <h2>Executives</h2>
        <ul>
          <li><strong>Sarah Jenkins</strong> - Chief Executive Officer</li>
          <li><strong>David Miller</strong> - Chief Content Officer</li>
          <li><strong>Anita Rao</strong> - Chief Product Officer</li>
          <li><strong>Marcus Thorne</strong> - Chief Financial Officer</li>
        </ul>

        <h2>Company Registration</h2>
        <p>
          Registered in Delaware, USA<br />
          Registration Number: 4829301-C<br />
          VAT ID: US83948572
        </p>

        <h2>European Headquarters</h2>
        <p>
          Netstream International B.V.<br />
          Stadhouderskade 55<br />
          1072 AB Amsterdam<br />
          The Netherlands
        </p>

        <h2>Legal Representative</h2>
        <p>
          Marcus Thorne, CFO
        </p>

        <p className="last-updated">Last Updated: April 21, 2026</p>
      </div>
    </div>
  );
};

export default CorporateInfo;
