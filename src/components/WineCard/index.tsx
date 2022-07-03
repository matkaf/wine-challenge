import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link';

import { IWine } from '../../interfaces';
import AppContext from 'context/AppContext';

import { ImageWrapper, Price, PriceContainer,
  StyledCard, StyledContainer, WineName,
  MemberPriceContainer,  NonMemberContainer, AddToCartBtn, FlagWrapper} from './styled'

const WineCard = (props: { wine: IWine }) => {
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

  const { id, image, name, price, discount, priceMember, priceNonMember, flag } = props.wine

  return (
    <StyledContainer>
      <Link href={`details/${id}`}>
        <StyledCard>
          <ImageWrapper>
            <Image src={image} alt={name} layout='fill' objectFit='contain' />
            <FlagWrapper>
              <Image src={flag} alt={name} width='30' height='30' />
            </FlagWrapper>
          </ImageWrapper>

          <WineName>{name}</WineName>

          <PriceContainer>
            <Price>
              {price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
            </Price>
            <p>{discount}% OFF</p>
          </PriceContainer>

          <MemberPriceContainer>
            <h4>Sócio Wine</h4>
            <p><span>R$</span>{priceMember.toLocaleString('pt-br',{minimumFractionDigits: 2})}</p>
          </MemberPriceContainer>

          <NonMemberContainer>
            <h4>NÃO SÓCIO</h4>
            <p>R${priceNonMember}</p>
          </NonMemberContainer>
        </StyledCard>
      </Link>
      <AddToCartBtn
        onClick={ () => sendWineToCart(props.wine, 1) }
      >
        Adicionar
      </AddToCartBtn>
    </StyledContainer>
  )
}

export default WineCard