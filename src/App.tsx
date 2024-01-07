import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import WelcomePage from './components/welcome-page/WelcomePage';

function App() {

  return (
    <>
        <Header />
        <WelcomePage />
        <Footer />
    </>
  );
}

export default App;
