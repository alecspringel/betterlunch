import React, { useState } from "react";
import styled, { css } from "styled-components";
import ClickAway from "./ClickAway";

const Dropdown = (props) => {
  const [open, toggle] = useState(false);
  return (
    <ClickAway
      style={{ display: "inline-block" }}
      onClick={() => toggle(!open)}
      onClickAway={() => toggle(false)}
      contents={
        <>
          <Wrapper>
            {props.content}
            <Options {...props} open={open}>
              {props.options}
            </Options>
          </Wrapper>
        </>
      }
    />
  );
};

export default Dropdown;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Options = styled.div`
  display: none;
  position: absolute;
  overflow: hidden;
  height: 0;
  top: 150%;
  left: 0;

  ${(props) =>
    props.open &&
    css`
      display: block;
      background: white;
      border-radius: 4px;
      padding: 10px 0;
      height: auto;
      box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.32);
    `}
`;
