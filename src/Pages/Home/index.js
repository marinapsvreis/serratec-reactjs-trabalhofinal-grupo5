import React from "react"
import FotoHomeDesk from "../../Sources/Bonecos-FunkoPop.png";
import FotoHomeMobile from "../../Sources/bonecos-funko-mobile.png";
import { Container, Titulo, Subtitulo } from "../global-style.js"
import { BotoesContainer, BotoesLinha, BotaoLaranja, BotaoRoxo, ImageDesktop, ImageMobile} from "./style.js"
import { Navbar } from "../../Components/Navbar";

export const Home = () => {
  return (
    <>
    <Navbar/>
    <Container>
      <div className='row'>
        <Titulo>Encontre o seu personagem favorito</Titulo>
        <Subtitulo><em>e complete sua coleção</em></Subtitulo>
      </div>
      <ImageMobile
        src={FotoHomeMobile}
        alt="Bonecos FunkoPop"
      />
      <ImageDesktop
        src={FotoHomeDesk}
        alt="Bonecos FunkoPop"
      />
      <BotoesContainer id="buttons-home">
        <BotoesLinha>
          <BotaoRoxo href="./catalogo.html">Produtos</BotaoRoxo>
          <BotaoRoxo href="./sobre.html">Sobre</BotaoRoxo>
        </BotoesLinha>
        <BotoesLinha>
          <BotaoRoxo href="./contato.html">Contato</BotaoRoxo>
          <BotaoLaranja className="btn-login" href="./login.html">Login</BotaoLaranja>
        </BotoesLinha>
      </BotoesContainer>
      </Container>

      <script src="./script.js"></script>
      </>
  )
}