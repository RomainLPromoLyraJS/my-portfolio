/* eslint-disable react/jsx-no-target-blank */
//Import React and packages
import React from 'react';
import Fade from 'react-reveal/Fade';

import ResumeLink from '../assets/resume/consultant-developpeur-RL-2023.pdf';

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
            <h4 className="resume__skills__lists__subtitle">MS Office 365</h4>
            <ul className="resume__skills__lists__list">
              <li className="resume__skills__lists__list__element">Power Apps</li>
              <li className="resume__skills__lists__list__element">Power Automate</li>
              <li className="resume__skills__lists__list__element">SharePoint</li>
              <li className="resume__skills__lists__list__element">PowerPoint</li>
            </ul>
          </Fade>
        </div>
        <div className="resume__skills__lists">
          <Fade bottom>
            <h4 className="resume__skills__lists__subtitle">Développement</h4>
            <ul className="resume__skills__lists__list">
              <li className="resume__skills__lists__list__element">HTML / CSS</li>
              <li className="resume__skills__lists__list__element">Javascript / React</li>
              <li className="resume__skills__lists__list__element">NodeJS / ExpressJS</li>
              <li className="resume__skills__lists__list__element">PostgreSQL / SQLite</li>
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
          <h4 className="resume__experience__article__title">Consultant Power Platform en alternance (Exakis Nelite)</h4>
            <p className="resume__experience__article__description">Alternance me formant sur les différents logiciels de la Power Platform (Power Apps applications Canvas, Power Automate pour la création de flux et SharePoint pour les sites web et bases de données). Plusieurs applications internes créées afin de monter en compétences. J’ai ensuite travaillé activement sur de nombreux projets clients : Michelin : Développement de plusieurs applications Canvas, flows et base de données. Legrand : Création d’application suivie d’une évolution (v.2.0) de l’application fonctionnelle. Analyse du chiffrage des coûts potentiels des évolutions. Sytral : Suivi complet d’un projet (POC – Réunions chez le client – Formation sur plusieurs semaines du client au logiciel SharePoint). Relation directe auprès de tous ces clients importants et montée en compétences sur la gestion de ces projets.</p>
            <h4 className="resume__experience__article__title">Application web : La compagne des étoiles</h4>
            <p className="resume__experience__article__description">Développer un site web e-commerce de bougies et autres produits faits main. J’ai géré seul l’intégralité du projet. Front-end : HTML,CSS, Javascript, React et SASS. Back-end : NodeJS / ExpressJS et SQLite concernant la base de données. Outils : Git, Github, GitFlow et Postman</p>
            <h4 className="resume__experience__article__title">Apothéose O'clock : Projet Outsiders</h4>
            <p className="resume__experience__article__description">Développer une plateforme regroupant des personnes souhaitant pratiquer des sports outdoor en partageant les frais de transport. J'ai occupé le poste de Scrum Master et Développeur Front pour ce projet. Technologies utilisées pour le front : HTML, CSS, Javascript, React, Redux. Technologies utilisées pour le back : NodeJS, PostgreSQL, Json Web Token, Bcrypt.</p>
            <a className="resume__experience__article__link" href="https://www.youtube.com/watch?v=CSQhjBBMLcw&t=2505s" target="_blank">présentation youtube du projet Outsiders</a>
          </article>
        </Fade>
      </div>
      <div className="resume__training">
        <Fade right>
          <h3 className="resume__training__title">Formations</h3>
          <article className="resume__training__article">
            <h4 className="resume__training__article__title">Titre Professionnel de Concepteur Développeur d'Application</h4>
            <p className="resume__training__article__description">Certification de concepteur / développeur d’application de niveau 6 (Bac +3/4).</p>
          </article>
          <article className="resume__training__article">
            <h4 className="resume__training__article__title">Titre Professionnel de Développeur Web et Web Mobile</h4>
            <p className="resume__training__article__description">Certification inscrite au RNCP (Répertoire National de la Certification Professionnelle) de développeur web et web mobile de niveau 5 au barème européen (Bac + 2).</p>
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