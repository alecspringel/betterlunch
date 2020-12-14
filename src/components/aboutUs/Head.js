import React from "react"
import styled from "styled-components"
import CornerOrange from "../../assets/corner-orange-bottomright.svg"
import Pear from "../../assets/pear.svg"
import Divider from "../general/Divider"
import Button from "../general/Button"
import BackgroundImg from "../../assets/about-head.jpg"

const Head = () => {
  return (
    <Flex>
      <TextWrapper>
        <Heading>
          Real Delicious Meals,
          <br /> Made Fresh
        </Heading>
        <Button className="primary-btn margin-t20">Do Something</Button>
      </TextWrapper>
    </Flex>
  )
}

export default Head

const Flex = styled.div`
  position: relative;
  display: flex;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position-y: center;
  background-size: cover;
  justify-content: flex-end;
  height: 37rem;
`

const Heading = styled.h2`
  color: #fff;
`

const TextWrapper = styled.div`
  align-self: center;
  margin-right: 50px;
`
