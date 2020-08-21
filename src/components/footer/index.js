import React from "react"
import styled from "styled-components"
import CircleLogo from "../../static/assets/branding/circle-logo.svg"
import Facebook from "../../static/assets/facebook.svg"
import Instagram from "../../static/assets/instagram.svg"

const Footer = () => {
  return (
    <Background>
      <Content>
        <Flex1 className="flex-1 text-center">
          <Logo src={CircleLogo} alt="BetterLunch Logo" />
        </Flex1>
        <Flex1 className="flex-1">
          <FlexCol>
            <HeadingLi>
              <Heading className="text-bold">Pages</Heading>
            </HeadingLi>
            <FootLi>
              <a>Home</a>
            </FootLi>
            <FootLi>
              <a>About Us</a>
            </FootLi>
            <FootLi>
              <a>News &amp; Updates</a>
            </FootLi>
            <FootLi>
              <a>Contact Us</a>
            </FootLi>
            <FootLi>
              <a>FAQ</a>
            </FootLi>
          </FlexCol>
        </Flex1>
        <Flex1 className="flex-1">
          <FlexCol>
            <HeadingLi>
              <Heading className="text-bold">Contact Us</Heading>
            </HeadingLi>
            <FootLi>
              <a>Support</a>
            </FootLi>
            <FootLi>
              <a href="tel:702-431-4463">+1 (702) 431-4463</a>
            </FootLi>
            <FootLi>
              <a href="mailto: hello@mybetterlunch.com">
                hello@mybetterlunch.com
              </a>
            </FootLi>
          </FlexCol>
        </Flex1>
        <Flex1 className="flex-1">
          <FlexCol>
            <HeadingLi>
              <Heading className="text-bold">Follow Us</Heading>
            </HeadingLi>
            <FootLi>
              <a>
                <Social src={Facebook} alt="Facebook Icon" />
              </a>
              <a>
                <Social src={Instagram} alt="Instagram Icon" />
              </a>
            </FootLi>
          </FlexCol>
        </Flex1>
      </Content>
    </Background>
  )
}

export default Footer

const Background = styled.footer`
  background: #fff;
  padding: 20px 0;
`

const Content = styled.div`
  max-width: 78.125rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 46.875rem) {
    flex-direction: row;
  }
`

const Logo = styled.img`
  margin-top: 0.25rem;
  height: 9.5rem;
`

const Flex1 = styled.div`
  justify-content: center;
`

const FlexCol = styled.ul`
  text-align: center;
  @media (min-width: 46.875rem) {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: auto;
    text-align: left;
  }
`

const FootLi = styled.li`
  padding: 10px;
  display: inline-block;
  @media (min-width: 46.875rem) {
    padding: 5px;
    display: block;
  }
`

const HeadingLi = styled.li`
  display: none;
  @media (min-width: 46.875rem) {
    display: block;
    padding: 5px;
  }
`

const Heading = styled.p`
  display: none;
  @media (min-width: 46.875rem) {
    display: block;
  }
`

const Social = styled.img`
  height: 1.6rem;
  margin: 5px;
`
