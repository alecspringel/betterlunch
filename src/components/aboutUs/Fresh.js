import React from "react"
import styled from "styled-components"
import MainImg from "../../assets/about-fresh-salad.jpg"

const Fresh = () => {
  return (
    <section className="">
      <Flex className="flex padded-section wrapper">
        <ImageWrapper className="flex-1">
          <LargeImg className="shadow" src={MainImg} />
        </ImageWrapper>
        <TextFlex className="flex-1">
          <h3>
            Real Delicious Meals, Made{" "}
            <span className="text-orange">Fresh</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd
          </p>
        </TextFlex>
      </Flex>
    </section>
  )
}

export default Fresh

const Flex = styled.div`
  flex-direction: column;
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
    width: 87%;
  }
`

const SmallImg = styled.img`
  width: 100%;
`

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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
