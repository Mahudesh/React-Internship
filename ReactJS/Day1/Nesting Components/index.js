
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyButton from './MyButton';
import MyApp from './MyApp';
import DisplayData from './DisplayData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <MyApp/>
  </React.StrictMode>
);

reportWebVitals();
