/* eslint-disable react/jsx-no-target-blank */
//Import React and packages
import React from 'react';
import Fade from 'react-reveal/Fade';

import ResumeLink from '../assets/resume';

const Resume = () => {
  return (
    <div className="resume">
      <Fade top>
        <h1 className="resume__title">Mon CV</h1>
        <h2 className="resume__subtitle">Compétences, expériences et formation</h2>
      </Fade>
      <div className="resume__formation">
        <Fade left>
          <h3 className="resume__formation__title">Compétences</h3>
        </Fade>
      </div>
      <div className="resume__skills">
        <div className="resume__skills__lists">
          <Fade bottom>
            <h4 className="resume__skills__lists__subtitle">Front</h4>
            <ul className="resume__skills__lists__list">
              <li className="resume__skills__lists__list__element">HTML / CSS</li>
              <li className="resume__skills__lists__list__element">Javascript</li>
              <li className="resume__skills__lists__list__element">React</li>
              <li className="resume__skills__lists__list__element">Redux</li>
            </ul>
          </Fade>
        </div>
        <div className="resume__skills__lists">
          <Fade bottom>
            <h4 className="resume__skills__lists__subtitle">Back</h4>
            <ul className="resume__skills__lists__list">
              <li className="resume__skills__lists__list__element">NodeJS</li>
              <li className="resume__skills__lists__list__element">ExpressJS</li>
              <li className="resume__skills__lists__list__element">PostgreSQL</li>
              <li className="resume__skills__lists__list__element">Json Web Token / Bcrypt</li>
            </ul>
          </Fade>
        </div>
        <div className="resume__skills__lists">
          <Fade bottom>
            <h4 className="resume__skills__lists__subtitle">Outils</h4>
            <ul className="resume__skills__lists__list__last">
              <li className="resume__skills__lists__list__element">Visual Code Studio</li>
              <li className="resume__skills__lists__list__element">Git</li>
              <li className="resume__skills__lists__list__element">Github</li>
              <li className="resume__skills__lists__list__element">Insomnia / Postman</li>
            </ul>
          </Fade>
        </div>
      </div>
      <div className="resume__experience">
        <Fade left>
          <h3 className="resume__experience__title">Expériences</h3>
          <article className="resume__experience__article">
            <h4 className="resume__experience__article__title">Apothéose O'clock : Projet Outsiders</h4>
            <p className="resume__experience__article__description">Développer une plateforme regroupant des personnes souhaitant pratiquer des sports outdoor en partageant les frais de transport. J'ai occupé le poste de Scrum Master et Développeur Front pour ce projet. Technologies utilisées pour le front : HTML, CSS, Javascript, React, Redux. Technologies utilisées pour le back : NodeJS, PostgreSQL, Json Web Token, Bcrypt.</p>
            <a className="resume__experience__article__link" href="https://www.youtube.com/watch?v=CSQhjBBMLcw&t=2505s" target="_blank">présentation youtube du projet Outsiders</a>
          </article>
        </Fade>
      </div>
      <div className="resume__training">
        <Fade right>
          <h3 className="resume__training__title">Formation</h3>
          <article className="resume__training__article">
            <h4 className="resume__training__article__title">Titre Professionnel de Développeur Web et Web Mobile</h4>
            <p className="resume__training__article__description">Certification inscrite au RNCP (Répertoire National de la Certification Professionnelle) de développeur web et web mobile de niveau 5 au barème européen, équivalent à Bac + 2.</p>
          </article>
          <article className="resume__training__article">
            <h4 className="resume__training__article__title">Certificat Opquast</h4>
            <p className="resume__training__article__description">Certification de maitrise qualité et d'acessibilité web. Diplôme obtenu avec un niveau Avancé (885/1000).</p>
          </article>
          <article className="resume__training__article">
            <h4 className="resume__training__article__title">Ecole O'Clock</h4>
            <p className="resume__training__article__description">Une formation en téléprésentiel - Labelisée Grande Ecole du Numérique. 700 heures intensives : 3 mois de socle (HTML5/CSS3/Javascript) 1 mois de spécialisation (ReactJS) et 1 mois de projet en autonomie. Passage du titre professionnel Développeur Web / Mobile Niveau III en cours.</p>
          </article>
        </Fade>
      </div>
      <div className="resume__links">
        <a className="resume__links__link" href={ResumeLink} target="blank">
          <button className="resume__links__button" type="button">Télécharger mon CV</button>
        </a>
      </div>
    </div>
  );
};

export default Resume;