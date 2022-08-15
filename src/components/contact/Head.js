import React from 'react';
import styled from 'styled-components';
import Footer from '../footer';
import phone from '../../assets/phone.svg';
import mail from '../../assets/mail.svg';
import ContactCard from './ContactCard';
import Button from '../shared/Button';
import BackgroundImg from '../../assets/faq-header.jpg';

const Head = () => (
  <>
    <FlexSection>
      <HeadDivWrapper />
    </FlexSection>
    <div>
      <ContactOptions>
        <ContactCard
          iconPath={mail}
          heading="Email"
          description="Our staff will typically respond to emails within one day."
          actionText="hello@mybetterlunch.com"
          href="mailto: hello@mybetterlunch.com"
        />
        <ContactCard
          iconPath={phone}
          heading="Talk With Us"
          description="We are available by phone Monday - Friday, 7AM to 2PM."
          actionText="+1 (702) 431-4463"
          href="tel:702-431-4463"
        />
      </ContactOptions>
    </div>
    <section className="text-center" style={{ marginBottom: 40, padding: 20 }}>
      <h5>Check out our frequently asked questions!</h5>
      <Button to="/faq" className="primary-btn" style={{ margin: '30px 0 20px 0' }}>Visit FAQ</Button>
    </section>
    <Footer />
  </>
);

export default Head;

const FlexSection = styled.section`
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  min-height: 225px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    min-height: 100px;
  }
`;

// Keeps header text on left half of header
const HeadDivWrapper = styled.div`
  flex: 1;
  padding: 40px;
  @media (max-width: 625px) {
    flex: 8;
  }
`;

const ContactOptions = styled.section`
  display: flex;
  position: relative;
  top: -35px;
  width: fit-content;
  margin: auto;
  justify-content: center;
  @media (max-width: 625px) {
    flex-wrap: wrap;
  }
`;
