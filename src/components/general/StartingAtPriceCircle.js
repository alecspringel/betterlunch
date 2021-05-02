import React from 'react';
import styled from 'styled-components';
import PriceImg from '../../assets/startingat-price.png'

const StartingAtPriceCircle = ({ top, bottom, left, right }) => {
  return (
    <Circle className="text-blue flex-col" style={{ top, bottom, left, right }} src={PriceImg} />
  );
};

export default StartingAtPriceCircle;

const Circle = styled.img`
  position: absolute;
  height: 72px;
`