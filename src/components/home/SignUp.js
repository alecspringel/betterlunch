import React from "react"
import styled from "styled-components"
import EmailInput from "../general/Emailnput"
import HeartLunchSvg from "../../assets/heart-lunch.svg"

const SignUp = () => {
  return (
    <SectionWrapper className="bg-tan">
      <div
        className="wrapper flex-col align justify"
        style={{ width: "100%", maxWidth: 700 }}
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
        <EmailInput />
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
