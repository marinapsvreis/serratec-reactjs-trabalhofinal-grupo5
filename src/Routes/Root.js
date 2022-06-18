import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Catalogo } from "../Pages/Catalogo"
import {Categorias} from "../Pages/Categoria"
import { Produto } from '../Pages/Produto'
import { Sobre } from '../Pages/Sobre/Index'
import { Login } from '../Pages/Login'
import { AdmLogin } from '../Pages/AdmLogin'
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
      <Route path="/catalogo/:categoria&:id" element={<Categorias />} />
      <Route path="/catalogo/:categoria&:idCategoria/:idProduto" element={<Produto />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/admlogin" element={<AdmLogin/>}/>
      <Route path="/registro" element={<Registro/>}/>      
      <Route path="/contato" element={<Contato/>}/>
      <Route path="/painel_administrativo" element={<PainelAdministrativo/>}/>
      <Route path="/painel_administrativo/consultar_pedido" element={<ConsultarPedido/>}/>
      <Route path="/painel_administrativo/gerenciar" element={<Gerenciar/>}/>
      </Routes>
  )
}