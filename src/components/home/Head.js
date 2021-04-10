import React from "react"
import styled from "styled-components"
import Divider from "../general/Divider"
import WaveSVG from "../../assets/home-waves.svg"
import HeroImg from "../../assets/cropped-header.jpg"
import MobileHeroImg from "../../assets/home-header-mobile.jpg"
import Button from "../general/Button"
import Schools from "./Schools"

const Head = () => {
  return (
    <>
      <BackgroundImg>
        <MessageBox>
          <h1>
            Hot Lunch, <br />
            Made <span className="text-orange">Better.</span>
          </h1>
          <h6 className="margin-bottom lato margin-t20">
            Proudly serving children in the Las Vegas Valley since 2011, Better
            Lunch has delivered over{" "}
            <span className="text-bold">2 million fresh lunches to date.</span>
          </h6>
          <div className="margin-t20">
            <Button
              className="primary-btn"
              style={{ width: 130, marginRight: 15 }}
            >
              Sign Up
            </Button>
            <Button className="primary-line" style={{ width: 130 }}>
              Learn More
            </Button>
          </div>
        </MessageBox>
        <ImgDiv>
          {/* <ImageBackground src={WaveSVG} /> */}
          <SideImg src={HeroImg} />
          <MobileImg src={MobileHeroImg} />
        </ImgDiv>
      </BackgroundImg>
      <SchoolWrapper>
        <Schools />
      </SchoolWrapper>
    </>
  )
}

export default Head

const BackgroundImg = styled.section`
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`

const ImgDiv = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 75vh;
  min-height: 500px;
  @media (max-width: 855px) {
    position: absolute;
  }
`

const ImageBackground = styled.img`
  position: relative;
  height: 100%;
  align-self: stretch;
`

const SideImg = styled.img`
  height: 100%;
  min-width: 100%;
  position: absolute;
  object-fit: cover;
  left: 5%;
  top: 0;
  @media (max-width: 855px) {
    display: none;
  }
`

const MobileImg = styled.img`
  display: none;
  object-fit: cover;
  @media (max-width: 855px) {
    display: block;
    height: 100%;
    width: 100%;
  }
`

const MessageBox = styled.div`
  width: 500px;
  margin: auto;
  background: #fff;
  border-radius: 3px;
  margin: 20px;
  padding: 50px;
  flex-shrink: 0;
  z-index: 1;
  @media (max-width: 1055px) {
    flex-shrink: 1;
    padding: 0;
    h1 {
      font-size: 2.3rem;
    }
    h6 {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 855px) {
    padding: 20px;
    box-shadow: 0 3px 6px #00000016;
    border-radius: 6px;
  }
`

const SchoolWrapper = styled.section`
  height: 300px;
  overflow: hidden;
  padding: 68px 0;
  box-shadow: 0 0 6px #00000016;
`
