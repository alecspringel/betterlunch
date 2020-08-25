import React from "react"
import styled from "styled-components"
import MainImg from "../../assets/about-fresh-salad.jpg"
import foodBackground from "../../assets/food-icon-background-topright.png"

const Fresh = () => {
  return (
    <section style={{ position: "relative" }}>
      <BackgroundIcons src={foodBackground} />
      <Flex className="flex padded-section wrapper">
        <ImageWrapper className="flex-1">
          <LargeImg className="shadow" src={MainImg} />
        </ImageWrapper>
        <TextFlex className="flex-1">
          <TextWrapper>
            <h3 className="margin-bottom">
              Real Delicious Meals,
              <HideBreak /> Made Fresh
            </h3>
            <p className="text-bold margin-bottom text-orange p-large">
              Never any high-fructose corn syrups, nitrates, or preservatives
            </p>
            <MaxWidthP className="p-large">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd
            </MaxWidthP>
          </TextWrapper>
        </TextFlex>
      </Flex>
    </section>
  )
}

export default Fresh

const Flex = styled.div`
  flex-direction: column;
  margin: auto;
  @media (min-width: 56.25rem) {
    flex-direction: row;
  }
`

const TextWrapper = styled.div`
  background: #ffffff61;
  width: fit-content;
  display: inline-block;
`

const TextFlex = styled.div`
  z-index: 1;
  flex: 1;
  margin-top: 1.25rem;
  text-align: center;
  @media (min-width: 56.25rem) {
    margin-top: 0;
    text-align: left;
  }
`

const LargeImg = styled.img`
  width: 100%;
  @media (min-width: 43.4375rem) {
    width: 87%;
  }
`

const SmallImg = styled.img`
  width: 100%;
`

const ImageWrapper = styled.div`
  text-align: center;
`

const ImgBackground = styled.div`
  display: none;
  padding: 5px;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30%;
  @media (min-width: 43.4375rem) {
    display: block;
  }
`
const HideBreak = styled.br`
  @media (max-width: 56.25rem) {
    display: none;
  }
  @media (min-width: 91.25rem) {
    display: none;
  }
`

const MaxWidthP = styled.p`
  max-width: 46.875rem;
`

const BackgroundIcons = styled.img`
  position: absolute;
  padding: 10px;
  width: 100%;
  right: 0;
  border-bottom-left-radius: 0;
  max-width: 30rem;
  top: 0;
  display: none;
  @media (min-width: 56.25rem) {
    display: block;
    width: 30%;
  }
`
