import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import CircleLogo from '../../assets/branding/circle-logo.svg';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';

const copyrightText = () => `© ${new Date().getFullYear()} Better Lunch`;

const Footer = () => (
  <Background>
    <Content>
      <Flex1 className="flex-1 text-center">
        <Logo src={CircleLogo} alt="Better Lunch Logo" />
      </Flex1>
      <Flex1 className="flex-1">
        <FlexCol>
          <HeadingLi>
            <Heading className="text-bold">Pages</Heading>
          </HeadingLi>
          <FootLi>
            <NavLink to="/">Home</NavLink>
          </FootLi>
          <FootLi>
            <NavLink to="/about-us">About Us</NavLink>
          </FootLi>
          <FootLi>
            <NavLink to="/contact">Contact Us</NavLink>
          </FootLi>
          <FootLi>
            <NavLink to="/faq">FAQ</NavLink>
          </FootLi>
        </FlexCol>
      </Flex1>
      <Flex1 className="flex-1">
        <FlexCol>
          <HeadingLi>
            <Heading className="text-bold">Contact Us</Heading>
          </HeadingLi>
          <FootLi>
            <NavLink href="tel:702-431-4463">+1 (702) 431-4463</NavLink>
          </FootLi>
          <FootLi>
            <NavLink href="mailto: hello@mybetterlunch.com">
              hello@mybetterlunch.com
            </NavLink>
          </FootLi>
        </FlexCol>
      </Flex1>
      <Flex1 className="flex-1">
        <FlexCol>
          <HeadingLi>
            <Heading className="text-bold">Follow Us</Heading>
          </HeadingLi>
          <FootLi>
            <NavLink to="https://www.facebook.com/mybetterlunch/">
              <Social src={Facebook} alt="Facebook Icon" />
            </NavLink>
            <NavLink to="https://www.instagram.com/mybetter_fit/">
              <Social src={Instagram} alt="Instagram Icon" />
            </NavLink>
            <p style={{ fontSize: '0.8rem' }}>{copyrightText()}</p>
          </FootLi>
        </FlexCol>
      </Flex1>
    </Content>
  </Background>
);

export default Footer;

const Background = styled.footer`
  background: #fff;
  padding: 20px 0;
`;

const Content = styled.div`
  max-width: 78.125rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 46.875rem) {
    flex-direction: row;
  }
`;

const Logo = styled.img`
  margin-top: 0.25rem;
  height: 9.5rem;
`;

const Flex1 = styled.div`
  justify-content: center;
`;

const FlexCol = styled.ul`
  text-align: center;
  @media (min-width: 46.875rem) {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: auto;
    text-align: left;
  }
`;

const FootLi = styled.li`
  padding: 10px;
  display: inline-block;
  @media (min-width: 46.875rem) {
    padding: 5px;
    display: block;
  }
`;

const HeadingLi = styled.li`
  display: none;
  @media (min-width: 46.875rem) {
    display: block;
    padding: 5px;
  }
`;

const Heading = styled.p`
  display: none;
  @media (min-width: 46.875rem) {
    display: block;
  }
`;

const Social = styled.img`
  height: 1.6rem;
  margin: 5px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  :hover {
    color: #f69353;
    text-decoration: underline;
  }
`;
