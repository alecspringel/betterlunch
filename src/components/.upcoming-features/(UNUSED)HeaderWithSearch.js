import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import BackgroundImg from '../../assets/faq-header.jpg';

const Head = () => (
  <Background>
    <SearchDiv>
      <h4>Frequently Asked Questions</h4>
      <input
        placeholder="How do I place an order?"
        className="margin-tb20 input-primary"
        style={{ width: '100%', marginTop: 30 }}
      />
      <p>
        Didn&apos;t find what you were looking for?
        <Link className="text-orange no-decoration" to="/contact"> Ask us a question</Link>
      </p>
    </SearchDiv>
  </Background>
);

export default Head;

const Background = styled.div`
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  min-height: 565px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchDiv = styled.div`
  background: #fafafa;
  width: 100%;
  margin: 0 1.5rem;
  max-width: 800px;
  box-shadow: 0px 2px 2px #a2a2a2;
  text-align: center;
  padding: 30px 20px;
`;
