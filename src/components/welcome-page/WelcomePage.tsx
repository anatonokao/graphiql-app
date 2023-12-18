import React from 'react';
import './WelcomePage.scss';
import rsschoolLogo from '../../assets/rs_school_js.svg';
import imagePerson1 from '../../assets/ava.jpg';

function WelcomePage() {

// const [isSticky, setSticky] = useState(false);
// const [isAuth] = useState(true);

// useEffect(() => {
//   const handleScroll = () => {
//     setSticky(window.scrollY > 50);
//   };

//   window.addEventListener('scroll', handleScroll);

//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, []);


  return (
    <div className='welcome-page'>
        <div className='about-project'>
            <h2 className='about-title'>About Project</h2>
            <p className='developers__description'>GraphiQL is a playground/IDE for graphQL requests. This application contains a set of building blocks that allow its users to build GraphQL IDEs with ease.</p>
        </div>
        <div className='about-container'>
            <h2 className='about-title'>About Us</h2>
            <div className='about-us-container'>
                <div className='developers'>
                    <img className='developers__img' src={imagePerson1} alt="rsschool-logo" />
                    <p className='developers__description'>My name is Valeriy. I started learning programming last year. First I studied the frontend on different platforms and it was not systematic, but then I found RS School. I started studying from stage 0 and now I&#8242;m finishing React course. My goal is to become a front-end developer.</p>
                </div>
                <div className='developers'>
                    <img className='developers__img' src={imagePerson1} alt="rsschool-logo" />
                    <p className='developers__description'>My name is Valeriy. I started learning programming last year. First I studied the frontend on different platforms and it was not systematic, but then I found RS School. I started studying from stage 0 and now I&#8242;m finishing React course. My goal is to become a front-end developer.</p>
                </div>
                <div className='developers'>
                    <img className='developers__img' src={imagePerson1} alt="rsschool-logo" />
                    <p className='developers__description'>My name is Valeriy. I started learning programming last year. First I studied the frontend on different platforms and it was not systematic, but then I found RS School. I started studying from stage 0 and now I&#8242;m finishing React course. My goal is to become a front-end developer.</p>
                </div>
            </div>
        </div>
        <div className='about-course'>
            <h2 className='about-title'>About course</h2>
            <a className='footer__logo' href="https://rs.school/react/">
                <img className='footer__logo' src={rsschoolLogo} alt="rsschool-logo" />
            </a>
        </div>
    </div>
  );
}

export default WelcomePage;