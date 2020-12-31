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
      <div className="flex-1"></div>
      <div className="flex-1 flex-row align justify">
        <TextWrapper>
          <Heading>
            Real Delicious Meals,
            <br /> Made Fresh
          </Heading>
          <p className="p-large text-white margin-t10">
            Lorem ipsum dolor sit amet, consetetur sadipscing{" "}
          </p>
          <Button className="primary-btn margin-t20">Do Something</Button>
        </TextWrapper>
      </div>
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
`
