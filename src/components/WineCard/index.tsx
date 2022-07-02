import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import { IWine } from '../../interfaces';

import { ImageWrapper, Price, PriceContainer,
  StyledCard, StyledContainer, WineName,
  MemberPriceContainer,  NonMemberContainer, AddToCartBtn, FlagWrapper} from './styled'

const WineCard = (props: { wine: IWine }) => {

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
      <AddToCartBtn>Adicionar</AddToCartBtn>
    </StyledContainer>
  )
}

export default WineCard