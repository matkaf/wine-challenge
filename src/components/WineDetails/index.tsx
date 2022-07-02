import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import PreviousIcon from '../../assets/previous.svg'

import { AddToCartContainer, CommentContainer, DescriptionContainer, DetailsContainer, FlagWrapper, ImageContainer, PreviousWrapper, PriceContainer, StyledMain, Summary } from './styled'

const WineDetails = () => {
  const wine = {
    "id": 0,
    "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png",
    "name": "Bacalhôa Quinta da Garrida Colheita Selecionada 2015",
    "price": 175.9,
    "discount": 45,
    "priceMember": 96.9,
    "priceNonMember": 114,
    "type": "Tinto",
    "classification": "Seco",
    "size": "750 ml",
    "rating": 4,
    "avaliations": 292,
    "country": "Portugal",
    "region": "Dão",
    "flag": "https://img.wine.com.br/fenix/image/flags/rounded/portugal.svg",
    "sommelierComment": "Esse tinto traz em seu assemblage a Touriga Nacional, uma das uvas tintas portuguesas mais conhecidas no mundo do vinho. Nativa do Dão, região produtora desse vinho, essa variedade atinge a sua expressão máxima nesse terroir. O termo Colheita Selecionada estampado no rótulo, é uma referência a qualidade da safra 2015."
  }

  return (
    <StyledMain>
      <PreviousWrapper>
        <Link href='/'>
          <a>
            <Image src={PreviousIcon} alt='Voltar' />
            <span>Voltar</span>
          </a>
        </Link>
      </PreviousWrapper>

      <DetailsContainer>
        <ImageContainer>
          <Image src={wine.image} alt={wine.name} layout='fill' objectFit='contain'/>
        </ImageContainer>

        <DescriptionContainer>
          <nav>
            <a>Vinhos</a>
            { '>' }
            <a>{wine.country}</a>
            { '>' }
            <a>{wine.region}</a>
          </nav>
          <h1>{wine.name}</h1>

          <Summary>
            <FlagWrapper>
              <Image src={wine.flag} alt={wine.country} layout='fill' objectFit='contain' />
            </FlagWrapper>
            <p>{wine.country}</p>
            <p>{wine.type}</p>
            <p>{wine.classification}</p>
            <p>{wine.size}</p>
            <div>XXXXX</div>
            <p>{`(${wine.avaliations})`}</p>
          </Summary>

          <PriceContainer>
            <h1><span>R$</span>{(wine.price).toLocaleString('pt-br', {minimumFractionDigits: 2})}</h1>
            <h3>
              {
                `NÃO-SÓCIO
                ${wine.priceNonMember.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}/UN`
              }
            </h3>
          </PriceContainer>

          <CommentContainer>
            <h3>Comentário do Sommelier</h3>
            <text>
              {wine.sommelierComment}
            </text>
          </CommentContainer>
          
          <AddToCartContainer>
            <div>
              + 0 -
            </div>
            <button>
              Adicionar
            </button>
          </AddToCartContainer>
        </DescriptionContainer>
      </DetailsContainer>
    </StyledMain>
  )
}

export default WineDetails