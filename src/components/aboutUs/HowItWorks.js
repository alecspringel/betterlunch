import React from "react"
import OrderImg from "../../assets/shop-icon.svg"
import CookingImg from "../../assets/prepare-icon.svg"
import DeliverImg from "../../assets/deliver-icon.svg"
import styled from "styled-components"

const HowItWorks = () => {
  return (
    <section className="text-center padded-section">
      <h3>How it Works</h3>
      <Wrapper className="flex-row">
        <StepWrapper className="flex-1">
          <Icon
            src={OrderImg}
            alt="Desktop and mobile phone icons displaying mobile ordering"
          />
          <h6 className="text-bold">Order Online</h6>
          <DescriptionWrapper className="margin-top">
            <p>Select your favorite choices from our menu</p>
          </DescriptionWrapper>
        </StepWrapper>
        <StepWrapper className="flex-1">
          <Icon
            src={CookingImg}
            alt="Icons of a cooking pot and various ingredients"
          />
          <h6 className="text-bold">We Make It</h6>
          <DescriptionWrapper className="margin-top">
            <p>We'll prepare it fresh on the days you picked</p>
          </DescriptionWrapper>
        </StepWrapper>
        <StepWrapper className="flex-1">
          <Icon
            src={DeliverImg}
            alt="Icon of prepared lunch with food items inside"
          />
          <h6 className="text-bold">We Deliver</h6>
          <DescriptionWrapper className="margin-top">
            <p>We deliver it to your child's school!</p>
          </DescriptionWrapper>
        </StepWrapper>
      </Wrapper>
    </section>
  )
}

export default HowItWorks

const Wrapper = styled.div`
  padding: 40px 0;
  flex-direction: column;

  @media (min-width: 42.1875rem) {
    flex-direction: row;
  }
`

const Icon = styled.img`
  height: 6.9375rem;
`

const StepWrapper = styled.div`
  text-align: center;
  padding: 40px 10px 0 10px;
`

const DescriptionWrapper = styled.div`
  height: 2rem;
`
