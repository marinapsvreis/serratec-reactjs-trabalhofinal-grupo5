import React from "react";
import { Container, Titulo } from "../global-style";
import {
  Input,
  Form,
  LoginButton,
  ButtonContainer,
  RegistroButton,
} from "./style";

export const Registro = () => {
  return (
    <Container>
      <Titulo>Cadastro Cliente</Titulo>
      <Form>
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Nome Completo" />
        <Input type="text" placeholder="CPF" />
        <Input type="tel" placeholder="Telefone" />
        <Input type="date" placeholder="Data de Nascimento" />
        <Input type="text" placeholder="CEP" />
        <Input type="text" placeholder="Numero" />
        <Input type="text" value="Complemento" />
        <ButtonContainer>
          <RegistroButton type="submit" value="Completar o Registro" />
        </ButtonContainer>
      </Form>
    </Container>
  );
};
