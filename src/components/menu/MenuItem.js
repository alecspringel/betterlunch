import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import GlutenFreeImg from '../../assets/gluten-free.svg';
import VegetarianImg from '../../assets/vegetarian.svg'

function MenuItem({ image, data }) {
  const fetchedImage = getImage(image);
  return (
    <Card>
      <GatsbyImage image={fetchedImage} style={{ objectFit: 'cover', borderRadius: "6px 6px 0 0" }} />
      <DescriptionDiv>
        <p className="text-bold mont">{data?.title}{data.glutenfree && <Icon src={GlutenFreeImg} />}{data.vegetarian && <Icon src={VegetarianImg} />}</p>
      </DescriptionDiv>
    </Card>
  );
}

export default MenuItem;

const Card = styled.article`
  /* position: relative;
  width: 250px;
  min-height: 237px;
  text-align: center; */
  position: relative;
  width: 250px;
  border: 2px solid #ececec;
  min-height: 237px;
  text-align: center;
  background: white;
  border-radius: 7px;
`;

const DescriptionDiv = styled.div`
  padding: 10px 15px;
`;

const Icon = styled.img`
  width: 14px;
  height: 14px;
  margin: 0 10px;
  vertical-align: middle;
`