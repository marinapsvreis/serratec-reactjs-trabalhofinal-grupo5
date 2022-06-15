import React from "react"
import { useState } from "react"

export const estadoContexto = {
  name: "Marina"
}

export const DataContext = React.createContext(null)

export function Contexto(props){
  const[name, setName] = useState(estadoContexto.name)

  function handleSetName(e){
    setName(e.target.value)
  }

  return(
    <DataContext.Provider value={{name, handleSetName}}>
      {props.children}
    </DataContext.Provider>
  )
}