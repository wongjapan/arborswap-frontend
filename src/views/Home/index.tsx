import React from 'react'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'

import Header from './components/Header'
import Footer from './components/Footer'

const Home: React.FC = () => {
  const { theme } = useTheme()
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default Home
