import React from 'react';
import ReactDOM from 'react-dom';
import { Panel } from './panel/Panel';
import './css/index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Panel></Panel>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
