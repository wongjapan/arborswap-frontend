import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link } from 'react-router-dom'
import {
  Flex,
  Heading,
  Text,
  LinkExternal,
  Button,
  DashboardIcon,
  SubMenu,
  SubMenuItem,
  Grid,
  Box,
} from '@arborswap/uikit'
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
  flex-direction: column;
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

const StatsWrapper = styled.div`
  position: relative;
  width: 830px;
  border-radius: 10px;
  border: 1px solid #ffffff;
  padding: 20px;
  margin: 600px auto 0 auto;
  background: rgba(68, 54, 20, 0.08);
  box-shadow: inset 11.9333px -11.9333px 11.9333px rgba(200, 156, 52, 0.08),
    inset -11.9333px 11.9333px 11.9333px rgba(200, 156, 52, 0.08);
  backdrop-filter: blur(6.5px);
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
        <StatsWrapper>
          <Grid justifyItems="center" alignContent="center" gridTemplateColumns="1fr 1fr" gridColumnGap="16px">
            <Box as="p" style={{ color: '#A69F9F', padding: '50px' }}>
              Total Trading Volume
            </Box>
            <Box as="p" style={{ color: '#A69F9F', padding: '50px' }}>
              Total Value Locked
            </Box>
            <Box as="p" style={{ color: '#A69F9F', padding: '50px' }}>
              Total Projects Launched
            </Box>
            <Box as="p" style={{ color: '#A69F9F', padding: '50px' }}>
              Total Tickets Won
            </Box>
          </Grid>
        </StatsWrapper>
      </Wrapper>
    </>
  )
}

export default Header
