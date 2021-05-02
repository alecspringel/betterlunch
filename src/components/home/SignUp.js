import React from "react"
import styled from "styled-components"
import EmailInput from "../general/Emailnput"
import HeartLunchSvg from "../../assets/heart-lunch.svg"
import Button from "../general/Button"

const SignUp = () => {
  return (
    <SectionWrapper className="bg-tan">
      <div
        className="wrapper flex-col align justify"
        style={{ width: "100%", maxWidth: 700, textAlign: "center" }}
      >
        <Icon src={HeartLunchSvg} />
        <h5 className="margin-b20">See why parents love BetterLunch</h5>
        <p
          className="p-large text-center space-text"
          style={{ maxWidth: 800, marginBottom: 40 }}
        >
          BetterLunch is always adding new items to the menu and serving up new
          opportunities in our community. Join the newsletter to stay up to date
          on all we offer.
        </p>
        <SignUpWrapper>
          <input
            type="email"
            placeholder="hello@mybetterlunch.com"
            className="input-primary flex-1"
            style={{ width: "100%" }}
          />
          <SubscribeBtn className="primary-btn">Subscribe</SubscribeBtn>
        </SignUpWrapper>
        <p className="margin-t20">
          Ready to place your first order?{" "}
          <a
            className="text-underline text-orange"
            style={{ cursor: "pointer" }}
          >
            Sign up here.
          </a>
        </p>
      </div>
    </SectionWrapper>
  )
}

export default SignUp

const SectionWrapper = styled.section`
  padding: 7rem 2.5rem;
`

const Icon = styled.img`
  height: 60px;
  margin-bottom: 40px;
`

const SignUpWrapper = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 638px) {
    display: block;
  }
`
const SubscribeBtn = styled(Button)`
  width: auto;
  margin-left: 10px;
  min-width: 170px;
  @media (max-width: 638px) {
    margin-top: 10px;
    margin-left: 0;
    width: 100%;
  }
`
