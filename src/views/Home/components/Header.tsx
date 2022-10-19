import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link } from 'react-router-dom'
import { Flex, Heading, Text, LinkExternal, Button, DashboardIcon, SubMenu, SubMenuItem } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'

import FooterBg from '../assets/header-bg.png'
import Logo from '../assets/logo.svg'

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  padding-top: 36px;
  min-height: 1200px;
  background: url(${FooterBg});
  background-size: cover;
`
const InnerWrapper = styled(Flex)`
  width: 1200px;
  margin: 0 auto;
`

const MenuWrapper = styled(Flex)`
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: transparent;
  transform: translate3d(0, 0, 0);
  padding-left: 16px;
  padding-right: 16px;
`

const NavLink = styled.a`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 0px 10px;
  }
`

const Logos = styled.a`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 0px 10px;
  }
  display: inline-block;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 20px;
`

const WrapperInner = styled(Flex)`
  position: relative;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
`
const FirstColumn = styled(Flex)`
  position: relative;
  width: 500px;
  flex-direction: column;
`

const Header = () => {
  const { t } = useTranslation()
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <StyledNav>
            <Logos href="#">
              <img src={Logo} alt="logo" />
            </Logos>
            <MenuWrapper>
              <SubMenu
                component={
                  <Text textAlign="left" color="white">
                    Products
                  </Text>
                }
              >
                <SubMenuItem as={Link} to="/swap">
                  Oke
                </SubMenuItem>
                <SubMenuItem as={LinkExternal} href="https://bscscan.com" bold={false} color="text">
                  Okes
                </SubMenuItem>
              </SubMenu>
              <Text textAlign="left" color="white">
                RBA Token
              </Text>
              <Text textAlign="left" color="white">
                Community
              </Text>
              <Text textAlign="left" color="white">
                About
              </Text>
            </MenuWrapper>
            <Button startIcon={<DashboardIcon color="#FFFFFF" />}>Launch APP</Button>
          </StyledNav>
        </InnerWrapper>
      </Wrapper>
    </>
  )
}

export default Header
