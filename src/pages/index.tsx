import type { NextPage } from 'next'
import { CardList } from '../components/CardList'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <CardList />
    </>
  )
}

export default Home
