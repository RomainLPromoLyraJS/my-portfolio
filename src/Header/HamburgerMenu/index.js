import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';

const HamburgerMenu = () => {

  const [isHamburgerMenu, setHamburgerMenu] = useState(false);

  const handleShowHamburgerMenu = () => setHamburgerMenu(!isHamburgerMenu);

  return (
    <nav className={`hamburger ${isHamburgerMenu ? "show-hamburger" : "hide-hamburger"} `}>
      <div className="hamburger__links">
        <NavLink onClick={handleShowHamburgerMenu} to="/about" className="hamburger__links__link">Qui-suis-je ?</NavLink>
        <NavLink onClick={handleShowHamburgerMenu} to="/resume" className="hamburger__links__link">Mon CV</NavLink>
        <NavLink onClick={handleShowHamburgerMenu} to="/projects" className="hamburger__links__link">Mes projets</NavLink>
        <NavLink onClick={handleShowHamburgerMenu} to="/contact" className="hamburger__links__link">Contact</NavLink>
      </div>
      <button className="hamburger__button"
        onClick={handleShowHamburgerMenu}>
        <span className="hamburger__button__bar"></span>
      </button>
    </nav >
  );
};

export default HamburgerMenu;
