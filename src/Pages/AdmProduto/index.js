import React from "react";
import { Container, Titulo } from "../global-style";
import {
  Input,
  Form,
  ButtonContainer,
  RegistroButton,
} from "./style";

export const AdmProduto = () => {
  return (
    <Container>
      <Titulo>Cadastro Produto</Titulo>
      <Form>
        <Input type="text" placeholder="Nome do Produto" />
        <Input type="text" placeholder="Descrição do Produto" />
        <Input type="number" placeholder="Quantidade" />
        <Input type="number" step="0.01" placeholder="Preço Unitário" />
        <Input type="number" placeholder="Id da Categoria" />
        <Input type="text" placeholder="Link imagem produto" />        
        <ButtonContainer>
          <RegistroButton type="submit" value="Cadastrar" />
        </ButtonContainer>
      </Form>
    </Container>
  );
};
