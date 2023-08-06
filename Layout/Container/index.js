import { Box, Container as Layout, Text } from '@chakra-ui/react'
import React from 'react'

const Container = ({ children, ...rest }) => {
  return (
    <Layout maxW='80em' w='full' {...rest}>
      {children}
    </Layout>
  )
}

export default Container
