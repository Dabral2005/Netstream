import "./HelpCenter.css";

export default function HelpCenter() {
  return (
    <div className="help-centre-page">
      <h1>Help Centre</h1>

      <p>
        Welcome to the Netflix Help Centre. Here you can find answers to common 
        questions, troubleshooting tips, and account support.
      </p>

      <h2>Getting Started</h2>
      <p>
        New to Netflix? Learn how to set up your account, start streaming, and 
        discover shows and movies you’ll love.
      </p>

      <h2>Managing Your Account</h2>
      <p>
        Update your email, password, or payment method anytime. 
        You can also manage your subscription plan directly from your account settings.
      </p>

      <h2>Watching Netflix</h2>
      <p>
        Stream Netflix on smart TVs, laptops, mobile devices, and tablets. 
        Download titles for offline viewing on the mobile app.
      </p>

      <h2>Billing & Payments</h2>
      <p>
        Netflix accepts various payment methods including credit/debit cards, 
        UPI, wallets, and gift cards. Review your billing history from your account.
      </p>

      <h2>Troubleshooting</h2>
      <p>
        Having playback or login issues? Visit our 
        <a href="https://help.netflix.com/en" target="_blank" rel="noreferrer">
          Troubleshooting Page
        </a> for solutions.
      </p>

      <h2>Contact Support</h2>
      <p>
        If you can’t find your answer here, contact Netflix Support through 
        <a href="/contact-us"> Contact Us</a> for live chat or phone assistance.
      </p>

      <p className="last-updated">Last updated: January 2023</p>
    </div>
  );
}
