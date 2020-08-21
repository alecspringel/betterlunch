import React from "react"
import styled from "styled-components"

const PHOTOS = [
  {
    path: require("../../static/assets/featured-food/beef-lasagna.jpg"),
    title: "Beef Lasagna",
  },
  {
    path: require("../../static/assets/featured-food/blt-salad.jpg"),
    title: "Beef Lasagna",
  },
  {
    path: require("../../static/assets/featured-food/chicken-korma.jpg"),
    title: "Chicken Korma",
  },
  {
    path: require("../../static/assets/featured-food/taco-salad.jpg"),
    title: "Taco Salad",
  },
  {
    path: require("../../static/assets/featured-food/bbq-chicken.jpg"),
    title: "BBQ Chicken",
  },
  {
    path: require("../../static/assets/featured-food/teryaki-bowl.jpg"),
    title: "Chicken Teryaki Bowl",
  },
  {
    path: require("../../static/assets/featured-food/burrito-bowl.jpg"),
    title: "Chicken Korma",
  },
  {
    path: require("../../static/assets/featured-food/bbq-sandwich.jpg"),
    title: "BBQ Chicken Sandwich",
  },
]
const FeaturedItems = () => {
  return (
    <div>
      <FlexContainer className="hide-scrollbar">
        {PHOTOS.map(photo => (
          <FoodItem>
            <FoodImg src={photo.path} alt={photo.title} />
            <Caption>
              <FoodTitle className="text-center text-bold">
                {photo.title}
              </FoodTitle>
            </Caption>
          </FoodItem>
        ))}
      </FlexContainer>
    </div>
  )
}

export default FeaturedItems

const FlexContainer = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-top: 30px;
  @media (min-width: 67.1875rem) {
    flex-wrap: wrap;
  }
`

const FoodItem = styled.li`
  flex: 0 0 12.8125rem;
  display: inline-block;
  margin: 0 1rem 2rem 1rem;
`

const FoodTitle = styled.p`
  color: #777777;
`

const FoodImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 9rem;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 1px #0000001f;
`

const Caption = styled.div`
  display: flex;
  justify-content: center;
  height: 2.8125rem;
  padding: 0.625rem;
`
