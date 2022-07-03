import CartResume from 'components/CartResume'
import Header from 'components/Header'
import Head from 'next/head'
import React from 'react'

const Checkout = () => {
  return (
    <>
    <Head>
      <title>Wine - Checkout</title>
    </Head>
    <Header />
    <main>
      <CartResume />
    </main>
  </>
  )
}

export default Checkout