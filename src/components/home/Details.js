import React from "react"
import styled from "styled-components"
import Pear from "../../assets/pear.svg"
import Orange from "../../assets/orange-whole.svg"
import DetailHead from "./DetailHead"

const Details = () => {
  return (
    <section className="padded-section" style={{ overflow: "hidden" }}>
      <DetailHead />
      <FlexContainer>
        <BackgroundImg
          style={{ zIndex: -1 }}
          src={require("../../assets/home-about-yogurt.jpg")}
          alt="Yogurt Parfait"
        />
        <Description className="flex-1">
          <PearSvg src={Pear} alt="Pear fruit illustration" />
          <h3 className="margin-bottom">Did we mention fresh?</h3>
          <p className="text-bold p-large text-orange margin-bottom">
            Meals made fresh daily
          </p>
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
        <Description className="flex-1">
          <OrangeSvg src={Orange} alt="Orange fruit illustration" />
          <h3 className="margin-bottom">Better and easier</h3>
          <p className="text-bold p-large text-orange margin-bottom">
            Order online ahead of time
          </p>
          <p className="margin-bottom">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet
          </p>
        </Description>
        <BackgroundImg
          src={require("../../assets/home-order-online.png")}
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
  margin: 30px auto;
  align-items: center;
  max-width: 80rem;
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
  background-color: #fff;
  margin: 0 20px;
  padding: 30px;
  height: fit-content;
  box-shadow: 1px 1px 6px 1px #00000038;
  position: relative;
  border-radius: 3px;
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
