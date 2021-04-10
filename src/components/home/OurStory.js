import React from "react"
import styled from "styled-components"
import ChildPhoto from "../../assets/child-eating.jpg"
import SignatureSvg from "../../assets/signature.svg"
import Divider from "../general/Divider"

const OurStory = () => {
  return (
    <section className="bg-tan" style={{ padding: "7rem 2.5rem" }}>
      <div className="wrapper flex-col justify" style={{ maxWidth: "86rem" }}>
        <h3 className="text-center">Feeding our Future</h3>
        <p
          className="text-orange margin-t10 text-center lato text-bold"
          style={{ marginBottom: 70 }}
        >
          One meal at a time
        </p>
        <Content className="flex-row">
          <ImageWrapper>
            <Image src={ChildPhoto} />
          </ImageWrapper>
          <div className="flex-1 flex-row" style={{ position: "relative" }}>
            <TextWrapper>
              <h6 className="margin-b10 text-bold">Our Promise</h6>
              <p className="p-large">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam
              </p>
              <h6 style={{ marginTop: 60 }} className="text-bold">
                Personalized Meals
              </h6>
              <p className="p-large">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam
              </p>
              <h6 style={{ marginTop: 60 }} className="text-bold">
                Always Fresh
              </h6>
              <p className="p-large">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam
              </p>
              <div className="flex-row align" style={{ marginTop: 60 }}>
                <Divider style={{ marginRight: 20 }} />
                <SignatureImg src={SignatureSvg} />
                <div className="flex-col" style={{ marginLeft: 20 }}>
                  <p className="text-bold p-large mont">Stephanie Springel</p>
                  <p className="p-large mont">Founder of BetterLunch</p>
                </div>
              </div>
            </TextWrapper>
          </div>
        </Content>
      </div>
    </section>
  )
}

export default OurStory

const Content = styled.div`
  @media (max-width: 855px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

const ImageWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`

const Image = styled.img`
  border-radius: 4px;
  width: 100%;
  box-shadow: 0 5px 15px rgb(148 142 126 / 20%);
  @media (max-width: 855px) {
    margin-bottom: 35px;
  }
`

const TextWrapper = styled.div`
  max-width: 800px;
  z-index: 1;
  margin-left: 50px;
  line-height: 35px;
`

const SignatureImg = styled.img`
  height: 50px;
`
