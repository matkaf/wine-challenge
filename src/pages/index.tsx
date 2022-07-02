import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import WineList from '../components/WineList'

import { IAPIRes } from '../interfaces'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=9')

  const wines: IAPIRes = await res.json()

  console.log(wines);

  if (!wines) return { notFound: true }

  return {
    props: { wines }
  }
}

const Home: NextPage =  ({ wines }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Wine - Loja</title>
      </Head>
      <Header />
      <main>
        <WineList wines={wines}/>
      </main>
    </>
  )
}

export default Home
