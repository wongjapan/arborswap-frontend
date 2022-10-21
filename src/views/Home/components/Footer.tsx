import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, Link } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'

import FooterBg from '../assets/footer-bg.png'
import LogoWhite from '../assets/logo-white.svg'

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  padding-top: 166px;
  overflow: hidden;
  min-height: 666px;
  background: url(${FooterBg});
  background-size: cover;
`

const WrapperInner = styled(Flex)`
  position: relative;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
`
const FirstColumn = styled(Flex)`
  position: relative;
  flex-direction: column;
`
const SecondColumn = styled(Flex)`
  position: relative;
  flex-direction: row;
  gap: 100px;
`
const ProductColumn = styled(Flex)`
  position: relative;
  flex-direction: column;
  gap: 20px;
`

const Footer = () => {
  const { t } = useTranslation()
  return (
    <>
      <Wrapper>
        <WrapperInner>
          <FirstColumn>
            <img src={LogoWhite} alt="white" width="260px" />
            <Text textAlign="left" color="white" marginTop="64px">
              Want to join Arbor on this new Journey?
            </Text>
          </FirstColumn>
          <SecondColumn>
            <ProductColumn>
              <Text textAlign="center" color="white" fontSize="25px" fontWeight="700" marginBottom="40px">
                Products
              </Text>
              <Link href="/#" color="white">
                Launchpad
              </Link>
              <Link href="/#" color="white">
                Marketplace
              </Link>
              <Link href="/#" color="white">
                Exchange
              </Link>
              <Link href="/#" color="white">
                Lottery
              </Link>
            </ProductColumn>
            <ProductColumn>
              <Text textAlign="center" color="white" fontSize="25px" fontWeight="700" marginBottom="40px">
                Resources
              </Text>
              <Link href="/#" color="white">
                Docs
              </Link>
              <Link href="/#" color="white">
                User Guides
              </Link>
              <Link href="/#" color="white">
                Roadmap
              </Link>
              <Link href="/#" color="white">
                Apply Listing
              </Link>
            </ProductColumn>
          </SecondColumn>
        </WrapperInner>
      </Wrapper>
    </>
  )
}

export default Footer
