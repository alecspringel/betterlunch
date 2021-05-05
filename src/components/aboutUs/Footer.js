import React from 'react';
import styled from 'styled-components';
import BackgroundImg from '../../assets/about-footer.jpg';
import { useScreenSize } from '../contexts/ScreenSize';
import Button from '../general/Button';

const Footer = () => {
  const screen = useScreenSize();
  return (
    <Flex>
      <div className="flex-1 flex-row align justify">
        <TextWrapper>
          <Heading>
            Let&apos;s Make Lunch Better, Together
          </Heading>
          <p className="p-large text-white margin-t10">
            Explore all of the options we have to offer on our menu
          </p>
          <Button
            className="primary-btn margin-t20"
            keepWidth
            to="/menu"
            style={{ width: 130 }}
          >
            Our Menu

          </Button>
        </TextWrapper>
      </div>
      {screen.lg && <div className="flex-1" />}
    </Flex>
  );
};

export default Footer;

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
  letter-spacing: 2px;
`;

const TextWrapper = styled.div`
  align-self: center;
`;
