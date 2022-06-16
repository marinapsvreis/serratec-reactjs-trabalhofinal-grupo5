import React from "react"
import Logo from "../../Sources/serra-funko-icon.png";
import './style.css'
import { NavbarSection, NavbarContainer, NavbarLista, NavbarItem, HamburguerButton, LinkHome, NomeLogo, ButtonLogin } from "./style";
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <NavbarSection>
      <NavbarContainer>
        <Link to="/" style={{textDecoration: "none"}}><LinkHome><img src={Logo} alt="logo" width="40px" />
          <NomeLogo>Serra Funko</NomeLogo></LinkHome></Link>
          <NavbarLista>
          
          <Link to="/" style={{textDecoration: "none"}}><NavbarItem>Produtos</NavbarItem></Link>
          <Link to="/" style={{textDecoration: "none"}}><NavbarItem>Sobre</NavbarItem></Link>
          <Link to="/" style={{textDecoration: "none"}}><NavbarItem>Contato</NavbarItem></Link>
          <Link to="/" style={{textDecoration: "none"}}><NavbarItem><ButtonLogin>Login</ButtonLogin></NavbarItem></Link>
          
        </NavbarLista>

        <HamburguerButton
          id="icon-menu"
          class="navbar-toggler second-button shadow-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent23"
          aria-controls="navbarSupportedContent23"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div id="animated-icon2" class="animated-icon2">
            <span></span><span></span><span></span><span></span>
          </div>
        </HamburguerButton>
      </NavbarContainer>
    </NavbarSection>
  )
}
