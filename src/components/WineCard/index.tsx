import { NextComponentType } from 'next';
import { AppProps } from 'next/app';
import Image from 'next/image'
import React from 'react'

import { StyledContainer } from './styled'

interface IWine {
  id: number;
  image: string;
  name: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNonMember: number;
  type: string;
  classification: string;
  size?: string;
  rating: number;
  avaliations?: number;
  country: string;
  region: string;
  flag: string;
  sommelierComment: string;
}

const WineCard = (props: { wine: IWine }) => {

  const { image, name, price, discount, priceMember, priceNonMember } = props.wine

  return (
    <StyledContainer>
      <a href='#'>
        <Image src={image} alt={name} width='12rem' height='12rem'/>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <h4>
          Sócio Wine 
          <span>R${priceMember}</span>
          <span>{discount}% OFF</span>
        </h4>
        <h4>
        NÃO SÓCIO 
          <span>R${priceNonMember}</span>
        </h4>
      </a>
      <button>Adicionar</button>
    </StyledContainer>
  )
}

export default WineCard