import { PokemonType } from '../PokemonType'

import { Container, InfoContainer, Info, CategoryContainer } from './styles'

type PokemonProps = {
  id: string
  name: string
  image: string
  types: Array<{
    name: string
  }>
}

export const Card: React.FC<PokemonProps> = ({ id, name, image, types }) => {
  return (
    <Container>
      <img src={image} alt={`Imagem do pokemon ${name[0].toLocaleUpperCase}`} />

      <InfoContainer>
        <Info type={types[0].name}>
          <h2>{name}</h2>
          <span>#{id}</span>
        </Info>
      </InfoContainer>

      <CategoryContainer>
        {types.map((type) => (
          <PokemonType category={type.name} />
        ))}
      </CategoryContainer>
    </Container>
  )
}
