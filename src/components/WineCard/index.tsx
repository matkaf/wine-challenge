import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import { ImageWrapper, Price, PriceContainer,
  StyledCard, StyledContainer, WineName,
  MemberPriceContainer,  NonMemberContainer, AddToCartBtn} from './styled'

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

  const { id, image, name, price, discount, priceMember, priceNonMember } = props.wine

  return (
    <StyledContainer>
      <Link href={`details/${id}`}>
        <StyledCard>
          <ImageWrapper>
            <Image src={image} alt={name} layout='fill' objectFit='contain' />
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