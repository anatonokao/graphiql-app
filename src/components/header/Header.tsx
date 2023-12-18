import React, { useEffect } from 'react';
import { useState } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

function Header() {

const [isSticky, setSticky] = useState(false);
const [isAuth] = useState(true);

useEffect(() => {
  const handleScroll = () => {
    setSticky(window.scrollY > 50);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  return (
    <>
        <div className={`header ${isSticky ? 'sticky' : ''}`}>
        <NavLink className="nav-link" to="/">Home</NavLink>
        <select className='custom-select' defaultValue="en">
            <option value="en">EN</option>
            <option value="ru">RU</option>
        </select>
        {isAuth === true ? (
      <>
        <NavLink className="nav-link" to="/auth">Sign In</NavLink>
        <NavLink className="nav-link" to="/auth">Sign Up</NavLink>
      </>
    ) : (
      <>
        <NavLink className="nav-link" to="/playground">GraphiQL</NavLink>
        <NavLink className="nav-link" to="/playground">Exit</NavLink>
      </>
    )}
      </div>
    </>
  );
}

export default Header;