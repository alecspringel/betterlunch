import React from 'react';
import styled from 'styled-components';
import SaladBg from '../../assets/home-menu.jpg';
import Button from '../general/Button';
import MenuSvg from '../../assets/menu.svg';
// import StartingAtPriceCircle from '../general/StartingAtPriceCircle';

const OurMenu = () => (
  <SectionWrapper className="flex-row">
    <div className="wrapper" style={{ width: '100%' }}>
      <TextWrapper className="flex-row align">
        <div>
          <MenuIcon src={MenuSvg} />
          <div className="inline-b">
            <h3 className="inline-b text-white">Options For Everyone</h3>
          </div>
          <p
            className="margin-t20 space-text p-large text-white"
            style={{ maxWidth: 900 }}
          >
            Our menu features a variety of sizes and options for dietary restrictions,
            and options that will appeal to all! These offerings are updated each month, so be
            sure to check back for our latest meals.
          </p>
          <Button
            to="/menu"
            className="primary-btn"
            style={{
              width: 200,
              justifySelf: 'flex-end',
              marginTop: 30,
              position: 'relative',
            }}
          >
            {/* <StartingAtPriceCircle top={"-104%"} right={"-24%"} /> */}
            View Our Menu
          </Button>
        </div>
      </TextWrapper>
    </div>
  </SectionWrapper>
);

export default OurMenu;

const SectionWrapper = styled.section`
  background-image: linear-gradient(
      90deg,
      rgb(0 0 0 / 80%) 0%,
      rgb(0 0 0 / 45%) 51%,
      rgb(0 0 0 / 30%) 100%
    ),
    url(${SaladBg});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 11rem 5.5rem;
  background-position: center;
  @media (max-width: 700px) {
    padding: 8rem 1.5rem;
  }
`;

const TextWrapper = styled.div`
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const MenuIcon = styled.img`
  display: block;
  margin-bottom: 20px;
`;
