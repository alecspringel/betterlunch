import React from "react"
import styled from "styled-components"

const PHOTOS = [
  {
    path: require("../../assets/featured-food/beef-lasagna.jpg"),
    title: "Beef Lasagna",
  },
  {
    path: require("../../assets/featured-food/blt-salad.jpg"),
    title: "Beef Lasagna",
  },
  {
    path: require("../../assets/featured-food/chicken-korma.jpg"),
    title: "Chicken Korma",
  },
  {
    path: require("../../assets/featured-food/taco-salad.jpg"),
    title: "Taco Salad",
  },
  // {
  //   path: require("../../assets/featured-food/bbq-chicken.jpg"),
  //   title: "BBQ Chicken",
  // },
  // {
  //   path: require("../../assets/featured-food/teryaki-bowl.jpg"),
  //   title: "Chicken Teryaki Bowl",
  // },
  // {
  //   path: require("../../assets/featured-food/burrito-bowl.jpg"),
  //   title: "Chicken Korma",
  // },
  // {
  //   path: require("../../assets/featured-food/bbq-sandwich.jpg"),
  //   title: "BBQ Chicken Sandwich",
  // },
]
const FeaturedItems = () => {
  return (
    <FlexContainer className="hide-scrollbar wrapper">
      {PHOTOS.map(photo => (
        <FoodItem className="shadow">
          <FoodImg src={photo.path} alt={photo.title} />
          <Caption>
            <p className="text-center">{photo.title}</p>
          </Caption>
        </FoodItem>
      ))}
    </FlexContainer>
  )
}

export default FeaturedItems

const FlexContainer = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-top: 3rem;
  @media (min-width: 62.5rem) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const FoodItem = styled.li`
  flex: 0 0 12rem;
  display: inline-block;
  margin: 0.5rem 1rem;
  background: #fff;
  @media (min-width: 62.5rem) {
    flex: 0 0 22%;
  }
`

const FoodImg = styled.img`
  object-fit: cover;
  width: 100%;
`

const Caption = styled.div`
  display: flex;
  justify-content: center;
  height: 2.8125rem;
  padding: 0.625rem;
`
