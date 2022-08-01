import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { api } from '../../service/api'
import { Card } from '../Card'
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
  const [pokemons, setPokemons] = useState<PokemonProps[]>([])

  const fetchPokemons = async () => {
    const response = await api.get('')
    const { data } = response

    for (let pokemon of data.results) {
      const response = await api.get(pokemon.name)
      const { data } = response
      const pokemonProps: Pokemon = {
        id: String(data.id).padStart(3, '0'),
        name: data.name,
        image: data.sprites.front_default,
        types: data.types.map((type: { type: { name: string } }) => ({
          name: type.type.name,
        })),
      }

      setPokemons((previousState) => [...previousState, pokemonProps])
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <Container>
      {pokemons && pokemons.map((pokemon) => <Card {...pokemon} />)}
    </Container>
  )
}
