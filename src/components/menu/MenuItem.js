import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

function MenuItem({ image, data }) {
  const fetchedImage = getImage(image);
  return (
    <Card>
      <GatsbyImage image={fetchedImage} style={{ objectFit: 'cover' }} />
      <DescriptionDiv>
        <p className="text-bold mont">{data?.title}</p>
      </DescriptionDiv>
    </Card>
  );
}

export default MenuItem;

const Card = styled.article`
  width: 250px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 4px 1px #00000021;
  min-height: 237px;
`;

const DescriptionDiv = styled.div`
  padding: 10px 15px;
`;
