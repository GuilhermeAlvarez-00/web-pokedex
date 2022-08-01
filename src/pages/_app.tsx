import type { AppProps } from 'next/app'
import { PokemonContextProvider } from '../components/context/pokemonContext'
import { GlobalSyles } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PokemonContextProvider>
      <GlobalSyles />
      <Component {...pageProps} />
    </PokemonContextProvider>
  )
}

export default MyApp
