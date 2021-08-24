// == Package imports
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// == Local imports
// styles
import './styles/index.scss';
import './styles/reset.scss';

// components
import App from '../src/App';



const rootReactElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const target = document.getElementById('root');

render(rootReactElement, target);

