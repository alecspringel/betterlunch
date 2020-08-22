import React from "react"
import styled from "styled-components"
import Button from "../general/Button"
import CornerOrange from "../../assets/corner-orange.svg"
import Schools from "./Schools"
import BackgroundImg from "../../assets/home-footer.jpg"

const Contact = () => {
  return (
    <>
      <Background>
        <Modal className="white-modal text-center">
          <Orange src={CornerOrange} alt="Decorative quarter orange" />
          <h3 className="margin-bottom">
            Want BetterLunch at your <br />
            child's school?
          </h3>
          <Button label="Contact Us" />
        </Modal>
      </Background>
      <SchoolContainer>
        <Schools />
      </SchoolContainer>
    </>
  )
}

export default Contact

const Background = styled.div`
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  background-size: cover;
  min-height: 565px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = styled.div`
  width: fit-content;
  padding: 40px 60px;
  position: relative;
  margin: auto 20px;
`

const Orange = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`

const SchoolContainer = styled.div`
  padding: 20px;
  background: #fafafa;
  overflow: hidden;
  border-bottom: 1px solid #dfdfdf;
  padding: 30px 20px;
`
