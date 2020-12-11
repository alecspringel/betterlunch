import React from "react"
import styled from "styled-components"
import TeryakiImg from "../../assets/beef-teryaki.jpg"
import Button from "../general/Button"
const OurMenu = () => {
  return (
    <SectionWrapper className="wrapper flex-row">
      <div
        className="flex-row align justify"
        style={{ width: "50%", marginRight: 50 }}
      >
        <div>
          <h3>Our Menu</h3>
          <p
            className="p-large margin-t20 space-text"
            style={{ maxWidth: 800 }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et.
          </p>
          <Button
            className="primary-btn margin-t20"
            style={{ width: 200, justifySelf: "flex-end" }}
          >
            View Our Menu
          </Button>
        </div>
      </div>
      <Image src={TeryakiImg} />
    </SectionWrapper>
  )
}

export default OurMenu

const SectionWrapper = styled.section`
  padding: 7rem 2.5rem;
  max-width: 86rem;
`

const Image = styled.img`
  border-radius: 4px;
  box-shadow: 0 5px 15px rgb(148 148 148 / 20%);
  width: 50%;
`
