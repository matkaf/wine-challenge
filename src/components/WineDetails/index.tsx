import React, { useContext, useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import PreviousIcon from '../../assets/previous.svg'

import { AddToCartContainer, CommentContainer, DescriptionContainer, DetailsContainer, FlagWrapper, ImageContainer, PreviousWrapper, PriceContainer, StyledMain, Summary } from './styled'
import AppContext from 'context/AppContext'
import { IWine } from 'interfaces'

const WineDetails = () => {
  const { filteredWines } = useContext(AppContext)
  const [wine, setWine] = useState({} as IWine)
  const router = useRouter()

  useEffect(() => {
    const { items } = filteredWines
    const { id } = router.query

    const wineFound = items.find((wine: IWine) => wine.id === Number(id))
    setWine(wineFound)
  }, [filteredWines, router.query])

  if (!wine.name) return <p> Carregando... </p>

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
            <article>
              {wine.sommelierComment}
            </article>
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