import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';
import rsschoolLogo from '../../assets/rs_school_js.svg';
import githubLogo from '../../assets/icon_github.png';

function Footer() {
  return (
    <div className="footer">
      <p className="year">&#169; 2024</p>
      <div className="github">
        <img className="github__img" src={githubLogo} alt="github-logo" />
        <NavLink className="nav-link" to="https://github.com/anatonokao">
          Alexander
        </NavLink>
        <NavLink className="nav-link" to="https://github.com/watashinokao">
          Darya
        </NavLink>
        <NavLink className="nav-link" to="https://github.com/Valeriy95">
          Valeriy
        </NavLink>
      </div>
      <div>
        <a className="footer__logo" href="https://rs.school/react/">
          <img
            className="footer__logo"
            src={rsschoolLogo}
            alt="rsschool-logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
