import styled from 'styled-components'

export const Container = styled.div`
  width: 26rem;
  height: auto;
  background-color: var(--gray400);
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  img {
    width: 180px;
    margin: -6rem auto 0;
  }
`

export const InfoContainer = styled.div`
  width: 22.4rem;
  margin: 0 auto;
`

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

export const Info = styled.div<PokemonType>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 2.2rem;
    text-transform: capitalize;
  }

  span {
    font-size: 1.6rem;
    font-weight: bold;
    color: ${({ type }) =>
      `${pokemonTypes[type as keyof typeof pokemonTypes]}`};
  }
`

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5.6rem auto 3rem;
  gap: 1.2rem;
`
