import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/tailwind.output.css';

import App from './components/index';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
