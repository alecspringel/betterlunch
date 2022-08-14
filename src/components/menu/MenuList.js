import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import MenuItem from './MenuItem';
import MENU_DATA from '../../data/menu';

const MenuList = ({ data }) => {
  const menuItems = useStaticQuery(graphql`
  query allMenuItemsQuery {
    allContentfulMenuItem {
    nodes {
      title
      vegetarian
      glutenFree
      image {
        gatsbyImageData
        title
      }
    }
  }
  }
`);
  console.log(menuItems);
  // allContentfulMenuItem.nodes[0].image.gatsbyImageData
  return (
    <Section>
      <Background className="flex-row">
        {menuItems.allContentfulMenuItem.nodes.map((node) => <MenuItem image={node.image.gatsbyImageData} />)}
      </Background>
    </Section>
  );
};

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
