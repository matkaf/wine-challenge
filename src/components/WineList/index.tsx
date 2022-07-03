import React, { useContext, useEffect } from 'react'

import { Aside, RadioSection, StyledContainer, StyledWrapper, MainContainer, WinesContainer, NavigatorContainer, NavigatorPage } from './styled'
import WineCard from '../WineCard'

import { IAPIRes, IWine } from '../../interfaces'
import PageNavigator from './PageNavigator'

const WineList = (props: { filteredWines: IAPIRes }) => {
  const { items, totalItems, totalPages } = props.filteredWines
  
  return (
    <StyledWrapper>
      <StyledContainer>
        <Aside>
          <h1>Refine sua busca</h1>
          <h4>Por preço</h4>
          <RadioSection>
            <label>
              <input name='price' type='radio' value='0-40'/>
              Até R$40
            </label>
            <label>
              <input name='price' type='radio' value='40-60'/>
              R$40 a R$60
            </label>
            <label>
              <input name='price' type='radio' value='100-200'/>
              R$100 a R$200
            </label>
            <label>
              <input name='price' type='radio' value='200-500'/>
              R$200 a R$500
            </label>
            <label>
            <input name='price' type='radio' value='500'/>
              Acima de R$500
            </label>
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
