import React from 'react';
import styled from 'styled-components';
import MainImg from '../../assets/about-byus-main.jpg';
import CornerOrange from '../../assets/corner-orange.svg';
import Button from '../general/Button';

const ByUs = () => (
  <section style={{ position: 'relative' }} className="bg-tan">
    <CornerOrangeIcon src={CornerOrange} alt="orange fruit icon" />
    <Flex className="flex-row padded-section wrapper">
      <TextFlex className="flex-col justify">
        <h4 className="margin-bottom">
          Real Delicious Meals,
          {' '}
          <HideBreak />
          Made By Us
        </h4>
        <p className="text-bold margin-bottom text-orange p-large">
          Meals are prepared and delivered by our full-time, 30+ kitchen staff
        </p>
        <MaxWidthP className="p-large">
          Our kitchen staff prepare hundreds of meals every day, and deliver them
          fresh to your child&apos;s school. Every meal is made to order, and always delivered fresh.
          Still have any questions about our program? Take a look at our frequently asked questions!
        </MaxWidthP>
        <div className="margin-t20">
          <Button
            className="button primary-btn wide-btn"
            to="/faq"
          >
            FAQ
          </Button>
        </div>
      </TextFlex>
      <ImageWrapper className="flex-1">
        <LargeImg className="shadow" src={MainImg} />
      </ImageWrapper>
    </Flex>
  </section>
);

export default ByUs;

const Flex = styled.div`
  flex-direction: column-reverse;
  margin: auto;
  @media (min-width: 56.25rem) {
    flex-direction: row;
  }
`;

const TextFlex = styled.div`
  flex: 1;
  margin-top: 1.25rem;
  z-index: 2;
  padding-right: 0;
  @media (min-width: 56.25rem) {
    margin-top: 0;
    text-align: left;
    padding-right: 30px;
  }
`;

const LargeImg = styled.img`
  width: 100%;
  /* @media (min-width: 43.4375rem) {
    width: 87%;
  } */
`;

const ImageWrapper = styled.div`
  text-align: center;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const HideBreak = styled.br`
  @media (max-width: 56.25rem) {
    display: none;
  }
  @media (min-width: 91.25rem) {
    display: none;
  }
`;

const MaxWidthP = styled.p`
  max-width: 46.875rem;
`;

const CornerOrangeIcon = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 274px;
`;
