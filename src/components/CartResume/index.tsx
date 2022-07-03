import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BuyButton, DeleteCart, EmptyCart, StyledContainer } from './styled'
import WinesList from './WinesList'

const CartResume = () => {
  const [cart, setCart] = useState()
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
          router.push('/')
        }}
      >
        Limpar Carrinho
      </DeleteCart>
    </StyledContainer>
  )
}

export default CartResume