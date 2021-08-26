import React from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {

  // const [isHamburgerMenu, setHamburgerMenu] = useState(false);
  // const [isDarkMode, setDarkMode] = useState(false);


  // const showHamburgerMenu = () => setHamburgerMenu(!isHamburgerMenu);


  return (

    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__container__link">
          <h1 className="header__container__title">L<span className="header__container__title__letter">R</span></h1>
        </NavLink>
      </div>
      <div className="header__links">
        <NavLink to="/about" className="header__links__link">Qui-suis-je ?</NavLink>
        <NavLink to="/resume" className="header__links__link">Mon CV</NavLink>
        <NavLink to="/projects" className="header__links__link">Mes projets</NavLink>
        <NavLink to="/contact" className="header__links__link">Contact</NavLink>
        <HamburgerMenu />
        {/* <button className={isHamburgerMenu ? "header__links__button active" : "header__links__button"} onClick={showHamburgerMenu}><i className="fas fa-bars"></i></button> */}
      </div>
    </header>
  );
};

export default Header;