import React, { PropsWithChildren, useState } from "react";
import { IAPIRes } from "../interfaces";

import AppContext from "./AppContext";

const Provider = ({ children }: PropsWithChildren) => {
  const [filteredWines, setFilteredWines] = useState()
  const [filter, setFilter] = useState('0-500')

  const value = {
    filteredWines,
    setFilteredWines,
    filter,
    setFilter
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default Provider
