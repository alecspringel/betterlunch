import React from "react"
import styled from "styled-components"
import CornerOrange from "../../assets/corner-orange-bottomright.svg"
import Divider from "../general/Divider"
import Button from "../general/Button"
import BackgroundImg from "../../assets/about-header.jpg"

const Head = () => {
  return (
    <Flex>
      <Image className="flex-1" />
      <Background className="bg-secondary flex-1">
        <Orange src={CornerOrange} alt="Decorative orange slice" />
      </Background>
      <FlexOverlay>
        <Content>
          <h2>About BetterLunch</h2>
          <Divider />
          <h6 className="margin-bottom">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores{" "}
          </h6>
          <Button label="Ask Us A Question" />
        </Content>
      </FlexOverlay>
    </Flex>
  )
}

export default Head

const Flex = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  @media (min-width: 65.625rem) {
    flex-direction: row;
  }
`

const Image = styled.div`
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  min-height: 565px;
`

const Orange = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 21rem;
`

const Background = styled.div`
  position: relative;
  min-height: 450px;
  @media (min-width: 38.4375rem) {
    min-height: 200px;
  }
`

const FlexOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  background: #fff;
  width: 90%;
  margin: auto auto 5% auto;
  box-shadow: 1px 1px 6px 1px #00000038;
  border-radius: 3px;
  padding: 40px;

  @media (min-width: 65.625rem) {
    width: 50%;
    margin: auto 10% auto auto;
  }
`
