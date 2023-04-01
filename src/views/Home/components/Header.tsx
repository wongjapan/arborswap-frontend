import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
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
  useWalletModal,
  Box,
} from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'
import FooterBg from '../assets/header-bg.png'
import Logo from '../assets/logo.svg'
import Dividers from '../assets/dividers.png'

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
  color: #fff;
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

const StatsWrapper = styled(Flex)`
  position: relative;
  flex-wrap: wrap;
  border-radius: 10px;
  border: 1px solid #ffffff;
  padding: 35px;
  margin: 600px auto 0 auto;
  background: rgba(68, 54, 20, 0.08);
  box-shadow: inset 11.9333px -11.9333px 11.9333px rgba(200, 156, 52, 0.08),
    inset -11.9333px 11.9333px 11.9333px rgba(200, 156, 52, 0.08);
  backdrop-filter: blur(6.5px);
`

const InnerStatsWrapper = styled(Flex)`
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  height: 270px;
  background-image: url(${Dividers});
  background-size: cover;
`
const StatsColumn = styled(Flex)`
  position: relative;
  width: 380px;
  flex-direction: row;
`

const navLinkStyle = styled(Flex)`
  position: relative;
  width: 380px;
  flex-direction: row;
`
const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const StyledLi = styled.li`
  float: left;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #FFFFFF;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background: #FFFFFF;
  border: 3px solid rgba(255, 229, 176, 0.2);
  box-shadow: 10px 10px 20px rgba(166, 159, 159, 0.3);
  border-radius: 10px;
  padding:20px;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const StyledA = styled.a`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  cursor: pointer;
`;

const SubA = styled.a`
  display: block;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #464754;
  padding: 12px 0px;
`;
const Arrowd = styled.div`
  padding: 5px;
  display:inline;
`;
const Dptxt = styled.div`
display:inline;
`;

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
            <StyledUl>
            <StyledLi>
              <StyledA >Protocols</StyledA>
            </StyledLi>
            <StyledLi>
              <StyledA onClick={() => ''}>RBA Token</StyledA>
            </StyledLi>
            <DropDownLi>
              <Dropbtn>
                <Dptxt>Resources</Dptxt> 
                <Arrowd><img src='/images/home/imgnew/arrowd.png' alt='' /></Arrowd>
              </Dropbtn>
              <DropDownContent>
                {" "}
                <SubA>
                  <Link to='/' >Docs & User Guides</Link>
                </SubA>
                <SubA>
                  <Link to='/' >Roadmap</Link>
                </SubA>
                <SubA>
                  <Link to='/' >Apply for listing</Link>
                </SubA>
              </DropDownContent>
            </DropDownLi>
            <DropDownLi>
              <Dropbtn>
                <Dptxt>Socials</Dptxt> 
                <Arrowd><img src='/images/home/imgnew/arrowd.png' alt='' /></Arrowd>
              </Dropbtn>
              <DropDownContent>
                {" "}
                <SubA>
                  <a href='https://twitter.com/arborswap_defi' >Twitter</a>
                </SubA>
                <SubA>
                    <a href='https://t.me/arborswap' >Telegram</a>
                </SubA>
                <SubA>
                  <a href='https://www.instagram.com/arborswapofficial' >Instagram</a>
                </SubA>
              </DropDownContent>
            </DropDownLi>
          </StyledUl>
            </MenuWrapper>
            <Button as={Link} to="/swap" startIcon={<DashboardIcon color="#FFFFFF" />}>
              Launch APP
            </Button>
          </StyledNav>
          
        </InnerWrapper>
        <StatsWrapper>
          <InnerStatsWrapper>
            <StatsColumn>
              <Box as="div" style={{ color: '#A69F9F', padding: '50px' }}>
                Total Trading Volume
              </Box>
            </StatsColumn>
            <StatsColumn>
              <Box as="div" style={{ color: '#A69F9F', padding: '50px' }}>
                Total Value Locked
              </Box>
            </StatsColumn>
            <StatsColumn>
              <Box as="div" style={{ color: '#A69F9F', padding: '50px' }}>
                Total Projects Launched
              </Box>
            </StatsColumn>
            <StatsColumn>
              <Box as="div" style={{ color: '#A69F9F', padding: '50px' }}>
                Total Tickets Won
              </Box>
            </StatsColumn>
          </InnerStatsWrapper>
        </StatsWrapper>
        
      </Wrapper>
    </>
  )
}

export default Header
