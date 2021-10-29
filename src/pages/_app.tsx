import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>scrum-poker Lending Data</title>
        <meta name="description" content="scrum-poker, lending, data, analytics" />
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
