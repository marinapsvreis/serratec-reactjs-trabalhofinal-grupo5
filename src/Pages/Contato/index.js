import React from "react"
import { Container, Titulo} from "../global-style.js"
import "./style.js"
import "./style.css"
import { ContainerDireito, ContainerEsquerdo, Formulario, FormularioBotao, FormularioInput, FormularioTextArea} from "./style.js"

export const Contato = () => {

  return (
    <>
    <Container>
      <ContainerEsquerdo>
          <Titulo>Endereço</Titulo>        
      </ContainerEsquerdo>
      <ContainerDireito>
          <Titulo>Contato</Titulo>
          <Formulario>
            <FormularioInput
              type="text"
              placeholder="Digite seu Nome"
              id="nome"
              required
            />
            <FormularioInput
              type="email"
              placeholder="Digite seu Email"
              id="email"
              required
            />
            <FormularioTextArea
              name="Digite Sua Mensagem"
              id="mensagem"
              cols="30"
              rows="10"
              required
            ></FormularioTextArea>
            <FormularioBotao
              type="submit"
              value="Enviar"
              id="button_form"
              onclick="enviar()"
            />
          </Formulario>
      </ContainerDireito>
    </Container>
    </>
  )
}

