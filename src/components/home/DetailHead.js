import React from "react"
import styled from "styled-components"

const DetailHead = () => {
  return (
    <Content className="text-center">
      <h2 className="margin-bottom">Redefining Hot Lunch</h2>
      <p className="text-narrow">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et.
      </p>
      <FlexStats>
        <StatBubble className="shadow">
          <p className="text-orange text-bold p-large">
            2,000,000+
            <br />
            Lunches Made
          </p>
        </StatBubble>
        <StatBubble className="shadow">
          <p className="text-orange text-bold p-large">
            300+
            <br />
            Menu Choices
          </p>
        </StatBubble>
        <StatBubble className="shadow">
          <p className="text-orange text-bold p-large">
            Gluten-free &amp;
            <br />
            Vegetarian Options
          </p>
        </StatBubble>
        <StatBubble className="shadow">
          <p className="text-orange text-bold p-large">
            Made fresh,
            <br />
            Delivered fresh
          </p>
        </StatBubble>
      </FlexStats>
    </Content>
  )
}

export default DetailHead

const Content = styled.div``

const FlexStats = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 34rem;
  margin: 3rem auto;
  flex-wrap: wrap;
  @media (min-width: 73.125rem) {
    max-width: 80rem;
  }
`

const StatBubble = styled.div`
  height: 80px;
  width: 250px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`
