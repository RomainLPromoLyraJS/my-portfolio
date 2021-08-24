/* eslint-disable jsx-a11y/img-redundant-alt */
//Import React and packages
import React from 'react';
import Fade from 'react-reveal/Fade';

//Import Local datas
import MyPicture from '../assets/img/photo-romain02.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about__maintitle">
        <Fade top>
          <h1 className="about__maintitle__title">Qui suis-je ?</h1>
          <h3 className="about__maintitle__title__description">Mon parcours</h3>
        </Fade>
      </div>
      <div className="about__section">
        <div className="about__section__article">
          <Fade left>
            <article className="about__section__article__text">Je me présente, Romain, jeune curieux de l'informatique et développeur web fullstack JS. Après avoir passé une dizaine d'années dans le monde de la boulangerie où j'ai appris la rigueur, le sérieux du travail et les horaires exigeantes, presque autant de temps dans l'univers de l'art dramatique qui m'ont permis de m'adapter à chaque situation, je me suis reconverti dans le développement Web avec tout autant de passion et d'envie. Curieux, fort de proposition et à l'aise à l'oral, je me ferais un plaisir de permettre le développement et l'accroissement de votre entreprise de part ma contribution.
            </article>
          </Fade>
        </div>
        <div className="about__section__img">
          <Fade right>
            <img className="about__section__img__picture" src={MyPicture} alt="photo d'un jeune développeur en herbe" />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;