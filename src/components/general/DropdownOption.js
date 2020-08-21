import React from "react";
import styled from "styled-components";

const DropdownOption = (props) => {
  return (
    <Option {...props}>
      <Label>{props.label}</Label>
    </Option>
  );
};

export default DropdownOption;

const Option = styled.div`
  cursor: pointer;
  padding: 10px;
  min-width: 90px;
  white-space: nowrap;
  width: 100%;
  &:hover {
    background: #f0f0f0;
  }
`;

const Label = styled.h6`
  color: #333333;
  margin-left: 10px;
  margin-right: 10px;
`;
