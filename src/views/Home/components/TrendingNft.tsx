import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link } from 'react-router-dom'
import { Flex, Heading, Text, LinkExternal, Button, DashboardIcon, SubMenu, SubMenuItem } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'
import PartnersBg from '../assets/trending-bg.png'

const Wrapper = styled(Flex)`
  z-index: 0;
  position: relative;
  padding-top: 36px;
  min-height: 700px;
  background-image: url(${PartnersBg});
  background-size: cover;
  background-color: #F5F6F7;
`
const InnerWrapper = styled(Flex)`
  width: 1200px;
  margin: 0 auto;
  justify-content: center;
`

const TrendingNft = () => {
  const { t } = useTranslation()
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Heading textAlign="center" scale="lg" style={{ fontFamily : 'GilroyHome', fontSize: '40px' }} >
            Trending NFTs
          </Heading>
        </InnerWrapper>
      </Wrapper>
    </>
  )
}

export default TrendingNft
