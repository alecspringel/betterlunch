import React from "react"
import OrderImg from "../../assets/desktop-mobile.png"
import CustomizeImg from "../../assets/custom-food.png"
import WorkingImg from "../../assets/working-inkitchen.png"
import styled from "styled-components"

const HowItWorks = () => {
  return (
    <section className="text-center padded-section">
      <h4 className="text-orange">HOW IT WORKS</h4>
      <p className="p-large margin-t10">Change Text</p>
      <Wrapper className="flex-col justify">
        <div className="flex-row align">
          <LeftHalf>
            <Image src={OrderImg} />
          </LeftHalf>
          <RightHalf>
            <TextWrapper>
              <h5>1. Sign in online or with mobile</h5>
              <p className="p-large margin-t10">
                Proudly serving children in the Las Vegas Valley since 2011,
                Better Lunch has delivered over 2 million fresh lunches to date.
              </p>
            </TextWrapper>
          </RightHalf>
        </div>
        <div className="flex-row align">
          <LeftHalf>
            <LeftTextWrapper>
              <h5>2. Customize &amp; choose your meals</h5>
              <p className="p-large margin-t10">
                Proudly serving children in the Las Vegas Valley since 2011,
                Better Lunch has delivered over 2 million fresh lunches to date.
              </p>
            </LeftTextWrapper>
          </LeftHalf>
          <RightHalf>
            <Image src={CustomizeImg} />
          </RightHalf>
        </div>
        <div className="flex-row align">
          <LeftHalf>
            <Image src={WorkingImg} />
          </LeftHalf>
          <RightHalf>
            <TextWrapper>
              <h5>3. We'll prepare &amp; deliver</h5>
              <p className="p-large margin-t10">
                Proudly serving children in the Las Vegas Valley since 2011,
                Better Lunch has delivered over 2 million fresh lunches to date.
              </p>
            </TextWrapper>
          </RightHalf>
        </div>
      </Wrapper>
    </section>
  )
}

export default HowItWorks

const Wrapper = styled.div`
  padding: 40px 0;
`

const Image = styled.img`
  max-height: 350px;
  max-width: 500px;
`

const TextWrapper = styled.div`
  max-width: 500px;
  text-align: left;
`

const LeftTextWrapper = styled(TextWrapper)`
  margin-left: auto;
`

const HalfDiv = styled.div`
  flex: 1;
  margin: 0 20px;
`

const RightHalf = styled(HalfDiv)`
  text-align: left;
`

const LeftHalf = styled(HalfDiv)`
  text-align: right;
`
