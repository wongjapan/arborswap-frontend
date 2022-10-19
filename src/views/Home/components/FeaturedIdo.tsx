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
  min-height: 700px;
`
const InnerWrapper = styled(Flex)`
  width: 1200px;
  margin: 0 auto;
  justify-content: center;
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

const FeaturedIdo = () => {
  const { t } = useTranslation()
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Heading textAlign="center" scale="lg">
            Featured IDOs
          </Heading>
        </InnerWrapper>
      </Wrapper>
    </>
  )
}

export default FeaturedIdo
