// src/assets/Inicio.jsx

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Carousel from './Carousel';
import Footer from './Footer'; // Importa el componente Footer

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

const Inicio = () => {
  return (
    <Container>
      <Header>
        <Logo src="https://scontent.flpb2-2.fna.fbcdn.net/v/t39.30808-6/384997084_700008262150540_431852375973985678_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=NiioasfkP5IQ7kNvgEWCYmg&_nc_zt=23&_nc_ht=scontent.flpb2-2.fna&_nc_gid=AGameSs2DSFgY0kYmd4-j0R&oh=00_AYCooYvQK9V2npw6caSMG92DTE7_39banASWV7ZTcpArQA&oe=67447A05" alt="logo" />
        <Title>Te Ofrecemos sabores que desearás probar una y otra vez</Title>
        <ButtonContainer>
        <Button to="/menu">Menú</Button>
          <Button to="/pedir-aqui">Pedir Aquí</Button>
          <Button to="/atencion-y-reclamos">Atención y Reclamos</Button>
        </ButtonContainer>
      </Header>
      <Content>
        <Carousel /> {/* Aquí se inserta el carrusel */}
      </Content>
      <Footer /> {/* Aquí se inserta el footer */}
    </Container>
  );
};

export default Inicio;