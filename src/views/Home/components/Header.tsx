import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, Link } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'

import FooterBg from '../assets/header-bg.png'
import Logo from '../assets/logo.svg'

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  padding-top: 36px;
  overflow: hidden;
  min-height: 1200px;
  background: url(${FooterBg});
  background-size: cover;
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
        <StyledNav>
          <Logos href="#">
            <img src={Logo} alt="logo" />
          </Logos>
          <Flex alignItems="center" height="100%" justifyContent="center">
            <Text textAlign="left" color="white">
              Products
            </Text>
            <Text textAlign="left" color="white">
              RBA Token
            </Text>
            <Text textAlign="left" color="white">
              Community
            </Text>
            <Text textAlign="left" color="white">
              About
            </Text>
          </Flex>
        </StyledNav>
      </Wrapper>
    </>
  )
}

export default Header
