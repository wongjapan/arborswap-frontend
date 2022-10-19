import React from 'react'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'

import Header from './components/Header'
import Footer from './components/Footer'
import PopularPool from './components/PopularPool'
import TrendingNft from './components/TrendingNft'
import FeaturedIdo from './components/FeaturedIdo'

const Home: React.FC = () => {
  const { theme } = useTheme()
  return (
    <>
      <Header />
      <PopularPool />
      <TrendingNft />
      <FeaturedIdo />
      <Footer />
    </>
  )
}

export default Home
