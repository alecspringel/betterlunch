import React from 'react';
import styled from 'styled-components';
import Orange from '../../assets/orange-whole.svg';
import FlexibleIcon from '../../assets/flexible-icons.svg';
import ForYouIcon from '../../assets/for-you-icons.svg';
import FreshIcon from '../../assets/fresh-icons.svg';
import Button from '../shared/Button';

const Blurb = () => (
  <section className="text-center">
    <Content className="wrapper">
      <h3 className="text-bold margin-bottom">What is Better Lunch?</h3>
      <BlurbP className="p-large text-narrow">
        Better Lunch serves made from scratch lunches in the Southern Nevada Valley,
        catering to all types of diets and appetites.
      </BlurbP>
      <FlexIcons>
        <Container>
          <Icons src={FlexibleIcon} alt="Better Lunch orange logo" />
          <p className="text-bold margin-bottom p-large mont">
            Flexible Ordering
          </p>
          <ConfinedP className="p-large">
            Pick the days your child wants Better Lunch
          </ConfinedP>
        </Container>
        <Container>
          <Icons src={ForYouIcon} alt="Better Lunch orange logo" />
          <p className="text-bold margin-bottom p-large mont">Made For You</p>
          <ConfinedP className="p-large">
            Customize and pick your favorite meals
          </ConfinedP>
        </Container>
        <Container>
          <Icons src={FreshIcon} alt="Better Lunch orange logo" />
          <p className="text-bold margin-bottom p-large mont">Always Fresh</p>
          <ConfinedP className="p-large">
            We will prepare and deliver it the same day
          </ConfinedP>
        </Container>
      </FlexIcons>
      <Button className="wide-btn primary-btn" style={{ marginTop: 80 }} to="about-us">
        Learn More
      </Button>
    </Content>
  </section>
);

export default Blurb;

const Content = styled.div`
  overflow: visible;
  position: relative;
  padding: 9rem 2.5rem;
`;

const Icons = styled.img`
  height: 8rem;
  @media (min-width: 59.375rem) {
    height: 13rem;
  }
`;

const BlurbP = styled.p`
  margin: auto;
`;

const FlexIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 5rem;
  @media (min-width: 49.0625rem) {
    flex-direction: row;
  }
`;

const Container = styled.div`
  margin: 2rem 0.625rem;
  @media (min-width: 49.0625rem) {
    margin: 0 0.625rem;
  }
`;

const ConfinedP = styled.p`
  max-width: 23.125rem;
  margin: auto;
`;
