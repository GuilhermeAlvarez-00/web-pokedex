import { Container } from './styles'

interface Props {
  category: string
}

export const Category: React.FC<Props> = ({ category }: Props) => {
  return (
    <Container>
      <p>{category}</p>
    </Container>
  )
}
