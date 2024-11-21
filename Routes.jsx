import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './assets/Inicio'; // Verifica que esta ruta sea correcta
import Menu from './assets/Menu'; // Importa el componente Menu

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/menu" element={<Menu />} /> {/* Agrega la ruta para Menu */}
        {/* Otras rutas aquí */}
      </Routes>
    </Router>
  );
};

export default RoutesComponent;