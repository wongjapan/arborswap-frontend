import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link } from 'react-router-dom'
import { Flex, Heading, Text, LinkExternal, Button, DashboardIcon, SubMenu, SubMenuItem, Grid } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'
import PoolListItem from './PoolListItem'

const Wrapper = styled(Grid)`
    width: 1200px;
    margin: auto;
    grid-template-columns: 50% 50%;
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        width: 100%;
        grid-template-columns: 100%;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        width: 100%;
        grid-template-columns: 100%;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        grid-template-columns: 100%;
    }
`
const PoolLink = styled.a``

const ListBox = () => {
  const { t } = useTranslation()
  return (
    <>
      <Wrapper>
        <PoolLink as={Link} to={{pathname: 'https://www.arborswap.org/pools' }} target="_blank"  >
          <PoolListItem img="images/home/imgnew/poolicons/ARB.png" title="ARB" />  
        </PoolLink>
        <PoolLink as={Link} to={{pathname: 'https://www.arborswap.org/pools' }} target="_blank"  >
          <PoolListItem img="images/home/imgnew/poolicons/SXP.png" title="SXP" />
        </PoolLink>
        <PoolLink as={Link} to={{pathname: 'https://www.arborswap.org/pools' }} target="_blank"  >
          <PoolListItem img="images/home/imgnew/poolicons/GUSD.png" title="GUSD" />
        </PoolLink>
        <PoolLink as={Link} to={{pathname: 'https://www.arborswap.org/pools' }} target="_blank"  >
          <PoolListItem img="images/home/imgnew/poolicons/HUSD.png" title="HUSD" />
        </PoolLink>
      </Wrapper>
    </>
  )
}

export default ListBox
