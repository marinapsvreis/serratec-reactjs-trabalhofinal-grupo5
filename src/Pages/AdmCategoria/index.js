import React from "react";
import { Container, Titulo } from "../global-style";
import {
  Input,
  Form,
  ButtonContainer,
  RegistroButton,
} from "./style";

export const AdmCategoria= () => {
  return (
    <Container>
      <Titulo>Cadastro Categoria</Titulo>
      <Form>
        <Input type="text" placeholder="Nome da Categoria" />
        <Input type="text" placeholder="Descrição da Categoria" />
        <Input type="text" placeholder="Link imagem Categoria" />
        <ButtonContainer>
          <RegistroButton type="submit" value="Cadastrar" />
        </ButtonContainer>
      </Form>
    </Container>
  );
};
