import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./navigation.css"
import NavLogo from "../../assets/branding/orange-logo-text.svg"
import OrderNowBtn from "./OrderNowBtn"
import HamburgerNav from "./HamburgerNav"
import Dropdown from "../general/Dropdown"
import DropdownLink from "../general/DropdownLink"

const Navigation = () => {
  const [isOpen, toggleNav] = useState(false)
  return (
    <NavBar isOpen={isOpen}>
      <MobileNav style={{ textAlign: "center" }}>
        <MobileDiv>
          <NavItem style={{ float: "left" }} className="hide-on-desktop ">
            <HamburgerNav toggleNav={toggleNav} isOpen={isOpen} />
          </NavItem>
        </MobileDiv>
        <FlexDiv>
          <Logo src={NavLogo} alt="BetterLunch Logo" />
        </FlexDiv>
        <RightMobile>
          <NavItem>
            <OrderNowBtn />
          </NavItem>
        </RightMobile>
      </MobileNav>
      <DropdownWrapper isOpen={isOpen}>
        <DesktopNav isOpen={isOpen}>
          <LeftNav className="dropdown-nav">
            <NavItem className="expand-nav ">
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem className="collapse-nav expand-nav ">
              <Dropdown
                content={<p style={{ fontSize: "1rem" }}>About</p>}
                options={
                  <>
                    <DropdownLink
                      to="/about-us"
                      label="About Us"
                      className="no-decoration"
                    />
                    <DropdownLink
                      to="/"
                      label="News &amp; Updates"
                      className="no-decoration"
                    />
                  </>
                }
              />
            </NavItem>
            <NavItem className="hide-on-desktop">
              <NavLink to="/about-us" className="">
                About Us
              </NavLink>
            </NavItem>
            <NavItem className="hide-on-desktop">
              <NavLink to="/" className="">
                News and Updates
              </NavLink>
            </NavItem>
            <NavItem className="expand-nav ">
              <NavLink to="/">FAQ</NavLink>
            </NavItem>
            <NavItem className="expand-nav ">
              <NavLink to="/">Contact Us</NavLink>
            </NavItem>
            <NavItem className="hide-on-desktop">
              <NavLink to="/">Menu Photos</NavLink>
            </NavItem>
          </LeftNav>
          <RightNav className="collapse-nav expand-nav">
            <NavItem className="collapse-nav expand-nav">
              <NavLink to="/">Menu Photos</NavLink>
            </NavItem>
            <NavItem className="collapse-nav expand-nav">
              <OrderNowBtn />
            </NavItem>
          </RightNav>
        </DesktopNav>
      </DropdownWrapper>
    </NavBar>
  )
}

export default Navigation

const NavBar = styled.header`
  position: fixed;
  overflow: hidden;
  z-index: 1;
  top: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  box-shadow: 0px 2px 2px 0px #0000001c;
  /* height: ${props => (props.isOpen ? "29.125rem" : "3.75rem")}; */
  
  @media (min-width: 65.625rem) {
    height: 3.75rem;
    overflow: visible;
  }
`

const DropdownWrapper = styled.div`
  height: ${props => (props.isOpen ? "20.5625rem" : "0rem")};
  transition: height 200ms ease-in-out;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  @media (min-width: 65.625rem) {
    transition: none;
    height: auto;
    overflow: visible;
  }
`

const DesktopNav = styled.nav`
  max-width: 78.125rem;
  /* height: ${props => (props.isOpen ? "20.5625rem" : "0rem")}; */
  transition: height 200ms ease-in-out;
  width: 100%;
  flex-direction: column;
  z-index: 1;
  display: flex;
  /* display: ${props => (props.isOpen ? "flex" : "none")}; */
  @media (min-width: 65.625rem) {
    transition: none;
    height: 3.75rem;
    flex-direction: row;
  }
`

const Logo = styled.img`
  margin-top: 0.25rem;
  height: 2.5rem;
`

const LeftNav = styled.ul`
  flex: 1;
  display: flex;
`

const RightNav = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  @media (min-width: 65.625rem) {
    justify-content: flex-end;
  }
`

const NavItem = styled.li`
  padding: 1rem 1.0625rem;
`

const NavLink = styled(Link)`
  text-decoration: none;
`

const MobileNav = styled.nav`
  max-width: 78.125rem;
  display: flex;
  position: relative;
  text-align: center;
  width: 100%;
  height: 3.75rem;
  list-style: none;
  align-items: center;
  @media (min-width: 65.625rem) {
    position: absolute;
  }
`

const FlexDiv = styled.div`
  flex: 1;
`

const MobileDiv = styled(FlexDiv)`
  @media (min-width: 65.625rem) {
    display: none;
  }
`

const RightMobile = styled(MobileDiv)`
  display: flex;
  justify-content: flex-end;
`
