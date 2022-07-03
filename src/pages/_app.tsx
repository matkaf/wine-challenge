import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Provider from '../context/Provider'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Component {...pageProps} />
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
