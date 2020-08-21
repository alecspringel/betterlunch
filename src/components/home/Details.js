import React from "react"
import styled from "styled-components"
import Pear from "../../static/assets/pear.svg"
import Orange from "../../static/assets/orange-whole.svg"

const Details = () => {
  return (
    <section style={{ overflow: "hidden" }}>
      <FlexContainer>
        <BackgroundImg
          style={{ zIndex: -1 }}
          src={require("../../static/assets/home-about-yogurt.jpg")}
          alt="Yogurt Parfait"
        />
        <Description className="flex-1" color="#F8F9FA">
          <PearSvg src={Pear} alt="Pear fruit illustration" />
          <h2 className="margin-bottom">Did we mention fresh?</h2>
          <Tagline className="text-bold p-large" bg="#D9E1EB">
            Meals made fresh daily
          </Tagline>
          <p className="margin-bottom">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet
          </p>
        </Description>
      </FlexContainer>
      <FlexContainerReverse>
        <Description className="flex-1" color="#FEEDD7">
          <OrangeSvg src={Orange} alt="Orange fruit illustration" />
          <h2 className="margin-bottom">Better and easier</h2>
          <Tagline className="text-bold p-large" bg="#F69353" color="#fff">
            Order online ahead of time
          </Tagline>
          <p className="margin-bottom">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet
          </p>
        </Description>
        <BackgroundImg
          src={require("../../static/assets/home-order-online.png")}
          alt="Ordering platform on mobile and laptop devices"
        />
      </FlexContainerReverse>
    </section>
  )
}

export default Details

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 124.125rem;
  margin: 30px auto;
  align-items: center;
  @media (min-width: 53.125rem) {
    flex-direction: row;
  }
`

const FlexContainerReverse = styled(FlexContainer)`
  flex-direction: column-reverse;
  @media (min-width: 53.125rem) {
    flex-direction: row;
  }
`

const BackgroundImg = styled.img`
  min-height: 100%;
  max-width: 70%;
  object-fit: contain;
  margin: auto;
  @media (min-width: 44.375rem) {
    max-height: none;
    max-width: 56%;
  }
`

const Description = styled.div`
  background-color: ${props => props.color};
  margin: 0 20px;
  padding: 30px;
  height: fit-content;
  box-shadow: 1px 1px 6px 1px #00000038;
  position: relative;
  border-radius: 3px;
`

const Tagline = styled.p`
  background-color: ${props => props.bg};
  padding: 0.3rem;
  display: inline-block;
  margin-bottom: 20px;
  color: ${props => props.color};
`

const PearSvg = styled.img`
  position: absolute;
  z-index: -1;
  bottom: 0px;
  right: -43%;
  transform: scaleX(-1);
  @media (max-width: 61.5625rem) {
    display: none;
  }
`

const OrangeSvg = styled.img`
  position: absolute;
  z-index: -1;
  bottom: 143px;
  left: -35%;
  @media (max-width: 61.5625rem) {
    display: none;
  }
`
