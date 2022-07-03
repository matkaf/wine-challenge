import React, { useContext, useEffect } from 'react'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import WineList from '../components/WineList'

import { IAPIRes } from '../interfaces'
import AppContext from '../context/AppContext'
import { getWines } from '../api'

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=9')

//   const wines: IAPIRes = await res.json()

//   if (!wines) return { notFound: true }

//   return {
//     props: { wines }
//   }
// }

const Home: NextPage =  (/*{ wines }: InferGetStaticPropsType<typeof getStaticProps>*/) => {
  const { filteredWines, setFilteredWines } = useContext(AppContext)

  useEffect(() => {
    const fillContext = async () => {
      const wines = await getWines(1)
      setFilteredWines(wines)
      console.log('Context alimentado!');
      console.log(wines);
    }

    fillContext()
  }, [setFilteredWines])

  // if (!filteredWines) return <h1>Carregando</h1>

  return (
    <>
      <Head>
        <title>Wine - Loja</title>
      </Head>
      <Header />
      <main>
        {filteredWines && <WineList filteredWines={filteredWines}/>}
      </main>
    </>
  )
}

export default Home
