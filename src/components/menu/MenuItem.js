import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const dietaryInfo = (data) => {
  if (data.vegetarian && data.glutenfree) {
    return 'VEG + GF';
  } if (data.vegetarian) {
    return 'VEG';
  } if (data.glutenfree) {
    return 'GF';
  }
  return null;
};

function MenuItem({ image, data }) {
  const fetchedImage = getImage(image);
  const dietaryText = dietaryInfo(data);
  return (
    <Card>
      <GatsbyImage
        image={fetchedImage}
        style={{
          objectFit: 'cover', borderRadius: '6px 6px 0 0', width: '100%', height: '100%',
        }}
      />
      <DescriptionDiv>
        <p className="text-bold mont">
          {data?.title}
          {dietaryText && <span style={{ marginLeft: 5 }} className="text-bold text-orange inline-block">{dietaryText}</span>}
        </p>
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
  width: 100%;
  border: 2px solid #ececec;
  min-height: 260px;
  text-align: center;
  background: white;
  border-radius: 7px;
  display: flex;
  flex-direction: column;

  @media (max-width: 573px) {
    width: 100%;
  }
  @media (min-width: 450px) and (max-width: 573px) {
    min-height: 350px;
  }
`;

const DescriptionDiv = styled.div`
  padding: 10px;
  height: 56px;
`;
