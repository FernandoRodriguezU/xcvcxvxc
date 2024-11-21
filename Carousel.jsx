// src/assets/Carousel.jsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  height: 100vh; /* Asegura que ocupe toda la altura del viewport */
`;

const CarouselImage = styled.img`
  width: 100%; /* Ocupa todo el ancho */
  height: 100%; /* Ocupa toda la altura */
  object-fit: cover; /* Mantiene la proporción y cubre el contenedor */
`;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        <div>
          <CarouselImage src="https://img.freepik.com/foto-gratis/ilustracion-fondo-abstracto-formas-diseno-multicolor-generadas-ia_188544-15582.jpg" alt="Imagen 1" />
        </div>
        <div>
          <CarouselImage src="https://via.placeholder.com/800x400/33FF57/FFFFFF?text=Imagen+2" alt="Imagen 2" />
        </div>
        <div>
          <CarouselImage src="https://via.placeholder.com/800x400/3357FF/FFFFFF?text=Imagen+3" alt="Imagen 3" />
        </div>
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;