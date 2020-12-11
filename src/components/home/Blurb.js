import React from "react"
import styled from "styled-components"
import Orange from "../../assets/orange-whole.svg"
import FlexibleIcon from "../../assets/flexible-icons.svg"
import ForYouIcon from "../../assets/for-you-icons.svg"
import FreshIcon from "../../assets/fresh-icons.svg"
import Button from "../general/Button"

const Blurb = () => {
  return (
    <section className="text-center">
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
            <p className="text-bold margin-bottom p-large mont">
              Flexible Ordering
            </p>
            <ConfinedP>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed{" "}
            </ConfinedP>
          </Container>
          <Container>
            <Icons src={ForYouIcon} alt="BetterLunch orange logo" />
            <p className="text-bold margin-bottom p-large mont">Made For You</p>
            <ConfinedP>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed{" "}
            </ConfinedP>
          </Container>
          <Container>
            <Icons src={FreshIcon} alt="BetterLunch orange logo" />
            <p className="text-bold margin-bottom p-large mont">Always Fresh</p>
            <ConfinedP>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed{" "}
            </ConfinedP>
          </Container>
        </FlexIcons>
        <Button className="wide-btn primary-btn" style={{ marginTop: 80 }}>
          Learn More
        </Button>
      </Content>
    </section>
  )
}

export default Blurb

const Content = styled.div`
  overflow: visible;
  position: relative;
  padding: 9rem 2.5rem;
`

const Icons = styled.img`
  height: 8rem;
  @media (min-width: 59.375rem) {
    height: 13rem;
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

const ConfinedP = styled.p`
  max-width: 23.125rem;
  margin: auto;
`
