import React from 'react';
import styled from 'styled-components';
import Footer from '../footer';
import backgroundImg from '../../assets/contact-bg.jpg';
import phone from '../../assets/phone.svg';
import mail from '../../assets/mail.svg';
import questionMark from '../../assets/question-mark.svg';
import Divider from '../general/Divider';

const Head = () => (
  <FlexSection>
    <Background>
      <Content className="bg-secondary">
        <h3>Contact Us</h3>
        <Divider />
        <p className="margin-bottom p-large">
          Need some help? Contact us by phone, email, or send a message below
          and we'll get back to you as soon as possible.
        </p>
        <FlexOptions>
          <ContactOption href="tel:702-431-4463" className="text-orange">
            <Icon src={phone} />
            +1 (702) 431-4463
          </ContactOption>
          <ContactOption
            href="mailto: hello@mybetterlunch.com"
            className="text-orange"
          >
            <Icon src={mail} />
            hello@mybetterlunch.com
          </ContactOption>
          <ContactOption className="text-orange">
            <Icon src={questionMark} />
            FAQ
          </ContactOption>
        </FlexOptions>
      </Content>
    </Background>
    <Footer />
  </FlexSection>
);

export default Head;

const FlexSection = styled.section`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 3.75rem);
`;

const Background = styled.div`
  flex: 1;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  min-height: 565px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 90%;
  box-shadow: 1px 1px 6px 1px #00000038;
  border-radius: 3px;
  padding: 20px;

  @media (min-width: 65.625rem) {
    width: 50%;
    margin: auto;
  }
`;

const FlexOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactOption = styled.a`
  background: #fff;
  border: 1px solid #d9d9d9;
  padding: 5px;
  margin: 5px 0;
  border-radius: 3px;
  height: 3rem;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Icon = styled.img`
  max-height: 1.5rem;
  max-width: 1.5rem;
  margin: 0 15px;
`;
