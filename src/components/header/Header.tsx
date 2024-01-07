import React, { useEffect } from 'react';
import { useState } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { useLocalization } from '../localization/LocalizationContext';
import burgerMenu from '../../assets/burger_menu.png';
import closeIcon from '../../assets/close_icon.png';

function Header() {
  const [isSticky, setSticky] = useState(false);
  const [isAuth] = useState(true);
  const { texts, switchLanguage } = useLocalization();
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    switchLanguage(event.target.value);
  };

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`header ${isSticky ? 'sticky' : ''} ${
          isMenuOpen ? 'header-display' : ''
        }`}
      >
        <NavLink className="nav-link" to="/">
          {texts.header.home}
        </NavLink>
        <select
          className="custom-select"
          defaultValue="en"
          onChange={handleLanguageChange}
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>
        {isAuth ? (
          <>
            <NavLink className="nav-link" to="/auth">
              {texts.header.signIn}
            </NavLink>
            <NavLink className="nav-link" to="/auth">
              {texts.header.signUp}
            </NavLink>
          </>
        ) : (
          <>
            <NavLink className="nav-link" to="/playground">
              {texts.header.graphiql}
            </NavLink>
            <NavLink className="nav-link" to="/playground">
              {texts.header.exit}
            </NavLink>
          </>
        )}
      </div>
      <div
        className={`burger-menu ${isSticky ? 'sticky' : ''}`}
        onClick={handleMenuToggle}
      >
        <img
          className="burger-menu-icon"
          src={isMenuOpen ? closeIcon : burgerMenu}
          alt="burger-menu"
        />
      </div>
    </>
  );
}

export default Header;
