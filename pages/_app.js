import * as React from 'react'
import Head from 'next/head'

import theme from '../styles/theme'

import '@fontsource/baloo-bhai-2'
import '@fontsource/baloo-bhai-2/800.css'

import '@fontsource/poppins'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/900.css'

import '../styles/app.css'

import { Box, ChakraProvider } from '@chakra-ui/react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ThirdPage from './thirdPage'

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name='description' content='Travello pakistan web UI' />
        <link rel='icon' href='/favicon/favicon.ico' />
      </Head>
      <Box>
        <Header />

        {/* <Component {...pageProps} /> */}

        <ThirdPage />
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default App
