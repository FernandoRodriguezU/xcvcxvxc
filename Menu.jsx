// Menu.jsx
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Body from './Body'; // Importar el nuevo componente Body
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Asegura que el contenedor ocupe toda la altura */
`;

const Header = styled.header`
  background-color: #c0392b;
  color: white;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column; /* Organiza los elementos verticalmente */
  align-items: center; /* Centra los elementos horizontalmente */
`;

const Logo = styled.img`
  position: absolute; /* Permite que el logo esté a la izquierda */
  left: 5px; /* Espaciado desde la izquierda */
  top: 5px; /* Espaciado desde la parte superior */
  width: 170px; /* Ajusta el tamaño del logo */
  height: auto; /* Mantiene la proporción de la imagen */
`;

const Title = styled.h1`
  margin: 70px 0 20px; /* Espaciado superior para separar del logo */
`;

const ButtonContainer = styled.div`
  display: flex; /* Organiza los botones en una fila */
  justify-content: center; /* Centra los botones horizontalmente */
  margin-top: 20px; /* Espaciado superior para separar del título */
  gap: 20px; /* Espacio entre los botones */
    background-color: #c0392b;
`;

const Content = styled.div`
  flex: 1; /* Permite que el contenido ocupe el espacio restante */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Cambiado para que el contenido se alinee en la parte superior */
`;

const Button = styled(NavLink)`
  background-color: #c0392b;
  color: white;
  padding: 10px 20px;
  margin: 0 10px; /* Margen horizontal para separación */
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkred;
  }
`;

const Menu = () => {
  return (
    <Container>
      <Header>
        <Logo src="" alt="logo" />
        
        <ButtonContainer>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/pedir-aqui">Pedir Aquí</NavLink>
          <NavLink to="/atencion-y-reclamos">Atención y Reclamos</NavLink>
        </ButtonContainer>
      </Header>
      <Content>
        <Body /> {/* Aquí se incluye el componente Body */}
      </Content>
      <Footer />
    </Container>
  );
};

export default Menu;