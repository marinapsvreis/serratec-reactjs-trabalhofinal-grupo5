import React from 'react'
import { Routes, Route, Navigate, Outlet} from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Catalogo } from "../Pages/Catalogo"
import {Categorias} from "../Pages/Categoria"
import { Produto } from '../Pages/Produto'
import { Sobre } from '../Pages/Sobre/Index'
import { Login } from '../Pages/Login'
import { AdmLogin } from '../Pages/AdmLogin'
import { Registro } from '../Pages/Registro'
import { Contato } from '../Pages/Contato'
import { AdmCategoria } from '../Pages/AdmCategoria'
import { AdmProduto } from '../Pages/AdmProduto'
import PainelAdministrativo from '../Pages/PainelAdministrativo'
import AdmPedido from '../Pages/AdmPedido'
import AdmCliente from '../Pages/AdmCliente'
import { Carrinho } from '../Pages/Carrinho'

export const PrivateRoutes = () => {
  function isAuthenticated () {

    if(localStorage.getItem('admin') !== null){
      return true;
    }else{
      return false;
    }  
  }

  return (  
    isAuthenticated() ? <Outlet/> : <Navigate to="/admlogin"/>
  )
} 

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
      <Route element={<PrivateRoutes/>}>
        <Route path="/painel_administrativo/produto" element={<AdmProduto/>}/>      
        <Route path="/painel_administrativo/categoria" element={<AdmCategoria/>}/>
        <Route path="/painel_administrativo" element={<PainelAdministrativo/>}/>
        <Route path="/painel_administrativo/pedido" element={<AdmPedido/>}/>
        <Route path="/painel_administrativo/cliente" element={<AdmCliente/>}/>
      </Route>
      <Route path="/carrinho" element={<Carrinho/>}/>
      </Routes>
  )
}