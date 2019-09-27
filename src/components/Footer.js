import React from "react";
import '../css/Footer.css';
import logo from '../fb.png';

const Footer = () => (
    <footer className="footer">
      <p>Speedway Turbo Sliders & <a className="link" href="http://www.sts-pl.eu" >www.sts-pl.eu</a></p>
      <p><a href="https://www.facebook.com/stspl.eu/"><img className="logoSize" src={logo} alt="Facebook"/></a></p>
    </footer>
  );

export default Footer;
