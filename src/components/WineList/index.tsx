import React, { useContext, useEffect, useState } from 'react'
import AppContext from 'context/AppContext'

import { IAPIRes, IWine } from '../../interfaces'

import { Aside, RadioSection, StyledContainer, StyledWrapper, MainContainer, WinesContainer, NavigatorContainer, NavigatorPage, ResetFilter } from './styled'
import WineCard from '../WineCard'
import PageNavigator from './PageNavigator'

import { getWines } from 'api'

const WineList = (props: { filteredWines: IAPIRes }) => {
  const { items, totalItems, totalPages } = props.filteredWines
  
  const { filter, setFilter, setFilteredWines } = useContext(AppContext)

  useEffect(() => {
    const applyFilter = async () => {
      const wines = await getWines(1, filter)

      return setFilteredWines(wines)
    }

    applyFilter()

  }, [filter, setFilteredWines])
  
  return (
    <StyledWrapper>
      <StyledContainer>
        <Aside>
          <h1>Refine sua busca</h1>
          <h4>Por preço</h4>
          <RadioSection>
            <label>
              <input
                name='price'
                type='radio'
                value='0-40'
                onClick={ (e) => setFilter((e.target as HTMLInputElement).value)}
              />
              Até R$40
            </label>
            <label>
              <input
                name='price'
                type='radio'
                value='40-60'
                onClick={ (e) => setFilter((e.target as HTMLInputElement).value)}
              />
              R$40 a R$60
            </label>
            <label>
              <input
                name='price'
                type='radio'
                value='100-200'
                onClick={ (e) => setFilter((e.target as HTMLInputElement).value)}
              />
              R$100 a R$200
            </label>
            <label>
              <input
                name='price'
                type='radio'
                value='200-500'
                onClick={ (e) => setFilter((e.target as HTMLInputElement).value)}
              />
              R$200 a R$500
            </label>
            <label>
            <input
              name='price'
              type='radio'
              value='500-'
              onClick={ (e) => setFilter((e.target as HTMLInputElement).value)}
            />
              Acima de R$500
            </label>
            <ResetFilter
              onClick={ (e) => {
                setFilter('0-500')
              }}
            >
              Limpar
            </ResetFilter>
          </RadioSection>
        </Aside>
        <MainContainer>
          <h1>{totalItems} produtos encontrados</h1>
          <WinesContainer>
            { items.map((wine: IWine) => <WineCard key={wine.id} wine={wine}/>) }
          </WinesContainer>
          <PageNavigator totalPages={totalPages}/>
        </MainContainer>
      </StyledContainer>
    </StyledWrapper>
  )
}

export default WineList
