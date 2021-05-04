import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const MenuList = ({ data }) => (
  <Background className="flex-row">
    {data.images.edges.map((item) => <MenuItem item={item.node} />)}
  </Background>
);

export default MenuList;

const Background = styled.section`
  background: #FCFCFC;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  max-width: 1200px;
  grid-gap: 20px;
  margin: auto;
  justify-content: center;
`;
