import React from "react"
import styled from "styled-components"
import Divider from "../general/Divider"
import FeaturedItems from "./FeaturedItems"
import foodBackground from "../../assets/food-icon-background.png"

const FeaturedMenu = props => {
  return (
    <Background className="bg-secondary text-center">
      <BackgroundIcons src={foodBackground} />

      <Content>
        <h2 className="margin-bottom">Featured This Month</h2>
        <p className="margin-bottom text-narrow">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et.
        </p>
        <FeaturedItems />
        <WideButton className="wide-btn button-primary">
          View Our Menu
        </WideButton>
      </Content>
    </Background>
  )
}

export default FeaturedMenu

const Background = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e8e8e8;
  position: relative;
`

const Content = styled.div`
  width: auto;
  margin: auto;
  margin: 20px;
  padding: 40px;
  min-width: 0;
  background: #fafafa87;
  z-index: 1;
`

const WideButton = styled.a`
  margin-top: 3rem;
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
