import React from "react"
import styled from "styled-components"
import MainImg from "../../assets/about-byus-main.jpg"
import SecondaryImg from "../../assets/about-byus-secondary.jpg"
import Button from "../general/Button"

const ByUs = () => {
  return (
    <section style={{ position: "relative" }} className="bg-tan">
      <Flex className="flex-row padded-section wrapper">
        <TextFlex className="flex-col justify">
          <h3 className="margin-bottom">
            Real Delicious Meals, <HideBreak />
            Made By Us
          </h3>
          <p className="text-bold margin-bottom text-orange p-large">
            Meals are prepared and delivered by our full-time, 30+ kitchen staff
          </p>
          <MaxWidthP className="p-large">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd
          </MaxWidthP>
          <p className="margin-t20">Have questions about our program?</p>
          <div className="margin-t20">
            <Button
              className="button primary-btn"
              style={{ width: 200, marginRight: 10 }}
            >
              FAQ
            </Button>
          </div>
        </TextFlex>
        <ImageWrapper className="flex-1">
          <LargeImg className="shadow" src={MainImg} />
        </ImageWrapper>
      </Flex>
    </section>
  )
}

export default ByUs

const Flex = styled.div`
  flex-direction: column-reverse;
  margin: auto;
  @media (min-width: 56.25rem) {
    flex-direction: row;
  }
`

const TextFlex = styled.div`
  flex: 1;
  margin-top: 1.25rem;
  text-align: center;
  z-index: 2;
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

const ImageWrapper = styled.div`
  text-align: center;
  position: relative;
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
  left: 0;
  border-bottom-left-radius: 0;
  max-width: 30rem;
  top: 0;
  display: none;
  @media (min-width: 56.25rem) {
    display: block;
    width: 30%;
  }
`
