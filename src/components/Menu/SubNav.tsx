import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'

const StyledNav = styled.nav`
  min-width: 436px;
  /* width: 100%; */
  /* margin-bottom: 40px; */
`

const getActiveIndex = (pathname: string): number => {
  if (
    pathname.includes('/pool') ||
    pathname.includes('/create') ||
    pathname.includes('/add') ||
    pathname.includes('/remove') ||
    pathname.includes('/find') ||
    pathname.includes('/liquidity')
  ) {
    return 1
  }
  return 0
}

const Nav = () => {
  const location = useLocation()
  const { t } = useTranslation()
  return (
    <StyledNav>
      <ButtonMenu activeIndex={getActiveIndex(location.pathname)} fullWidth scale="md" variant="primary">
        <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
          {t('Swap')}
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/liquidity" as={Link}>
          {t('Liquidity')}
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-links" to="/pool" as={Link}>
          {t('Limit Order')}
        </ButtonMenuItem>
      </ButtonMenu>
    </StyledNav>
  )
}

export default Nav
