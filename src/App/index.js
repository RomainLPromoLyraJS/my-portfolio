// == Package imports
import React from 'react';
import { Route } from 'react-router-dom';

// == Local imports
// Components
import Header from '../Header';
import Home from '../Home';
import About from '../About';
import Resume from '../Resume';
import Projects from '../Projects';
import Contact from '../Contact';
import Footer from '../Footer';

const App = () => {
  return (
    <div className="App">

      <Header />

      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/resume'>
        <Resume />
      </Route>
      <Route exact path='/projects'>
        <Projects />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>

      <Footer />

    </div>
  );
}

export default App;
