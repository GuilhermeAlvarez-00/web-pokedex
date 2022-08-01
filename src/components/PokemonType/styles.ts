import styled from 'styled-components'

const pokemonTypes = {
  grass: '#3BB18B',
  bug: '#3BB18B',
  poison: '#80459F',
  fire: '#FF8020',
  water: '#54ABFF',
  flying: '#54ABFF',
  normal: '#C6C6C6',
}

type PokemonType = {
  type: string
}

export const Container = styled.div<PokemonType>`
  width: fit-content;
  padding: 0.5rem 2rem;
  border-radius: 100px;
  border: ${({ type }) =>
    `1px solid ${pokemonTypes[type as keyof typeof pokemonTypes]}`};
  box-shadow: ${({ type }) =>
    `0 0 4px ${pokemonTypes[type as keyof typeof pokemonTypes]}`};

  p {
    color: ${({ type }) => pokemonTypes[type as keyof typeof pokemonTypes]};
    font-size: 1.2rem;
    text-transform: capitalize;
  }
`
