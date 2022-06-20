import React from "react"
import {useState} from 'react';
import Logo from "../../Sources/serra-funko-icon.png";
import { NavbarSection, NavbarContainer, NavbarLista, NavbarItem, LinkHome, NomeLogo, ButtonLogin, MenuOption, MenuOptionLogin } from "./style";
import { ClienteLogado } from "../ClienteLogado";
import "./style.css"
import {Link} from "react-router-dom"
import { Carrinho } from "../../Pages/Carrinho";
import { ClienteLogadoMobile } from "../ClienteLogadoMobile";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  function activeMenu() {
    setIsActive(current => !current);
  }

  return (
    <>
    <NavbarSection>
      <NavbarContainer>
        <Link to="/" style={{textDecoration: "none"}}><LinkHome><img src={Logo} alt="logo" width="40px" />
          <NomeLogo>Serra Funko</NomeLogo></LinkHome></Link>
          {localStorage.getItem('idCliente') !== null ? <ClienteLogado/> : ''}
          <NavbarLista>          
          <Link to="/catalogo" style={{textDecoration: "none"}}><NavbarItem>Produtos</NavbarItem></Link>
          <Link to="/carrinho" style={{textDecoration: "none"}}><NavbarItem>Carrinho</NavbarItem></Link>
          <Link to="/sobre" style={{textDecoration: "none"}}><NavbarItem>Sobre</NavbarItem></Link>
          <Link to="/contato" style={{textDecoration: "none"}}><NavbarItem>Contato</NavbarItem></Link>
          <Link to="/login" style={{textDecoration: "none"}}><NavbarItem><ButtonLogin>Login</ButtonLogin></NavbarItem></Link>
          
        </NavbarLista>

        <button
          id="icon-menu"
          className="navbar-toggler second-button shadow-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent23"
          aria-controls="navbarSupportedContent23"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={activeMenu}
        >
          <div id="animated-icon2" className={isActive? 'animated-icon2 open': 'animated-icon2'}>
            <span></span><span></span><span></span><span></span>
          </div>
        </button>

        <div id="navMenu" className={isActive? 'active': ''}>
          <div id="menu-options">
          {localStorage.getItem('idCliente') !== null ? <ClienteLogadoMobile/> : ''}
          <Link to="/catalogo" style={{textDecoration: "none"}}onClick={activeMenu}><MenuOption>Produtos</MenuOption></Link>
          <Link to="/carrinho" style={{textDecoration: "none"}}><MenuOption onClick={activeMenu}>Carrinho</MenuOption></Link>    
          <Link to="/sobre" style={{textDecoration: "none"}}onClick={activeMenu}><MenuOption>Sobre</MenuOption></Link>
          <Link to="/contato" style={{textDecoration: "none"}}onClick={activeMenu}><MenuOption>Contato</MenuOption></Link>
          <Link to="/login" style={{textDecoration: "none"}}><MenuOptionLogin onClick={activeMenu}>Login</MenuOptionLogin></Link>    
          </div>
        </div>
      </NavbarContainer>
    </NavbarSection>
    <script src="./script.js"></script>
    </>
  )
}
