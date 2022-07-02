import React from 'react'

import Head from 'next/head'

import Header from '../../components/Header/index'
import WineDetails from '../../components/WineDetails/index'

const Details = () => {
  return (
    <>
    <Head>
      <title>Wine - Detalhes</title>
    </Head>
      <Header />
      <WineDetails />
    </>
  )
}

export default Details