import React from "react"
import styled from "styled-components"
import SaladBg from "../../assets/home-menu.jpg"
import Button from "../general/Button"
import MenuSvg from "../../assets/menu.svg"
import StartingAtPriceCircle from "../general/StartingAtPriceCircle"

const OurMenu = () => {
  return (
    <SectionWrapper className="flex-row">
      <div className="wrapper" style={{ width: "100%" }}>
        <TextWrapper className="flex-row align">
          <div>
            <MenuIcon src={MenuSvg} />
            <div className="inline-b">
              <h3 className="inline-b text-white">Options For Everyone</h3>
            </div>
            <h6
              className="margin-t20 space-text lato text-white"
              style={{ maxWidth: 900 }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            </h6>
            <Button
              className="primary-btn"
              style={{
                width: 200,
                justifySelf: "flex-end",
                marginTop: 70,
                position: "relative",
              }}
            >
              {/* <StartingAtPriceCircle top={"-104%"} right={"-24%"} /> */}
              View Our Menu
            </Button>
          </div>
        </TextWrapper>
      </div>
      {/* <Image src={TeryakiImg} /> */}
    </SectionWrapper>
  )
}

export default OurMenu

const SectionWrapper = styled.section`
  background-image: linear-gradient(
      90deg,
      rgb(0 0 0 / 50%) 0%,
      rgb(0 0 0 / 28%) 51%,
      rgb(0 0 0 / 4%) 100%
    ),
    url(${SaladBg});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 15rem 5.5rem;
  background-position: center;
  @media (max-width: 700px) {
    padding: 15rem 1.5rem;
  }
`

const TextWrapper = styled.div`
  @media (max-width: 700px) {
    width: 100%;
    text-align: center;
  }
`

const MenuIcon = styled.img`
  display: block;
  margin-bottom: 20px;
  @media (max-width: 700px) {
    margin: 20px auto;
  }
`
