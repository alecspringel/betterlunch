import React from "react"
import styled from "styled-components"

const MenuItem = ({ img, title, description }) => {
  return (
    <Wrapper>
      <FoodImg src={img} />
      <TextWrapper>
        <Title className="p-large text-bold">{title}</Title>
        <p>{description}</p>
      </TextWrapper>
    </Wrapper>
  )
}

export default MenuItem

const Wrapper = styled.div`
  width: 285px;
  box-shadow: 0px 3px 6px #c3c3c3;
  margin: 15px;
`

const TextWrapper = styled.div`
  padding: 15px;
  text-align: left;
`

const FoodImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 170px;
`

const Title = styled.p`
  margin-bottom: 5px;
`
