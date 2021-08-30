import React from 'react';
import styled from 'styled-components';
import BackgroundImg from '../../assets/faq-header.jpg';

const Head = () => (
  <Background />
);

export default Head;

const Background = styled.div`
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  min-height: 225px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    min-height: 100px;
  }
`;
