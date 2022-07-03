import { IWine } from 'interfaces'
import React, { useState } from 'react'
import { AddButton, AddToCartContainer, QuantityContainer, SetQuantityBtn } from './styled'

const AddToCartBtn = (props: { wine: IWine }) => {
  const [quantity, setQuantity] = useState(1)

  const sendWineToCart = (wine: IWine, quantity: number) => {
    const data = {
      wine,
      quantity,
    }
    
    return localStorage.setItem('cart', JSON.stringify(data))
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