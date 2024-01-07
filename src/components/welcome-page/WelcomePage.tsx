import React from 'react';
import { useLocalization } from '../localization/LocalizationContext';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import s from './WelcomePage.module.scss';

import graphql from '@/assets/welcome-page/graphql.svg';
import html from '@/assets/welcome-page/html.svg';
import react from '@/assets/welcome-page/react.svg';
import redux from '@/assets/welcome-page/redux.svg';
import sass from '@/assets/welcome-page/sass.svg';
import typescript from '@/assets/welcome-page/typescript.svg';

import darya from '@/assets/welcome-page/developers/darya.png';
import alexandr from '@/assets/welcome-page/developers/alexander.png';
import valeriy from '@/assets/welcome-page/developers/valeriy.jpg';
import videoGraphql from '@/assets/welcome-page/video.webm';

function WelcomePage() {
  const { texts } = useLocalization();

  return (
    <div className={s.welcomePage + ' ' + '_container'}>
      <div className={s.aboutProjectContainer}>
        <h2 className={s.title}>{texts.welcomePage.titleProject}</h2>
        <div className={s.aboutHeader}>
          <div
            className={s.aboutSubtitle}
            dangerouslySetInnerHTML={{
              __html: texts.welcomePage.subtitleAboutProject,
            }}
          ></div>
          <MouseParallaxContainer className={s.parallaxContainer}>
            <MouseParallaxChild factorX={0.5} factorY={0.5} inverted={true}>
              <img src={react} alt="icon" className={s.parallaxImg} />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.5} factorY={0.5} inverted={false}>
              <img src={redux} alt="icon" className={s.parallaxImg} />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.5} factorY={0.5} inverted={true}>
              <img src={graphql} alt="icon" className={s.parallaxImg} />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.5} factorY={0.5} inverted={false}>
              <img src={typescript} alt="icon" className={s.parallaxImg} />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.5} factorY={0.5} inverted={true}>
              <img src={sass} alt="icon" className={s.parallaxImg} />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.5} factorY={0.5} inverted={false}>
              <img src={html} alt="icon" className={s.parallaxImg} />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <div className={s.aboutInfo}>
          {texts.welcomePage.descriptionAboutProject}
        </div>
      </div>
      <div className={s.keyFuturesContainer}>
        <h2 className={s.title}>Key Futures</h2>
        <div className={s.keyFuturesBody}>
          <div className={s.keyVideo}>
            <video
              src={videoGraphql}
              autoPlay={true}
              muted={true}
              loop={true}
            ></video>
          </div>
          <div className={s.futuresContainer}>
            {texts.welcomePage.keyFuturesProject.map((future) => (
              <div key={future.title} className={s.futureContainer}>
                <span className={s.futureTitle}>{future.title}</span>:{' '}
                {future.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={s.endingAboutProject}>
        <div
          className={s.endingAboutProjectText}
          dangerouslySetInnerHTML={{
            __html: texts.welcomePage.endingAboutProject,
          }}
        ></div>
      </div>
      <div className={s.aboutUsContainer}>
        <h2 className={s.title}>{texts.welcomePage.titleAboutUs}</h2>
        <div className={s.aboutUsBody}>
          <div className={s.developerContainer}>
            <div className={s.developerImg}>
              <img src={darya} alt="photo" />
            </div>
            <div className={s.developerName}>
              {texts.welcomePage.daryaDesc.fullName}
            </div>
            <div className={s.developerRole}>
              {texts.welcomePage.daryaDesc.role}
            </div>
            <div className={s.developerDesc}>
              {texts.welcomePage.daryaDesc.desc}
            </div>
          </div>
          <div className={s.developerContainer}>
            <div className={s.developerImg}>
              <img src={alexandr} alt="photo" />
            </div>
            <div className={s.developerName}>
              {texts.welcomePage.alexanderDesc.fullName}
            </div>
            <div className={s.developerRole}>
              {texts.welcomePage.alexanderDesc.role}
            </div>
            <div className={s.developerDesc}>
              {texts.welcomePage.alexanderDesc.desc}
            </div>
          </div>
          <div className={s.developerContainer}>
            <div className={s.developerImg}>
              <img src={valeriy} alt="photo" />
            </div>
            <div className={s.developerName}>
              {texts.welcomePage.valeriyDesc.fullName}
            </div>
            <div className={s.developerRole}>
              {texts.welcomePage.valeriyDesc.role}
            </div>
            <div className={s.developerDesc}>
              {texts.welcomePage.valeriyDesc.desc}
            </div>
          </div>
        </div>
      </div>
      <div className={s.aboutCourseContainer}>
        <div className={s.aboutCourseBody}></div>
        <div
          className={s.aboutCourseText}
          dangerouslySetInnerHTML={{
            __html: texts.welcomePage.textAboutCourse,
          }}
        ></div>
      </div>
    </div>
  );
}

export default WelcomePage;
