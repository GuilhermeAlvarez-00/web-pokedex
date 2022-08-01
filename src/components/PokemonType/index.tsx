import { Container } from './styles'

interface Props {
  category: string
}

export const PokemonType: React.FC<Props> = ({ category }: Props) => {
  return (
    <Container type={category}>
      <p>{category}</p>
    </Container>
  )
}
