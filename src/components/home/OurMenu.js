import React from "react"
import styled from "styled-components"
import SaladBg from "../../assets/home-options.jpg"
import Button from "../general/Button"
import Divider from "../general/Divider"

const OurMenu = () => {
  return (
    <SectionWrapper className="flex-row">
      <div className="wrapper" style={{ width: "100%" }}>
        <TextWrapper className="flex-row align justify">
          <div>
            <div className="inline-b">
              <h3 className="inline-b text-white">Our Menu</h3>
            </div>
            <p
              className="margin-t20 space-text p-large text-white"
              style={{ maxWidth: 900 }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            </p>
            <Button
              className="primary-btn"
              style={{ width: 200, justifySelf: "flex-end", marginTop: 50 }}
            >
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
      to left,
      rgba(245, 246, 252, 0),
      rgba(0, 0, 0, 0.73)
    ),
    url(${SaladBg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  padding: 15rem 2.5rem;
`

const TextWrapper = styled.div`
  @media (max-width: 700px) {
    width: 100%;
    text-align: center;
  }
`

const Image = styled.img`
  border-radius: 4px;
  box-shadow: 0 5px 15px rgb(148 148 148 / 20%);
  width: 50%;
`
