import React from "react"
import styled from "styled-components"
import Orange from "../../assets/orange-whole.svg"

const Blurb = () => {
  return (
    <section className="bg-secondary text-center">
      <Content>
        <OrangeSvg src={Orange} alt="BetterLunch orange logo" />
        <HeadingH6 className="text-bold">What is BetterLunch?</HeadingH6>
        <BlurbP className="p-large">
          BetterLunch offers a large rotating menu that offers something for
          everyone. From pasta spirals, to a garden salad, or even a ricotta
          bake—if we don’t have it on our menu this week, it will be on there
          next week
        </BlurbP>
      </Content>
    </section>
  )
}

export default Blurb

const Content = styled.div`
  padding: 80px 20px;
`

const OrangeSvg = styled.img`
  height: 4rem;
`

const HeadingH6 = styled.h6`
  margin: 10px 0;
`

const BlurbP = styled.p`
  max-width: ${props => props.maxWidth};
  margin: auto;
`
