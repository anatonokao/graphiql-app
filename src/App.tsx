import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import WelcomePage from './components/welcome-page/WelcomePage';
import { LocalizationProvider } from './components/localization/LocalizationContext';

function App() {

  return (
    <>
      {/* <div className="nav" style={{ position: 'relative' }}>
        <img src={reactLogo} alt="logo" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/auth">Auth</NavLink>
        <NavLink to="/playground">GraphiQL</NavLink>
      </div> */}
      <LocalizationProvider>
        <Header />
        <WelcomePage />
        <Footer />
      </LocalizationProvider>
    </>
  );
}

export default App;
