import type { AppProps } from 'next/app'
import { GlobalSyles } from './styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalSyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
