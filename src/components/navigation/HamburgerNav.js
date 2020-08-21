import React from "react"
import styled from "styled-components"
import Hamburger from "../../static/assets/hamburger.svg"

const HamburgerNav = props => {
  return (
    <NavButton
      className="mobile-nav"
      onClick={() => props.toggleNav(!props.isOpen)}
    >
      <Icon src={Hamburger} />
    </NavButton>
  )
}

export default HamburgerNav

const NavButton = styled.div`
  position: relative;
`

const Icon = styled.img`
  vertical-align: middle;
`
