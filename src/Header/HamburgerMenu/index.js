import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';

const HamburgerMenu = () => {

  const [isHamburgerMenu, setHamburgerMenu] = useState(false);

  const handleShowHamburgerMenu = () => setHamburgerMenu(!isHamburgerMenu);

  return (
    <nav className="hamburger">
      {isHamburgerMenu && (
        <div className="hamburger__links">
          <NavLink to="/about" className="hamburger__links__link">Qui-suis-je ?</NavLink>
          <NavLink to="/resume" className="hamburger__links__link">Mon CV</NavLink>
          <NavLink to="/projects" className="hamburger__links__link">Mes projets</NavLink>
          <NavLink to="/contact" className="hamburger__links__link">Contact</NavLink>
        </div>
      )}

      <button className="hamburger__button"
        onClick={handleShowHamburgerMenu}>
        <span className="hamburger__button__bar"></span>
      </button>
    </nav>
  );
};

export default HamburgerMenu;
