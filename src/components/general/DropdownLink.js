import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const DropdownLink = props => {
  return (
    <Option>
      <Link {...props} to={props.to}>
        {props.label}
      </Link>
    </Option>
  )
}

export default DropdownLink

const Option = styled.div`
  cursor: pointer;
  padding: 10px;
  min-width: 90px;
  white-space: nowrap;
  width: 100%;
  &:hover {
    background: #f0f0f0;
  }
`

const Label = styled.h6`
  color: #333333;
  margin-left: 10px;
  margin-right: 10px;
`
