import React from "react"
import { useState } from "react"

export const estadoContexto = {
  idUsuario: 0
}

export const loginAdmin = {
  isAdmin: 0
}

export const DataContext = React.createContext(null)

export function Contexto(props){
  const[idUsuario, setIdUsuario] = useState(estadoContexto.idUsuario)
  const[isAdmin, setIsAdmin] = useState(loginAdmin.isAdmin)

  function handleSetIdUsuario(id){
    setIdUsuario(id)
  }

  function handleSetIsAdmin(value){
    setIsAdmin(value)
  }

  return(
    <DataContext.Provider value={{idUsuario, handleSetIdUsuario, isAdmin, handleSetIsAdmin}}>
      {props.children}
    </DataContext.Provider>
  )
}