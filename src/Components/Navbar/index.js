import React from "react"

export const Navbar = () => {
  return (
    <section id="nav-bar">
      <nav class="container">
        <a id="link-logo" href="./index.html"
          ><img src="./assets/imgs/serra-funko-icon.png" alt="logo" width="40px" />
          <p>Serra Funko</p>
        </a>
        <ul>
          <a href="./catalogo.html"><li>Produtos</li></a>
          <a href="./sobre.html"><li>Sobre</li></a>
          <a href="./contato.html"><li>Contato</li></a>
          <a class="btn-login" href="./login.html"><li>Login</li></a>
        </ul>

        <button
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
        </button>
      </nav>
    </section>
  )
}
