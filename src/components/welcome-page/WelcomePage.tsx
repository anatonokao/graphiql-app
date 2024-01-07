import React from 'react';
import rsschoolLogo from '../../assets/rs_school_js.svg';
import { useLocalization } from '../localization/LocalizationContext';
import s from './WelcomePage.module.scss';
function WelcomePage() {
  const { texts } = useLocalization();

  return (
    <div className={s.welcomePage}>
      <div className={s.aboutProject}>
        <h2 className={s.aboutTitle}>{texts.welcomePage.titleProject}</h2>
        <div className={s.aboutHeader}>
          <p
            dangerouslySetInnerHTML={{
              __html: texts.welcomePage.subtitleAboutProject,
            }}
          ></p>
          <div
            style={{ width: '500px', height: '500px', backgroundColor: 'gray' }}
          ></div>
        </div>
        <p className={s.developersDesc}>
          {texts.welcomePage.descriptionAboutProject}
        </p>
      </div>
      <div className={s.aboutContainer}>
        <h2 className={s.aboutTitle}>{texts.welcomePage.titleAboutUs}</h2>
        <div className={s.aboutUsContainer}>
          <div className={s.developers}>
            <p className={s.developersDesc}>{texts.welcomePage.textPerson1}</p>
          </div>
          <div className={s.developers}>
            <p className={s.developersDesc}>{texts.welcomePage.textPerson2}</p>
          </div>
          <div className={s.developers}>
            <p className={s.developersDesc}>{texts.welcomePage.textPerson3}</p>
          </div>
        </div>
      </div>
      <div className={s.aboutCourse}>
        <h2 className={s.aboutTitle}>{texts.welcomePage.titleAboutCourse}</h2>
        <a className={s.footer__logo} href="https://rs.school/react/">
          <img
            className={s.footerLogo}
            src={rsschoolLogo}
            alt="rsschool-logo"
          />
        </a>
      </div>
    </div>
  );
}

export default WelcomePage;
