import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Catalogo } from "../Pages/Catalogo"
import { Sobre } from '../Pages/Sobre/Index'
import { Login } from '../Pages/Login'
import { Registro } from '../Pages/Registro'
import { Contato } from '../Pages/Contato'
import PainelAdministrativo from '../Pages/PainelAdministrativo'
import ConsultarPedido from '../Pages/ConsultarPedido'
import Gerenciar from '../Pages/Gerenciar'

export const Root = () => {
  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/registro" element={<Registro/>}/>
      <Route path="/contato" element={<Contato/>}/>
      <Route path="/painel_administrativo" element={<PainelAdministrativo/>}/>
      <Route path="/painel_administrativo/consultar_pedido" element={<ConsultarPedido/>}/>
      <Route path="/painel_administrativo/gerenciar" element={<Gerenciar/>}/>
      </Routes>
  )
}