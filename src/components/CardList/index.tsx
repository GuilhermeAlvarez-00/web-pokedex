import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { api } from '../../service/api'
import { Card } from '../Card'
import { usePokemons } from '../context/pokemonContext'
import { Container } from './styles'

type Pokemon = {
  id: string
  name: string
  image: string
  types: Array<{
    name: string
  }>
}

type PokemonProps = {
  id: string
  name: string
  image: string
  types: Array<{
    name: string
  }>
}

export const CardList: NextPage = () => {
  const { pokemonsFiltered, searchPokemonInApi, fetchPokemons } = usePokemons()

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <Container>
      {pokemonsFiltered &&
        pokemonsFiltered.map((pokemon) => (
          <Card key={pokemon.id} {...pokemon} />
        ))}
    </Container>
  )
}
