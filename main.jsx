// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesComponent from './Routes';
import './index.css'; // Si tienes estilos globales
import 'bootstrap/dist/css/bootstrap.min.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesComponent />
  </React.StrictMode>
);