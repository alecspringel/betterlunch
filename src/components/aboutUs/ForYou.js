import React from "react"
import styled from "styled-components"
import MainImg from "../../assets/food-icons.png"

const ForYou = () => {
  return (
    <section className="bg-secondary">
      <Flex className="flex padded-section wrapper">
        <TextFlex className="flex-1">
          <h3>
            But Most Importantly, Made{" "}
            <span className="text-orange">For You</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd
          </p>
        </TextFlex>
        <ImageWrapper className="flex-1">
          <LargeImg src={MainImg} />
        </ImageWrapper>
      </Flex>
    </section>
  )
}

export default ForYou

const Flex = styled.div`
  flex-direction: column-reverse;
  margin: auto;
  @media (min-width: 43.4375rem) {
    flex-direction: row;
  }
`

const TextFlex = styled.div`
  flex: 1;
  margin-top: 1.25rem;
  @media (min-width: 43.4375rem) {
    margin-top: 0;
  }
`

const LargeImg = styled.img`
  width: 100%;
  @media (min-width: 43.4375rem) {
    height: 100%;
    width: auto;
  }
`

const ImageWrapper = styled.div`
  text-align: center;
  position: relative;
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
