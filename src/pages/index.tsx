import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wine - Home</title>
      </Head>

      <main>
        <Header />
        <h1>
          Home Page - Wine.com.br
        </h1>
      </main>
    </div>
  )
}

export default Home
