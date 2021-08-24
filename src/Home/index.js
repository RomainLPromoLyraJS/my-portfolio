import React from 'react';
import Fade from 'react-reveal/Fade';

const Home = () => {

  return (
    <div className="home">
      <Fade top>
        <h2 className="home__title">Romain Lafosse</h2>
        <h3 className="home__title__description">Développeur web</h3>
      </Fade>
      <Fade bottom>
        <h1 className="home__title__specialisation">Développeur Javascript Fullstack spécialisé en ReactJS.</h1>
      </Fade>
    </div>
  );
};

export default Home;