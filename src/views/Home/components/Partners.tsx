/* Partners */
import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, LinkExternal, Button, DashboardIcon, SubMenu, SubMenuItem } from '@arborswap/uikit'
import '../assets/Partners.css';

const PartnersW = styled.div`
    background: #FFFFFF;  
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 80px 0px;
`
const PartnersInner = styled.div`
`
const PartnersTitle = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #464754;
    text-align:center;
`
const PartnersList = styled.div`
    margin: 60px 180px;
`

const Partners = () => {
    return (
      <PartnersW>
        <PartnersInner>
            <PartnersTitle>Partners</PartnersTitle>
            <PartnersList>
                <div className="partners">
                    <div className="partner-item text-center">
                        <img src="/images/home/imgnew/partners/bsc.png" alt="" />
                    </div>
                    <div className="partner-item text-center">
                        <img src="/images/home/imgnew/partners/Prime_Logotype_2.png" alt="" />
                    </div>
                    <div className="partner-item text-center">
                        <img src="/images/home/imgnew/partners/Ten-Traced.png" alt="" />
                    </div>
                    <div className="partner-item text-center">
                        <img src="/images/home/imgnew/partners/Defistation-2.png" alt="" />
                    </div>
                    <div className="partner-item text-center">
                        <img src="/images/home/imgnew/partners/Beefy.png" alt="" />
                    </div>
                    <div className="partner-item text-center">
                        <img src="/images/home/imgnew/partners/BSCNews.png" alt="" />
                    </div>
                    <div className="partner-item text-center">
                        <img src="/images/home/imgnew/partners/CoinGecko.png" alt="" />
                    </div>
                </div> 
            </PartnersList>
        </PartnersInner>
      </PartnersW>
    );
  };
  
  export default Partners;