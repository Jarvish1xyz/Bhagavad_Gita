import React from 'react';
import './Footer.css'; // make sure this CSS file is created

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // or 'auto' for instant scroll
    });
  };
  return (
    <footer className="site-footer">
      <div className="footer-verse">
        <p><em>Verse of the Day:</em> <strong>BG 6.26</strong> — “From whatever cause the restless and unsteady mind wanders away, let him restrain it from that and bring it under the control of the Self alone.”</p>
      <button onClick={scrollToTop} className="btn btn-primary">Go somewhere</button>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Ved Vyas Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
