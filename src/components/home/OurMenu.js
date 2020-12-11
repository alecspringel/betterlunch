import React from "react"
import styled from "styled-components"
import SaladBg from "../../assets/salad-fullwidth.jpg"
import Button from "../general/Button"
import Divider from "../general/Divider"

const OurMenu = () => {
  return (
    <SectionWrapper className="flex-row">
      <div className="wrapper" style={{ width: "100%" }}>
        <div
          className="flex-row align justify"
          style={{ width: "46%", marginRight: 100 }}
        >
          <div>
            <div className="inline-b">
              <h3 className="inline-b">Our Menu</h3>
              <Divider style={{ width: "100%" }} />
            </div>
            <h6
              className="margin-t20 space-text lato"
              style={{ maxWidth: 900 }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            </h6>
            <Button
              className="primary-btn"
              style={{ width: 200, justifySelf: "flex-end", marginTop: 50 }}
            >
              View Our Menu
            </Button>
          </div>
        </div>
      </div>
      {/* <Image src={TeryakiImg} /> */}
    </SectionWrapper>
  )
}

export default OurMenu

const SectionWrapper = styled.section`
  background-image: url(${SaladBg});
  background-repeat: no-repeat;
  background-position-y: center;
  background-size: cover;
  padding: 15rem 2.5rem;
`

const Image = styled.img`
  border-radius: 4px;
  box-shadow: 0 5px 15px rgb(148 148 148 / 20%);
  width: 50%;
`
