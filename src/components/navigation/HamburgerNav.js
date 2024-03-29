import React from 'react';
import styled from 'styled-components';
import Hamburger from '../../assets/hamburger.svg';

const HamburgerNav = (props) => (
  <NavButton
    className="mobile-nav"
    onClick={() => props.toggleNav(!props.isOpen)}
  >
    <Icon src={Hamburger} alt="Hamburger/mobile navigation icon" />
  </NavButton>
);

export default HamburgerNav;

const NavButton = styled.div`
  position: relative;
`;

const Icon = styled.img`
  vertical-align: middle;
`;
