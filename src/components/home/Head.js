import React from "react"
import styled from "styled-components"
import Divider from "../general/Divider"
import SignUp from "../general/SignUp"
import heroImg from "../../assets/test.jpg"

const Head = () => {
  return (
    <BackgroundImg>
      <MessageBox>
        <MainTitle>
          Hot Lunch, <br />
          Made Better.
        </MainTitle>
        <Divider />
        <h6 className="margin-bottom">
          Proudly serving children in the Las Vegas Valley since 2011, Better
          Lunch has delivered over{" "}
          <span className="text-bold">2 million fresh lunches to date.</span>
        </h6>
        <SignUp />
      </MessageBox>
    </BackgroundImg>
  )
}

export default Head

const BackgroundImg = styled.section`
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  min-height: 565px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MessageBox = styled.div`
  width: 700px;
  margin: auto;
  background: #fff;
  border-radius: 3px;
  margin: 20px;
  padding: 20px;
`

const MainTitle = styled.h1``
