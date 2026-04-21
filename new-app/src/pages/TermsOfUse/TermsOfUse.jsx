import React from 'react';
import './TermsOfUse.css';
import { useNavigate } from 'react-router-dom';

const TermsOfUse = () => {
  const navigate = useNavigate();

  return (
    <div className="static-page">
      <div className="static-page-header">
        <span className="back-link" onClick={() => navigate(-1)}>← Back</span>
        <h1>Terms of Use</h1>
      </div>

      <div className="static-page-content">
        <p>
          Netstream provides a personalized subscription service that allows our members to access entertainment content over the Internet to certain Internet-connected TVs, computers and other devices ("Netstream ready devices").
        </p>

        <h2>1. Membership</h2>
        <p>
          1.1. Your Netstream membership will continue until terminated. To use the Netstream service you must have Internet access and a Netstream ready device, and provide us with one or more Payment Methods.
        </p>

        <h2>2. Promotional Offers</h2>
        <p>
          We may from time to time offer special promotional offers, plans or memberships ("Offers"). Offer eligibility is determined by Netstream at its sole discretion and we reserve the right to revoke an Offer and put your account on hold in the event that we determine you are not eligible.
        </p>

        <h2>3. Billing and Cancellation</h2>
        <p>
          3.1. Billing Cycle. The membership fee for the Netstream service and any other charges you may incur in connection with your use of the service, such as taxes and possible transaction fees, will be charged to your Payment Method on the specific payment date indicated on your "Account" page.
        </p>
        <p>
          3.2. Cancellation. You can cancel your Netstream membership at any time, and you will continue to have access to the Netstream service through the end of your billing period.
        </p>

        <h2>4. Netstream Service</h2>
        <p>
          4.1. You must be at least 18 years of age to become a member of the Netstream service. Minors may only use the service under the supervision of an adult.
        </p>
        <p>
          4.2. The Netstream service and any content accessed through the service are for your personal and non-commercial use only and may not be shared with individuals beyond your household.
        </p>

        <h2>5. Passwords and Account Access</h2>
        <p>
          The member who created the Netstream account and whose Payment Method is charged (the "Account Owner") is responsible for any activity that occurs through the Netstream account. To maintain control over the account and to prevent anyone from accessing the account, the Account Owner should maintain control over the Netstream ready devices that are used to access the service and not reveal the password or details of the Payment Method associated with the account to anyone.
        </p>

        <p className="last-updated">Last Updated: April 21, 2026</p>
      </div>
    </div>
  );
};

export default TermsOfUse;
