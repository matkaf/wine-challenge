import React from 'react'
import { NavigatorContainer, NavigatorPage } from './styled'

const PageNavigator = (props: { totalPages: number }) => {
  const { totalPages } = props

  const numberOfPages = () => {
    const navElements = []

    for (let index = 1; index <= totalPages; index += 1) {
      navElements.push(index)
    }
    return navElements
  }

  return (
    <NavigatorContainer>
      { numberOfPages().map((num) => {
        return (
          <NavigatorPage key={num}>
            {num}
          </NavigatorPage>
        )
      })

      }
    </NavigatorContainer>
  )
}

export default PageNavigator