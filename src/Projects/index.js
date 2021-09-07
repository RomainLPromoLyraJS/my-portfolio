/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
//Import React and packages
import React from 'react';
import Fade from 'react-reveal/Fade';

//Local imports
import OutsidersImg from '../assets/img/outsiders-car.png';
import CrepeImg from '../assets/img/crepes.png';
import TodolistImg from '../assets/img/todolist.png';
import ConverterImg from '../assets/img/converter.png';
import CreditCardImg from '../assets/img/credit-card.png';
import WeatherImg from '../assets/img/weather.jpg';


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
            <p className="projects__section__project__description">Une plateforme regroupant des personnes souhaitant pratiquer un même sport outdoor en partageant les frais de transport.</p>
            <ul className="projects__section__project__lists">Technologies
              <li className="projects__section__project__lists__first">- HTML / CSS (Node-Sass)</li>
              <li className="projects__section__project__lists__list">- Javascript</li>
              <li className="projects__section__project__lists__list">- ReactJS / NodeJS / SQL</li>
            </ul>
          </Fade>
          <Fade bottom>
            <a className="projects__section__project__button__a"
              href="https://github.com/RomainLPromoLyraJS/Outsiders" target="_blank" rel="noreferrer">
              <button className="projects__section__project__button">Voir sur Github</button>
            </a>
          </Fade>
        </div>
        <div className="projects__section__project__links">
          <Fade right>
            <a className="projects__section__project__links__link" href="https://github.com/RomainLPromoLyraJS/Outsiders" target="_blank">Outsiders<img className="projects__section__project__links__img" src={OutsidersImg} alt="site d'une plateforme regroupant des personnes souhaitant pratiquer des sports outdoor"/></a>
          </Fade>
        </div>
      </div>
      <div className="projects__section">
        <div className="projects__section__project">
          <Fade left>
            <p className="projects__section__project__description">Une animation de carte de crédit qui change en fonction des deux premiers chiffres.</p>
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
            <a className="projects__section__project__links__link" href="https://credit-card-for-fun.netlify.app/" target="_blank">Credit Card<img className="projects__section__project__links__img" src={CreditCardImg} alt="site d'une animation de carte bancaire." /></a>
          </Fade>
        </div>
      </div>
      <div className="projects__section">
        <div className="projects__section__project">
          <Fade left>
            <p className="projects__section__project__description">Une todolist qui permet d'ajouter des tâches et de les cocher une fois effectuées.</p>
            <ul className="projects__section__project__lists">Technologies
              <li className="projects__section__project__lists__first">- HTML / CSS</li>
              <li className="projects__section__project__lists__list">- Javascript</li>
              <li className="projects__section__project__lists__list">- ReactJS</li>
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
            <a className="projects__section__project__links__link" href="https://todolist-in-reactjs.netlify.app/" target="_blank">TodoList<img className="projects__section__project__links__img" src={TodolistImg} alt="site d'une todo liste." /></a>
          </Fade>
        </div>
      </div>
      <div className="projects__section">
        <div className="projects__section__project">
          <Fade left>
            <p className="projects__section__project__description">Un convertisseur de monnaie affichant les devises selon le cours actuel.</p>
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
            <a className="projects__section__project__links__link" href="https://my-currency-converter.netlify.app/" target="_blank">Convertisseur<img className="projects__section__project__links__img" src={ConverterImg} alt="site d'un convertisseur de monnaie." /></a>
          </Fade>
        </div>
      </div>
      <div className="projects__section">
        <div className="projects__section__project">
          <Fade left>
            <p className="projects__section__project__description">Une recette de crêpes savoureuses à reproduire à la maison.</p>
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
            <a className="projects__section__project__links__link" href="https://crepes-recipe.netlify.app/" target="_blank">Recette de crêpes<img className="projects__section__project__links__img" src={CrepeImg} alt="site d'une recette de crêpes savoureuses." /></a>
          </Fade>
        </div>
      </div>
      <div className="projects__section">
        <div className="projects__section__project">
          <Fade left>
            <p className="projects__section__project__description">Une application de météo dynamique permettant d'avoir la température et le temps qu'il fait dans le monde entier. (EN COURS DE CREATION)</p>
            <ul className="projects__section__project__lists">Technologies
              <li className="projects__section__project__lists__first">- HTML / CSS</li>
              <li className="projects__section__project__lists__list">- Javascript</li>
              <li className="projects__section__project__lists__list">- ReactJS</li>
            </ul>
          </Fade>
          <Fade bottom>
            <p className="projects__section__project__button__a"
              href="#" target="_blank" rel="noreferrer">
              <button className="projects__section__project__button in-progress">en cours</button>
            </p>
          </Fade>
        </div>
        <div className="projects__section__project__links">
          <Fade right>
            <p className="projects__section__project__links__link" href="#" target="_blank">Weather<img className="projects__section__project__links__img img-weather" src={WeatherImg} alt="site d'une application météo." /></p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Projects;