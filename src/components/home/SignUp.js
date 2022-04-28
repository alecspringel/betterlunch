import React from 'react';
import styled from 'styled-components';
import HeartLunchSvg from '../../assets/heart-lunch.svg';
import Button from '../general/Button';

const SignUp = () => (
  <SectionWrapper className="bg-tan">
    <div
      className="wrapper flex-col align justify"
      style={{ width: '100%', maxWidth: 700, textAlign: 'center' }}
    >
      <Icon src={HeartLunchSvg} />
      <h5 className="margin-b20">See why parents love Better Lunch</h5>
      <p
        className="p-large text-center space-text"
        style={{ maxWidth: 800, marginBottom: 20 }}
      >
        Better Lunch is always adding new items to the menu and serving up new
        opportunities in our community. Join the newsletter to stay up to date
        on all we offer.
      </p>
      <SignUpWrapper>
        <Button
          to="https://lp.constantcontactpages.com/su/TUebgd0/betterlunch"
          className="primary-btn wide-btn"
        >
          Join Our Newsletter
        </Button>
      </SignUpWrapper>
      <p className="margin-t20">
        Ready to place your first order?
        {' '}
        <a
          className="p no-decoration text-orange"
          style={{ cursor: 'pointer' }}
          href="https://mybetterlunch.ahotlunch.com/p/register"
        >
          Sign up here
        </a>
      </p>
    </div>
  </SectionWrapper>
);

export default SignUp;

const SectionWrapper = styled.section`
  padding: 7rem 2.5rem;
`;

const Icon = styled.img`
  height: 60px;
  margin-bottom: 40px;
`;

const SignUpWrapper = styled.div`
  width: 100%;
`;
