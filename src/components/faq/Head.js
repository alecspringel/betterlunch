import React from "react"
import styled from "styled-components"
import BackgroundImg from "../../assets/faq-header.jpg"
const Head = () => {
  return (
    <Background>
      <SearchDiv>
        <h4>Frequently Asked Questions</h4>
        <input
          placeholder="How do I place an order?"
          className="margin-tb20 input-primary"
          style={{ width: "70%", marginTop: 30 }}
        />
        <p>
          Didn't find what you were looking for?{" "}
          <span className="text-orange">Ask us a question.</span>
        </p>
      </SearchDiv>
    </Background>
  )
}

export default Head

const Background = styled.div`
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  min-height: 565px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SearchDiv = styled.div`
  background: #fafafa;
  width: 80%;
  max-width: 1000px;
  box-shadow: 0px 2px 2px #a2a2a2;
  text-align: center;
  padding: 30px 20px;
`
