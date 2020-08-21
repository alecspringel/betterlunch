import React from "react"
import styled from "styled-components"
import Divider from "../general/Divider"
import FeaturedItems from "./FeaturedItems"
import Button from "../general/Button"
import BackgroundImg from "../../static/assets/home-featured.jpg"

const FeaturedMenu = props => {
  return (
    <Background>
      <Modal>
        <h2 className="margin-bottom">Featured This Month</h2>
        <p className="margin-bottom">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et.
        </p>
        <Divider />
        <FeaturedItems />
        <div className="text-center">
          <Button label="View Our Menu" />
        </div>
      </Modal>
    </Background>
  )
}

export default FeaturedMenu

const Background = styled.section`
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: top;
  background-size: cover;
  min-height: 854px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Modal = styled.div`
  max-width: 65rem;
  width: auto;
  margin: auto;
  background: #fff;
  border-radius: 3px;
  margin: 20px;
  padding: 40px;
  box-shadow: 1px 1px 6px 1px #00000038;
  min-width: 0;
`
