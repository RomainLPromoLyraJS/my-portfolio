/* eslint-disable jsx-a11y/anchor-is-valid */
//Import React and packages
import React from 'react';
import Fade from 'react-reveal/Fade';

//Local imports

import CrepeImg from '../assets/img/crepes.png';
import TodolistImg from '../assets/img/todolist.png';
import ConverterImg from '../assets/img/converter.png';
import CreditCardImg from '../assets/img/credit-card.png';


const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__maintitle">
        <Fade top>
          <h1 className="projects__maintitle__title">Mes projets</h1>
          <h2 className="projects__maintitle__subtitle">Réalisés avec ReactJS</h2>
        </Fade>
      </div>
      <div className="projects__section">
        <div className="projects__section__project">
          <Fade left>
            <p className="projects__section__project__description">Une recette de crêpes savoureuses intégralement codée en ReactJS.</p>
            <ul className="projects__section__project__lists">Technologies
              <li className="projects__section__project__lists__first">- HTML / CSS</li>
              <li className="projects__section__project__lists__list">- Javascript</li>
              <li className="projects__section__project__lists__list">- ReactJS</li>
            </ul>
          </Fade>
          <Fade bottom>
            <a className="projects__section__project__button__a"
              href="https://crepes-recipe.netlify.app/" target="_blank" rel="noreferrer">
              <button className="projects__section__project__button">voir</button>
            </a>
          </Fade>
        </div>
        <div className="projects__section__project__links">
          <Fade right>
            <a className="projects__section__project__links__link" href="#" target="_blank">Recette de crêpes<img className="projects__section__project__links__img" src={CrepeImg} alt="site d'une recette de crêpes en ReactJS" /></a>
          </Fade>
        </div>
      </div>
      <div className="projects__section">
        <div className="projects__section__project">
          <Fade left>
            <p className="projects__section__project__description">Un convertisseur de monnaie intégralement codé en ReactJS.</p>
            <ul className="projects__section__project__lists">Technologies
              <li className="projects__section__project__lists__first">- HTML / CSS</li>
              <li className="projects__section__project__lists__list">- Javascript</li>
              <li className="projects__section__project__lists__list">- ReactJS</li>
            </ul>
          </Fade>
          <Fade bottom>
            <a className="projects__section__project__button__a"
              href="https://my-currency-converter.netlify.app/" target="_blank" rel="noreferrer">
              <button className="projects__section__project__button">voir</button>
            </a>
          </Fade>
        </div>
        <div className="projects__section__project__links">
          <Fade right>
            <a className="projects__section__project__links__link" href="#" target="_blank">Convertisseur<img className="projects__section__project__links__img" src={ConverterImg} alt="site d'une recette de crêpes en ReactJS" /></a>
          </Fade>
        </div>
      </div>
      <div className="projects__section">
        <div className="projects__section__project">
          <Fade left>
            <p className="projects__section__project__description">Une todolist qui permet d'ajouter des tâches et de les cocher une fois effectuées. Codé avec ReactJS.</p>
            <ul className="projects__section__project__lists">Technologies
              <li className="projects__section__project__lists__first">- HTML / CSS</li>
              <li className="projects__section__project__lists__list">- Javascript</li>
            </ul>
          </Fade>
          <Fade bottom>
            <a className="projects__section__project__button__a"
              href="https://todolist-in-reactjs.netlify.app/" target="_blank" rel="noreferrer">
              <button className="projects__section__project__button">voir</button>
            </a>
          </Fade>
        </div>
        <div className="projects__section__project__links">
          <Fade right>
            <a className="projects__section__project__links__link" href="#" target="_blank">TodoList<img className="projects__section__project__links__img" src={TodolistImg} alt="site d'une recette de crêpes en ReactJS" /></a>
          </Fade>
        </div>
      </div>
      <div className="projects__section">
        <div className="projects__section__project">
          <Fade left>
            <p className="projects__section__project__description">Une animation de carte de crédit qui change en fonction des deux premiers chiffres. Codé avec ReactJS.</p>
            <ul className="projects__section__project__lists">Technologies
              <li className="projects__section__project__lists__first">- HTML / CSS</li>
              <li className="projects__section__project__lists__list">- Javascript</li>
              <li className="projects__section__project__lists__list">- ReactJS</li>
            </ul>
          </Fade>
          <Fade bottom>
            <a className="projects__section__project__button__a"
              href="https://credit-card-for-fun.netlify.app/" target="_blank" rel="noreferrer">
              <button className="projects__section__project__button">voir</button>
            </a>
          </Fade>
        </div>
        <div className="projects__section__project__links">
          <Fade right>
            <a className="projects__section__project__links__link" href="#" target="_blank">Credit Card<img className="projects__section__project__links__img" src={CreditCardImg} alt="site d'une recette de crêpes en ReactJS" /></a>
          </Fade>
        </div>
      </div>
      <div className="projects__section projects__section__portfolio">
        <div className="projects__section__project">
          <Fade left>
            <p className="projects__section__project__description">Mon site vitrine décrivant mon parcours et affichant mes projets codés.</p>
            <ul className="projects__section__project__lists">Technologies
              <li className="projects__section__project__lists__first">- HTML / CSS</li>
              <li className="projects__section__project__lists__list">- Node Sass</li>
              <li className="projects__section__project__lists__list">- Javascript</li>
              <li className="projects__section__project__lists__list">- ReactJS</li>
            </ul>
          </Fade>
          <Fade bottom>
            <a className="projects__section__project__button__a"
              href="/" target="_blank" rel="noreferrer">
              <button className="projects__section__project__button">voir</button>
            </a>
          </Fade>
        </div>
        <div className="projects__section__project__links">
          <Fade right>
            <a className="projects__section__project__links__link" href="/" target="_blank">Portfolio<img className="projects__section__project__links__img" src={CrepeImg} alt="site d'une recette de crêpes en ReactJS" /></a>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Projects;