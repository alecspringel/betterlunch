import React from 'react';
import styled from 'styled-components';
import ChildPhoto from '../../assets/child-eating.jpg';
// import SignatureSvg from '../../assets/signature.svg';
import Divider from '../general/Divider';
import DotBackground from '../../assets/dot-background.svg';

const OurStory = () => (
  <Background className="bg-tan" style={{ padding: '7rem 2.5rem' }}>
    <div className="wrapper flex-col justify" style={{ maxWidth: '86rem' }}>
      <h3 className="text-center">Feeding our Future</h3>
      <p
        className="text-orange margin-t10 text-center lato text-bold"
        style={{ marginBottom: 70 }}
      >
        One meal at a time
      </p>
      <Content className="flex-row">
        <ImageWrapper>
          <Image src={ChildPhoto} />
        </ImageWrapper>
        <TextSection className="flex-1" style={{ position: 'relative' }}>
          <TextWrapper>
            <h6 className="margin-b10 text-bold">Our Promise</h6>
            <p className="p-large">
              BetterLunch is commited to serving quality meals made with
              fresh ingredients. We source locally whenever possible, and
              take no shortcuts when it comes to our food.
            </p>
            <h6 style={{ marginTop: 60 }} className="text-bold">
              Personalized Meals
            </h6>
            <p className="p-large">
              Our menu is diverse and constantly changing. We provide gluten-free
              and vegetarian options, a variety of sizes, and additional options
              to make every meal personal.
            </p>
            <h6 style={{ marginTop: 60 }} className="text-bold">
              Always Fresh
            </h6>
            <p className="p-large">
              Did we mention fresh already? Nutrition plays an important role in
              our children&apos;s ability to learn and grow—that&apos;s why we
              only put the best ingredients into our food.
            </p>
            <SignatureDiv className="align" style={{ marginTop: 60 }}>
              <SignatureDivider />
              {/* <SignatureImg src={SignatureSvg} /> */}
              <div className="flex-col" style={{ marginLeft: 20 }}>
                <p className="text-bold p-large mont">Stephanie Springel</p>
                <p className="p-large mont">Founder of BetterLunch</p>
              </div>
            </SignatureDiv>
          </TextWrapper>
        </TextSection>
      </Content>
    </div>
  </Background>
);

export default OurStory;

const Background = styled.section`
  background: url(${DotBackground});
`;

const Content = styled.div`
  @media (max-width: 855px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  @media (max-width: 855px) {
    margin: auto;
    width: 80%;
  }
`;

const Image = styled.img`
  border-radius: 4px;
  width: 100%;
  box-shadow: 0 5px 15px rgb(148 142 126 / 20%);
  @media (max-width: 855px) {
    margin-bottom: 35px;
  }
`;

const TextWrapper = styled.div`
  max-width: 800px;
  z-index: 1;
  margin-left: 50px;
  line-height: 35px;
  @media (max-width: 855px) {
    margin-left: 0;
  }
`;

const SignatureDiv = styled.div`
  display: flex;
  @media (max-width: 855px) {
    display: block;
  }
`;

const SignatureImg = styled.img`
  height: 50px;
`;

const TextSection = styled.div`
  display: flex;
  @media (max-width: 855px) {
    display: block;
  }
`;

const SignatureDivider = styled(Divider)`
  margin-right: 23px;
  @media (max-width: 855px) {
    display: block;
    margin: 53px auto;
  }
`;
