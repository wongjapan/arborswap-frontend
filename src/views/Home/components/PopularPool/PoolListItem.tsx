import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link } from 'react-router-dom'
import { Flex, Heading, Text, LinkExternal, Button, DashboardIcon, SubMenu, SubMenuItem, Grid } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'

const Wrapper = styled(Grid)`
    grid-template-columns: 25% 25% 25% 25%;
    background: #fff;
    padding: 20px 30px;
    margin: 15px;
    border-radius: 10px;
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        grid-template-columns: 40% 30% 30%;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        grid-template-columns: 40% 30% 30%;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        grid-template-columns: 40% 30% 30%;
    }
`
const List = styled(Grid)`
`
const ListTitleWrap = styled.div`
`
const ListIcon = styled.img`
    width: 30px;
    float:left;
`
const Title = styled.div`
    padding-left: 35px;
`
const ListTitle = styled.span`
    font-family: 'GilroyHome';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #464754;
`
const ListSubTitle = styled.div`
    font-family: 'GilroyHome';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0.02em;
    color: #A69F9F;
`
const ListApy = styled.div``
const Apy = styled.div`
    font-family: 'GilroyHome';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #807373;
`
const SubApy = styled.div`
    font-family: 'GilroyHome';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #00783F;
`
const ListDuration = styled.div`
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        display: none;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        display: none;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        display: none;
    }
`
const Duration = styled.div`
    font-family: 'GilroyHome';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #807373;
`
const SubDuration = styled.div`
    font-family: 'GilroyHome';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #464754;
`
const Stake = styled.div`
    padding-left: 20px;
`
const StakeTitle = styled.span`
    font-family: 'GilroyHome';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #00783F;
    display: inline-block;
    float:left;
    padding-top: 5px;
    padding-right: 10px;
`
const StakeIcon = styled.img`

`

const PoolListItem = ( props ) => {
  const { t } = useTranslation()
  return (
    <>
      <Wrapper>
        <ListTitleWrap>
            <ListIcon src={props.img} />
            <Title> 
                <ListTitle>{props.title}</ListTitle>
                <ListSubTitle>Arborswap</ListSubTitle>
            </Title>
        </ListTitleWrap>
        <ListApy>
            <Apy>
                <span style={{paddingRight: '10px'}} >Apy</span>
                <img src="images/home/imgnew/poolicons/Vector.png" alt="" />
            </Apy>
            <SubApy>21,441 %</SubApy>
        </ListApy>
        <ListDuration>
            <Duration>Duration (Days)</Duration>
            <SubDuration>60</SubDuration>
        </ListDuration>
        <Stake>
            <StakeTitle>Stake</StakeTitle>
            <StakeIcon src="images/home/imgnew/poolicons/arrow-left.png" alt="" />
        </Stake>
      </Wrapper>
    </>
  )
}

export default PoolListItem
