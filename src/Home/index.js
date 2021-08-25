//Import React and packages
import React from 'react';
import Fade from 'react-reveal/Fade';

//Import Local datas
import MyPicture from '../assets/img/photo-romain01.jpg';

const Home = () => {



  return (
    <div className="home">
      <Fade top>
        <h2 className="home__title">Romain Lafosse</h2>
        <h3 className="home__title__description">Développeur web</h3>
      </Fade>
      <div className="home__title__specialisation">
        <div className="home__title__specialisation__content">
          <Fade bottom>
            <h1 className="home__title__specialisation__content__text">Développeur Javascript Fullstack spécialisé en ReactJS.</h1>
          </Fade>
        </div>
        <div className="home__title__specialisation__content__img">
          <img className="home__title__specialisation__content__img__picture" src={MyPicture} alt="Romain Lafosse Développeur" />
        </div>

      </div>
    </div>
  );
};

export default Home;