import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const dietaryInfo = (data) => {
  if (data.vegetarian && data.glutenfree) {
    return "VEG + GF"
  } else if (data.vegetarian) {
    return "VEG"
  } else if (data.glutenfree) {
    return "GF"
  } else {
    return null
  }
}

function MenuItem({ image, data }) {
  const fetchedImage = getImage(image);
  const dietaryText = dietaryInfo(data);
  return (
    <Card>
      <GatsbyImage image={fetchedImage} style={{ objectFit: 'cover', borderRadius: "6px 6px 0 0" }} />
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