import React from 'react';
import styled from 'styled-components';
import Button from '../general/Button';
import BackgroundImg from '../../assets/about-head.jpg';
import { useScreenSize } from '../contexts/ScreenSize';

const Head = () => {
  const screen = useScreenSize();
  return (
    <Flex>
      {screen.lg && <div className="flex-1" />}
      <div className="flex-1 flex-row align justify">
        <TextWrapper>
          <Heading>
            Real Delicious Meals,
            <br />
            {' '}
            Made Fresh
          </Heading>
          <p className="p-large text-white margin-t10">
            Get started with your first meal today
          </p>
          <Button className="primary-btn margin-t20" keepWidth style={{ width: 130 }}>Sign Up Here</Button>
        </TextWrapper>
      </div>
    </Flex>
  );
};

export default Head;

const Flex = styled.div`
  position: relative;
  display: flex;
  background-image: linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%), url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position-y: center;
  background-size: cover;
  justify-content: flex-end;
  height: 37rem;
  padding: 0 1.5rem;
`;

const Heading = styled.h2`
  color: #fff;
`;

const TextWrapper = styled.div`
  align-self: center;
`;
