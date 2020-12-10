import React from "react"
import styled from "styled-components"
import Divider from "../general/Divider"
import SignUp from "../general/SignUp"
import WaveSVG from "../../assets/home-waves.svg"
import HeroImg from "../../assets/cropped-header.png"
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
          <ImageBackground src={WaveSVG} />
          <SideImg src={HeroImg} />
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
  min-height: 565px;
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
  min-height: 565px;
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
`

const MessageBox = styled.div`
  width: 500px;
  margin: auto;
  background: #fff;
  border-radius: 3px;
  margin: 20px;
  padding: 50px;
  flex-shrink: 0;
`

const SchoolWrapper = styled.section`
  height: calc(25vh - 60px);
  overflow: hidden;
  padding: 37px 0;
  box-shadow: 0 0 6px #00000016;
`
