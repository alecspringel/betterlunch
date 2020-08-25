import React from "react"
import styled from "styled-components"
import MainImg from "../../assets/food-items.png"

const ForYou = () => {
  return (
    <section className="bg-secondary">
      <Flex className="flex padded-section wrapper">
        <TextFlex className="flex-1">
          <h3 className="margin-bottom">
            But Most Importantly, <HideBreak />
            Made For You
          </h3>
          <p className="text-bold margin-bottom text-orange p-large">
            300+ Menu Combinations, Vegan &amp; Gluten-free Options, and Variety
            of Portion Sizes
          </p>
          <MaxWidthP className="p-large">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd
          </MaxWidthP>
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
  text-align: center;
  @media (min-width: 56.25rem) {
    flex-direction: row;
    text-align: left;
  }
`

const TextFlex = styled.div`
  flex: 1;
  margin-top: 1.25rem;
  @media (min-width: 56.25rem) {
    margin-top: 0;
  }
`

const LargeImg = styled.img`
  width: 87%;
  @media (min-width: 43.4375rem) {
    height: 100%;
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
