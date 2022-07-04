import React, { useContext, useEffect, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import AppContext from 'context/AppContext'

import WinesList from './WinesList'
import { BuyButton, DeleteCart, EmptyCart, StyledContainer } from './styled'

const CartResume = () => {
  const [cart, setCart] = useState()
  const { setCartQuantity } = useContext(AppContext)
  const router = useRouter()

  useEffect(() => {
    const local = localStorage.getItem('cart')

    if (local) {
      const cart = JSON.parse(local)
      console.log('local: ', cart);
      

      return setCart(cart) 
    }
  }, [])

  if (!cart) return (
    <EmptyCart>
      O carrinho está vazio!
      <Link href='/'>Voltar à loja</Link>
    </EmptyCart>
  )

  return (
    <StyledContainer>
      { cart && <WinesList cart={cart}/>}
      <BuyButton>
        Finalizar Compra
      </BuyButton>
      <DeleteCart
        onClick={ () => {
          localStorage.removeItem('cart')
          setCartQuantity(0)
          router.push('/')
        }}
      >
        Limpar Carrinho
      </DeleteCart>
    </StyledContainer>
  )
}

export default CartResume