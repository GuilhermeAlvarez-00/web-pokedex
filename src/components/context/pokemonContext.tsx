import { createContext, ReactNode, useContext, useState } from 'react'
import { api } from '../../service/api'

type Pokemon = {
  id: string
  name: string
  image: string
  types: Array<{
    name: string
  }>
}

type PokemonContextProps = {
  pokemonsFiltered: Pokemon[]
  searchPokemonInApi: Pokemon
  fetchPokemons: () => void
  searchPokemon: string
  setSearchPokemon: (name: string) => void
}

type PokemonContextProviderProps = {
  children: ReactNode
}

const PokemonContext = createContext<PokemonContextProps>(
  {} as PokemonContextProps
)

export const PokemonContextProvider = ({
  children,
}: PokemonContextProviderProps) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [searchPokemon, setSearchPokemon] = useState('')
  const [searchPokemonInApi, setSearchPokemonInApi] = useState<Pokemon>(
    {} as Pokemon
  )

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

  const pokemonsFiltered = searchPokemon
    ? pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
      })
    : pokemons

  if (searchPokemon && pokemonsFiltered.length === 0) {
    setTimeout(() => {
      const getPokemon = async () => {
        try {
          const response = await api.get(searchPokemon)
          const { data } = response
          const pokemonProps: Pokemon = {
            id: String(data.id).padStart(3, '0'),
            name: data.name,
            image: data.sprites.front_default,
            types: data.types.map((type: { type: { name: string } }) => ({
              name: type.type.name,
            })),
          }

          setSearchPokemonInApi(pokemonProps)
        } catch {
          console.log('Pokemon não encontrado')
        }
      }
      getPokemon()
    }, 2000)
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemonsFiltered,
        searchPokemonInApi,
        fetchPokemons,
        searchPokemon,
        setSearchPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export const usePokemons = () => {
  const context = useContext(PokemonContext)
  return context
}
