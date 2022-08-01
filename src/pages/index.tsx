import type { NextPage } from 'next'
import { useState } from 'react'
import { CardList } from '../components/CardList'
import { usePokemons } from '../components/context/pokemonContext'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <CardList />
    </>
  )
}

export default Home
