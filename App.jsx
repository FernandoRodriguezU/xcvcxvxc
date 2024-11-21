// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './assets/Inicio';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* Otras rutas pueden ir aquí */}
      </Routes>
    </Router>
  );
};

export default App;