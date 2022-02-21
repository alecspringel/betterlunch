import React from 'react';
import styled from 'styled-components';
// import Select from 'react-select';
import MenuItem from './MenuItem';
import MENU_DATA from '../../data/menu';

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

const MenuList = ({ data }) => (
  <Section>
    {/* <Select options={options} /> */}
    <Background className="flex-row">
      {data.images.edges.map((image) => <MenuItem image={image.node} data={MENU_DATA[image.node.name]} />)}
    </Background>
  </Section>
);

export default MenuList;

const Background = styled.section`
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  max-width: 1200px;
  grid-gap: 26px;
  margin: auto;
  justify-content: center;
`;

const Section = styled.section`
  background: #f9f9f9;
  width: 100%;
  padding: 2.875rem 1.5rem;
`;
