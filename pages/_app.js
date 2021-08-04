import React from 'react'
import GlobalStyles from '../styles/createGlobalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyles/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
