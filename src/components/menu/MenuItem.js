import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

function MenuItem({ item }) {
  const image = getImage(item);
  return (
    <Card>
      <GatsbyImage image={image} style={{ objectFit: 'cover' }} />
      {item.name}
    </Card>
  );
}

export default MenuItem;

const Card = styled.article`
  width: 250px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px #00000016;
`;
