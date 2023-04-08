import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './components/app/App';
import reportWebVitals from './assets/reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
