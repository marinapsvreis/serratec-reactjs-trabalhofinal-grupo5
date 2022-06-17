import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Catalogo } from "../Pages/Catalogo"
import { Sobre } from '../Pages/Sobre/Index'
import { Login } from '../Pages/Login'
import { Registro } from '../Pages/Registro'

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/registro" element={<Registro/>}/>
      </Routes>
    </BrowserRouter>
  )
}