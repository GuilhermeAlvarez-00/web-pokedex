import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 35.5rem;
  background: linear-gradient(var(--red600), var(--black700));
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
`

export const Wrapper = styled.div`
  width: min(100%, 112.4rem);
  margin: 8.8rem auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2.4rem;
  }
`

export const Input = styled.div`
  width: 35.6rem;
  height: 4.2rem;
  background: var(--black700);
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.8rem;

  svg {
    font-size: 2.4rem;
    color: var(--gray500);
  }
`

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.8rem;
  background: transparent;
  border: none;
  color: var(--white);

  ::placeholder {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
`
