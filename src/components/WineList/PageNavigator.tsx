import React, { useContext, useEffect, useState } from 'react'
import { NavigatorContainer, NavigatorPage } from './styled'

import AppContext from '../../context/AppContext'
import { getWines } from '../../api'

const PageNavigator = (props: { totalPages: number }) => {
  const { setFilteredWines } = useContext(AppContext)
  const [currPage, setCurrPage] = useState(1)
  const { totalPages } = props

  const numberOfPages = () => {
    const navElements = [] as Array<number>

    for (let index = 1; index <= totalPages; index += 1) {
      navElements.push(index)
    }
    return navElements
  }

  useEffect(() => {
    console.log('Alterou página', currPage);

    const updateWines = async () => {
      const wines = await getWines(currPage)
      setFilteredWines(wines)
      console.log(wines);
      window.scrollTo(0, 100)
    }
    updateWines()
    
  }, [currPage, setFilteredWines])

  return (
    <NavigatorContainer>
      { numberOfPages().map((num) => {
        return (
          <NavigatorPage key={num} onClick={() => setCurrPage(num)}>
            {num}
          </NavigatorPage>
        )
      })

      }
    </NavigatorContainer>
  )
}

export default PageNavigator