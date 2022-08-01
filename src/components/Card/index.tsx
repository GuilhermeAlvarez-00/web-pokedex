import { NextPage } from 'next'
import { Component } from 'react'
import { Category } from '../Category'

import { Container, InfoContainer, Info, CategoryContainer } from './styles'

export const Card: React.FC = () => {
  return (
    <Container>
      <img src="/bulbasaur.png" alt="Imagem do pokemon Bulbasaur" />

      <InfoContainer>
        <Info>
          <h2>Bulbasaur</h2>
          <span>#001</span>
        </Info>
      </InfoContainer>

      <CategoryContainer>
        <Category category="grass" />
      </CategoryContainer>
    </Container>
  )
}
