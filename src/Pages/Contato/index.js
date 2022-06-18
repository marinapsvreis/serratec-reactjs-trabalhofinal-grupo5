import React from "react"
import {Titulo} from "../global-style.js"
import Footer from '../../Components/Footer';
import "./style.js"
import "./style.css"
import { ContainerDireito, ContainerEsquerdo, ContainerSobre, Formulario, FormularioBotao, FormularioInput, FormularioTextArea} from "./style.js"
import { Map } from "../../Components/Map"

export const Contato = () => {

  return (
    <>
    <ContainerSobre>
      <ContainerEsquerdo>
          <Titulo>Endereço</Titulo>
          <Map/>        
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
    </ContainerSobre>
    <Footer/>
    </>
  )
}

