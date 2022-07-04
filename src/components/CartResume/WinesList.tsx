import React from 'react'
import Image from 'next/image'

import { ImageContainer, NameContainer, WineInfo, WinesContainer } from './styled'

const WinesList = (props: { cart: any }) => {
  const { cart } = props

  return (
    <WinesContainer>
      <h1>Meu carrinho:</h1>
      { cart.map((curr: any, i: number) => {
        const { wine, quantity } = curr
        return (
        <WineInfo key={i}>
          <ImageContainer>
            <Image src={wine.image} alt={wine.name} layout='fill' objectFit='contain' />
          </ImageContainer>
          <NameContainer>
            <h3>{wine.name}</h3>
          </NameContainer>
            <h3>Quantidade: {quantity}</h3>
        </WineInfo>)
      } )}
    </WinesContainer>
  )
}

export default WinesList