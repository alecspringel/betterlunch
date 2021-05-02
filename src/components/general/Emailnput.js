import React from "react"
import styled from "styled-components"
import Button from "./Button"

const EmailInput = () => {
  return (
    <SignUpForm>
      <input
        type="email"
        placeholder="hello@mybetterlunch.com"
        className="input-primary flex-1"
        style={{ width: "100%" }}
      />
      <Spacing />
      <Button className="primary-btn" style={{ width: "100%" }}>
        Subscribe
      </Button>
    </SignUpForm>
  )
}

export default EmailInput

const SignUpForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 65.625rem) {
    flex-direction: row;
  }
`

const Spacing = styled.div`
  flex: 0 0 10px;
`
