import React from "react"
import { useState } from "react"

export const estadoContexto = {
  idUsuario: 0
}

export const DataContext = React.createContext(null)

export function Contexto(props){
  const[idUsuario, setIdUsuario] = useState(estadoContexto.idUsuario)

  function handleSetIdUsuario(id){
    setIdUsuario(id)
  }

  return(
    <DataContext.Provider value={{idUsuario, handleSetIdUsuario}}>
      {props.children}
    </DataContext.Provider>
  )
}