/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (

    <footer className="footer">
      <div className="footer__follow">
        <p className="footer__follow__text">Follow my work</p>
        <div className="footer__follow__logos">
          <a href="https://www.linkedin.com/in/romain-lafosse/" target="_blank">
            <div className="footer__follow__logos__logo"><FaLinkedin />
            </div>
          </a>
          <a href="https://github.com/RomainLPromoLyraJS" target="_blank">
            <div className="footer__follow__logos__logo"><FaGithub />
            </div>
          </a>
        </div>
        <div className="footer__folio">
          <p className="footer__folio__text">Portfolio - 2021</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;