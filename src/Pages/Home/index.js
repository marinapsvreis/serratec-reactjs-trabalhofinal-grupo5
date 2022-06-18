import React from "react"
import {Link} from "react-router-dom"
import FotoHomeDesk from "../../Sources/Bonecos-FunkoPop.png";
import FotoHomeMobile from "../../Sources/bonecos-funko-mobile.png";
import { Container, Titulo, Subtitulo, ContainerTituloSubtitulo } from "../global-style.js"
import { BotoesContainer, BotoesLinha, BotaoLaranja, BotaoRoxo, ImageDesktop, ImageMobile} from "./style.js"

export const Home = () => {
  return (
    <>
    <Container>
      <ContainerTituloSubtitulo>
        <Titulo>Encontre o seu personagem favorito</Titulo>
        <Subtitulo><em>e complete sua coleção</em></Subtitulo>
      </ContainerTituloSubtitulo>
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
        <Link to="/catalogo" style={{textDecoration: "none"}}><BotaoRoxo>Produtos</BotaoRoxo></Link>
        <Link to="/sobre" style={{textDecoration: "none"}}><BotaoRoxo>Sobre</BotaoRoxo></Link>
        </BotoesLinha>
        <BotoesLinha>
        <Link to="/contato" style={{textDecoration: "none"}}><BotaoRoxo>Contato</BotaoRoxo></Link>
        <Link to="/login" style={{textDecoration: "none"}}><BotaoLaranja>Login</BotaoLaranja></Link>
        </BotoesLinha>
      </BotoesContainer>
      </Container>

      <script src="./script.js"></script>
      </>
  )
}