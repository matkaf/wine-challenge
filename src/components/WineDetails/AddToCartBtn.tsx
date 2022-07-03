import AppContext from 'context/AppContext'
import { IWine } from 'interfaces'
import React, { useContext, useState } from 'react'
import { AddButton, AddToCartContainer, QuantityContainer, SetQuantityBtn } from './styled'

const AddToCartBtn = (props: { wine: IWine }) => {
  const [quantity, setQuantity] = useState(1)
  const { setCartQuantity } = useContext(AppContext)

  const sendWineToCart = (wine: IWine, quantity: number) => {
    const prevCart = localStorage.getItem('cart')

    if (!prevCart) {
      const cart = JSON.stringify([{ wine, quantity }])
      localStorage.setItem('cart', cart)
      setCartQuantity(1)
    }

    if (prevCart) {
      const parsedCart = JSON.parse(prevCart)

      parsedCart.push({ wine, quantity })
   
      localStorage.setItem('cart', JSON.stringify(parsedCart))
      setCartQuantity(parsedCart.length)
    }
  }

  return (
    <AddToCartContainer>
      <QuantityContainer>
        <SetQuantityBtn
          onClick={() => setQuantity((prev) => prev > 1 ? prev - 1 : 1)}
        >
          <p>-</p>
        </SetQuantityBtn>

        <h2>{quantity}</h2>
        
        <SetQuantityBtn
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <p>+</p>
        </SetQuantityBtn>
      </QuantityContainer>

      <AddButton
        onClick={() => sendWineToCart(props.wine, quantity)}
      >
        Adicionar
      </AddButton>
    </AddToCartContainer>
  )
}

export default AddToCartBtn