import { AiOutlineSearch } from 'react-icons/ai'

import { Container, Wrapper, Input, InputField } from './styles'

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Pokedex</h1>

        <Input>
          <InputField placeholder="Pesquisar Pokemon" />
          <AiOutlineSearch />
        </Input>
      </Wrapper>
    </Container>
  )
}
