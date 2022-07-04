import React, { useContext, useEffect, useState } from 'react'
import { NavigatorContainer, NavigatorPage } from './styled'

import AppContext from '../../context/AppContext'
import { getWines } from '../../api'

const PageNavigator = (props: { totalPages: number }) => {
  const { setFilteredWines, filter } = useContext(AppContext)
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
      const wines = await getWines(currPage, filter)
      setFilteredWines(wines)
      console.log(wines);
    }
    updateWines()
    
  }, [currPage, setFilteredWines, filter])

  return (
    <NavigatorContainer>
      { numberOfPages().map((num) => {
        return (
          <NavigatorPage
            key={num}
            onClick={() => {
              setCurrPage(num)
              window.scrollTo(0, 100)
            }}
            background={ num === currPage }
          >
            {num}
          </NavigatorPage>
        )
      })

      }
    </NavigatorContainer>
  )
}

export default PageNavigator