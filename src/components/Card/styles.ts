import styled from 'styled-components'

export const Container = styled.div`
  width: 26rem;
  height: 21.8rem;
  background-color: var(--gray400);
  border-radius: 2rem;

  img {
    width: 100%;
    max-width: 26rem;
    margin-top: -13rem;
  }
`

export const InfoContainer = styled.div`
  width: 22.4rem;
  margin: 0 auto;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -6rem;

  h2 {
    font-size: 2.2rem;
  }

  span {
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--green500);
  }
`

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5.6rem;
`
