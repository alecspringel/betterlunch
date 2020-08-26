import React from "react"
import styled from "styled-components"
import Orange from "../../assets/orange-whole.svg"
import FlexibleIcon from "../../assets/flexible-icons.svg"
import ForYouIcon from "../../assets/for-you-icons.svg"
import FreshIcon from "../../assets/fresh-icons.svg"

const Blurb = () => {
  return (
    <section className="text-center shadow">
      <Content className="wrapper">
        <h3 className="text-bold margin-bottom">What is BetterLunch?</h3>
        <BlurbP className="p-large text-narrow">
          BetterLunch offers a large rotating menu that offers something for
          everyone. From pasta spirals, to a garden salad, or even a ricotta
          bake—if we don’t have it on our menu this week, it will be on there
          next week
        </BlurbP>
        <FlexIcons>
          <Container>
            <Icons src={FlexibleIcon} alt="BetterLunch orange logo" />
            <h6 className="text-bold margin-bottom">Flexible Ordering</h6>
            <ConfinedP>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed{" "}
            </ConfinedP>
          </Container>
          <Container>
            <Icons src={ForYouIcon} alt="BetterLunch orange logo" />
            <h6 className="text-bold margin-bottom">Made For You</h6>
            <ConfinedP>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed{" "}
            </ConfinedP>
          </Container>
          <Container>
            <Icons src={FreshIcon} alt="BetterLunch orange logo" />
            <h6 className="text-bold margin-bottom">Always Fresh</h6>
            <ConfinedP>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed{" "}
            </ConfinedP>
          </Container>
        </FlexIcons>
        <LearnMoreBtn className="wide-btn button-primary">
          Learn More
        </LearnMoreBtn>
      </Content>
    </section>
  )
}

export default Blurb

const Content = styled.div`
  padding: 80px 40px;
  box-shadow: 0px 4px 7px 3px #00000008;
  overflow: visible;
  position: relative;
`

const Icons = styled.img`
  height: 8rem;
  @media (min-width: 59.375rem) {
    height: 10rem;
  }
`

const BlurbP = styled.p`
  margin: auto;
`

const FlexIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 5rem;
  @media (min-width: 49.0625rem) {
    flex-direction: row;
  }
`

const Container = styled.div`
  margin: 2rem 0.625rem;
  @media (min-width: 49.0625rem) {
    margin: 0 0.625rem;
  }
`

const LearnMoreBtn = styled.div`
  display: inline-block;
  margin-top: 5rem;
`

const ConfinedP = styled.p`
  max-width: 23.125rem;
`
