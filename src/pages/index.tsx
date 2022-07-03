import React, { useContext, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import WineList from '../components/WineList'

import AppContext from '../context/AppContext'
import { getWines } from '../api'

const Home: NextPage =  () => {
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
