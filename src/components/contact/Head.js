import React from 'react';
import styled from 'styled-components';
import Footer from '../footer';
import backgroundImg from '../../assets/contact-bg1.jpg';
import phone from '../../assets/phone.svg';
import mail from '../../assets/mail.svg';
import faq from '../../assets/question-answer.svg';
import Divider from '../general/Divider';
import ContactCard from './ContactCard';
import Button from '../general/Button';

const Head = () => (
  <>
    <FlexSection>
      <HeadDivWrapper>
        <TextWrapper>
          <h3 className="margin-b10">Get in Touch</h3>
          <p className="p-large margin-b20">
            Need help getting started or have a question? Our staff is available
            <span className="text-bold"> Monday - Friday, 7AM to 2PM </span>
            to answer questions or help with any issues.
          </p>
          <Divider />
        </TextWrapper>
      </HeadDivWrapper>
      <div style={{ flex: 1 }}>
        {/* <Content className="bg-secondary">
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
      </Content> */}
      </div>
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
          description="We are available by phone during our working hours."
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
  display: flex;
  flex-direction: row;
  /* height: calc(100vh - 3.75rem); */
  min-height: 300px;
  width: 100%;
  /* background: rgb(247,246,244); */
  background: rgba(247,246,244,1);
  background-image: linear-gradient(90deg, rgba(247,246,244,1) 38%, rgba(0,0,0,0) 100%), url(${backgroundImg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: 900px;
  background-position: right;
  @media (max-width: 760px) {
    background-image: linear-gradient(90deg,rgba(247,246,244,1) 38%,rgba(0,0,0,0) 196%), url(${backgroundImg});
  }
  @media (max-width: 625px) {
    background-image: linear-gradient(90deg, rgba(247,246,244,1) 45%, rgb(247 246 244 / 87%) 60%), url(${backgroundImg});
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

// Wrapper for header text
const TextWrapper = styled.div`
  margin-left: auto;
  width: fit-content;
  max-width: 444px;
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
