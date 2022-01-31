import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import AppRoutes from './App/routes';

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);
