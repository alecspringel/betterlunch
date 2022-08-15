import React from 'react';
import styled from 'styled-components';
import OrderImg from '../../assets/desktop-mobile.png';
import CustomizeImg from '../../assets/custom-food.png';
import WorkingImg from '../../assets/working-inkitchen.png';

const HowItWorks = () => (
  <section className="text-center padded-section" style={{ paddingBottom: '2rem' }}>
    <h4 className="text-orange">HOW TO ORDER</h4>
    <p className="p-large margin-t10">Getting started is simple with three easy steps</p>
    <Wrapper className="flex-col justify">
      <FlexWrapper className="flex-row align">
        <LeftHalf>
          <Image src={OrderImg} className="howitworks-img" />
        </LeftHalf>
        <RightHalf>
          <TextWrapper extraSpace>
            <h6>1. Sign in online or with mobile</h6>
            <p className="p-large margin-t10">
              Sign up online or with the mobile app, and
              fill out your child&apos;s name and school.
            </p>
            <p className="margin-t20">
              Download the iPhone app
              {' '}
              <a
                href="https://apps.apple.com/ag/app/hotlunch-school-software/id1451511654"
                className="text-orange lato"
              >
                here
              </a>
            </p>
          </TextWrapper>
        </RightHalf>
      </FlexWrapper>
      <FlexWrapper className="flex-row align" reverse>
        <LeftHalf>
          <LeftTextWrapper>
            <h6>2. Customize &amp; choose your meals</h6>
            <p className="p-large margin-t10">
              Select your favorite meals from our menu and
              choose add-ons and options
            </p>
          </LeftTextWrapper>
        </LeftHalf>
        <RightHalf>
          <Image src={CustomizeImg} className="howitworks-img" />
        </RightHalf>
      </FlexWrapper>
      <FlexWrapper className="flex-row align">
        <LeftHalf>
          <Image src={WorkingImg} className="howitworks-img" />
        </LeftHalf>
        <RightHalf>
          <TextWrapper>
            <h6>3. We&apos;ll prepare &amp; deliver</h6>
            <p className="p-large margin-t10">
              On the days you selected, we&apos;ll prepare and
              deliver the meal fresh to your child
            </p>
          </TextWrapper>
        </RightHalf>
      </FlexWrapper>
    </Wrapper>
  </section>
);

export default HowItWorks;

const Wrapper = styled.div`
  padding: 40px 0;

  @media(max-width: 720px) {
    .howitworks-img {
      max-width: 330px;
    }
  }
  @media(max-width: 400px) {
    .howitworks-img {
      max-width: 100%;
    }
  }
`;

const Image = styled.img`
  max-height: 350px;
  max-width: 500px;
`;

const TextWrapper = styled.div`
  max-width: 500px;
  text-align: left;
  @media (max-width: 53.75rem) {
    text-align: center;
    margin: ${(props) => props.extraSpace && '30px'};
  }
`;

const LeftTextWrapper = styled(TextWrapper)`
  margin-left: auto;
`;

const HalfDiv = styled.div`
  flex: 1;
  @media(min-width: 720px) {
    margin: 0 20px;
  }
`;

const RightHalf = styled(HalfDiv)`
  text-align: left;
`;

const LeftHalf = styled(HalfDiv)`
  text-align: right;
`;

const FlexWrapper = styled.div`
  /* margin: 20px 0; */
  @media (max-width: 53.75rem) {
    flex-direction: ${(props) => (props.reverse ? 'column-reverse' : 'column')};
  }
`;
