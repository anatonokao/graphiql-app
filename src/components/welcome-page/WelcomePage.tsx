import React from 'react';
import './WelcomePage.scss';
import rsschoolLogo from '../../assets/rs_school_js.svg';
import { useLocalization } from '../localization/LocalizationContext';

function WelcomePage() {
  const { texts } = useLocalization();

  return (
    <div className="welcome-page">
      <div className="about-project">
        <h2 className="about-title">{texts.titleProject}</h2>
        <p className="developers__description">{texts.textProject}</p>
      </div>
      <div className="about-container">
        <h2 className="about-title">{texts.titleAboutUs}</h2>
        <div className="about-us-container">
          <div className="developers">
            <p className="developers__description">{texts.textPerson1}</p>
          </div>
          <div className="developers">
            <p className="developers__description">{texts.textPerson2}</p>
          </div>
          <div className="developers">
            <p className="developers__description">{texts.textPerson3}</p>
          </div>
        </div>
      </div>
      <div className="about-course">
        <h2 className="about-title">{texts.titleAboutCourse}</h2>
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

export default WelcomePage;
