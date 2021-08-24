import { React, useState } from 'react';

const HamburgerMenu = () => {

  const [isHamburgerMenu, setHamburgerMenu] = useState(false);

  const showHamburgerMenu = () => setHamburgerMenu(!isHamburgerMenu);

  return (
    <nav className="hamburger">
      {isHamburgerMenu && (
        <ul className="hamburger__list">
          <li className="hamburger__list__items">Qui suis-je</li>
          <li className="hamburger__list__items">Mon CV</li>
          <li className="hamburger__list__items">Mes Projets</li>
          <li className="hamburger__list__items">Contact</li>
        </ul>
      )}

      <button className={isHamburgerMenu ? "hamburger__list__button active" : "hamburger__list__button"}
        onClick={showHamburgerMenu}>
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};

export default HamburgerMenu;