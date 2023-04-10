import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link } from 'react-router-dom'
import { Flex, Heading, Text, LinkExternal, Button, DashboardIcon, SubMenu, SubMenuItem, Grid } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'
import FeaturedBg from '../assets/featured-bg.png'
import IdoCard from './FeaturedIdo/IdoCard'

const Wrapper = styled(Flex)`
  z-index: 0;
  position: relative;
  background-image: url(${FeaturedBg});
  background-size: cover;
  background-color: #F5F6F7;
  padding-top: 80px;
  padding-bottom: 80px;
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    padding-top: 40px;
    padding-bottom: 80px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    padding-top: 40px;
    padding-bottom: 80px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  `
  const InnerWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  justify-content: center;
  background: transparent;
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 100%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`
const HeadingEx = styled(Heading)`
  padding-bottom: 80px;
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    padding-bottom: 40px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    padding-bottom: 40px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    padding-bottom: 40px;
  }
`
const IdoWraper = styled.div``
const IdoItems = styled(Grid)`
  grid-template-columns: 30% 30% 30%;
  gap: 40px;
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    grid-template-columns: 100%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    grid-template-columns: 100%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: 100%;
  }
`
const ViewAll = styled.a`
  width: 276px;
  display: block;
  margin: 60px auto;
  background: #00783F;
  border-radius: 6px;
  font-family: 'GilroyHome';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  text-align:center;
  padding: 18px 0px;
`

const FeaturedIdo = () => {
  const { t } = useTranslation()
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <HeadingEx textAlign="center" scale="lg" style={{ fontFamily : 'GilroyHome', fontSize: '40px' }} >
            Featured IDOs
          </HeadingEx>
          <IdoWraper>
            <IdoItems>
              <IdoCard />
              <IdoCard />
              <IdoCard />
              <IdoCard />
              <IdoCard />
              <IdoCard />
            </IdoItems>
            <ViewAll>View All</ViewAll>
          </IdoWraper>
        </InnerWrapper>
      </Wrapper>
    </>
  )
}

export default FeaturedIdo
