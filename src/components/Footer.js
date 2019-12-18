import React from 'react';
import '../css/Footer.css';
import logo from '../icons/fb.png';
import gitHub from '../icons/github.png';

const Footer = () => (
  <footer className="footer">
    <p>Speedway Turbo Sliders & <a className="link" href="http://www.sts-pl.eu" >www.sts-pl.eu</a></p>
    <a href="https://www.facebook.com/stspl.eu/"><img className="logoSize" src={logo} alt="Facebook"/></a>
    <a href="https://github.com/skibina1/podaj_trzy"><img className="logoSize" src={gitHub} alt="GitHub"></img></a>
  </footer>
);

export default Footer;
