import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { usePokemons } from '../context/pokemonContext'

import { Container, Wrapper, Input, InputField } from './styles'

export const Header = () => {
  const { searchPokemon, setSearchPokemon } = usePokemons()

  return (
    <Container>
      <Wrapper>
        <h1>Pokedex</h1>

        <Input>
          <InputField
            value={searchPokemon}
            placeholder="Pesquisar Pokemon"
            onChange={(event) => setSearchPokemon(event.target.value)}
          />
          <AiOutlineSearch />
        </Input>
      </Wrapper>
    </Container>
  )
}
