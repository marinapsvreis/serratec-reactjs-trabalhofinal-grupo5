import React from "react"
import Logo from "../../Sources/serra-funko-icon.png";
import { NavbarSection, NavbarContainer, NavbarLista, NavbarItem, LinkHome, NomeLogo, ButtonLogin } from "./style";
import "./style.css"
import "./script.js"
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <>
    <NavbarSection>
      <NavbarContainer>
        <Link to="/" style={{textDecoration: "none"}}><LinkHome><img src={Logo} alt="logo" width="40px" />
          <NomeLogo>Serra Funko</NomeLogo></LinkHome></Link>
          <NavbarLista>
          
          <Link to="/catalogo" style={{textDecoration: "none"}}><NavbarItem>Produtos</NavbarItem></Link>
          <Link to="/sobre" style={{textDecoration: "none"}}><NavbarItem>Sobre</NavbarItem></Link>
          <Link to="/" style={{textDecoration: "none"}}><NavbarItem>Contato</NavbarItem></Link>
          <Link to="/" style={{textDecoration: "none"}}><NavbarItem><ButtonLogin>Login</ButtonLogin></NavbarItem></Link>
          
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
        >
          <div id="animated-icon2" className="animated-icon2">
            <span></span><span></span><span></span><span></span>
          </div>
        </button>

        <div id="navMenu" className="">
          <div id="menu-options">
            <a className="menu-option" href="./index.html">Home</a>
            <a className="menu-option" href="./catalogo.html">Produtos</a>
            <a className="menu-option" href="./sobre.html">Sobre</a>
            <a className="menu-option" href="./contato.html">Contato</a>
            <a className="menu-option btn-login" href="./login.html">Login</a>
          </div>
        </div>
      </NavbarContainer>
    </NavbarSection>
    <script src="./script.js"></script>
    </>
  )
}
