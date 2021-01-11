import React from "react"
import styled from "styled-components"
import BackgroundImg from "../../assets/about-footer.jpg"
import Button from "../general/Button"

const Footer = () => {
  return (
    <Flex>
      <div className="flex-1 flex-row align justify">
        <TextWrapper>
          <Heading>
            Let's Make Lunch Better,
            <br /> Together
          </Heading>
          <p className="p-large text-white margin-t10">
            Lorem ipsum dolor sit amet, consetetur sadipscing{" "}
          </p>
          <Button className="primary-btn margin-t20">Do Something</Button>
        </TextWrapper>
      </div>
      <div className="flex-1"></div>
    </Flex>
  )
}

export default Footer

const Flex = styled.div`
  position: relative;
  display: flex;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position-y: top;
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
