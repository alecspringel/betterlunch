import React from "react";
import styled from "styled-components";
import Button from "./Button";

const SignUp = () => {
  return (
    <SignUpForm>
      <input
        type="email"
        placeholder="hello@mybetterlunch.com"
        className="input-primary flex-1"
      />
      <Spacing />
      <Button label="Learn More" />
    </SignUpForm>
  );
};

export default SignUp;

const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 65.625rem) {
    flex-direction: row;
  }
`;

const Spacing = styled.div`
  flex: 0 0 10px;
`;
