import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import WineList from '../components/WineList'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wine - Loja</title>
      </Head>
      <Header />
      <main>
        <WineList />
      </main>
    </>
  )
}

export default Home
