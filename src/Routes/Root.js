import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Catalogo } from "../Pages/Catalogo"
import { Sobre } from '../Pages/Sobre/Index'
import { Login } from '../Pages/Login'
import { Registro } from '../Pages/Registro'
import { Contato } from '../Pages/Contato'

export const Root = () => {
  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/registro" element={<Registro/>}/>
      <Route path="/contato" element={<Contato/>}/>
      </Routes>
  )
}