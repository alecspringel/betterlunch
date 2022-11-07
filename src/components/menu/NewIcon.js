import React from 'react';
import styled from 'styled-components';

const NewIcon = () => (
  <InfoWrapper>
    <Icon>
      NEW
    </Icon>
  </InfoWrapper>
);

export default NewIcon;

const InfoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  padding: 6px;
  column-gap: 5px;
`;

const Icon = styled.div`
  background: rgb(246 147 83 / 80%);
  color: #fff;
  border-radius: 50px;
  font-family: "Montserrat";
  font-weight: 600;
  /* padding: 5px 6px; */
  min-width: 28px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 60px;
`;
