import React from "react"
import styled from "styled-components"
import MainImg from "../../assets/about-byus-main.jpg"
import SecondaryImg from "../../assets/about-byus-secondary.jpg"

const ByUs = () => {
  return (
    <Flex className="bg-secondary flex padded-section">
      <TextFlex className="flex-1">
        <h3>
          Real Delicious Meals, Made <span className="text-orange">By Us</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd
        </p>
      </TextFlex>
      <ImageWrapper className="flex-1">
        <LargeImg className="shadow" src={MainImg} />
        <ImgBackground className="bg-secondary">
          <SmallImg className="shadow" src={SecondaryImg} />
        </ImgBackground>
      </ImageWrapper>
    </Flex>
  )
}

export default ByUs

const Flex = styled.div`
  flex-direction: column-reverse;
  @media (min-width: 43.4375rem) {
    flex-direction: row;
  }
`

const TextFlex = styled.div`
  width: 100%;
  flex: 1;
  margin-top: 1.25rem;
  @media (min-width: 43.4375rem) {
    width: 87%;
    margin-top: 0;
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
  position: relative;
  @media (min-width: 43.4375rem) {
    height: 32vw;
  }
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
