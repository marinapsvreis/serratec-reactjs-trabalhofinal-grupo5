import React from "react";
import { Container, Titulo } from "../global-style";
import { Input, Form, ButtonContainer, RegistroButton } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../Services/api";
import TabelaProdutos from "../../Components/TabelaProdutos";
import BadRequest from "../../Components/BadRequest";

export const AdmProduto = () => {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [statusAPI, setStatusAPI] = useState(0);

  useEffect(() => {
    carregarAPI();
  }, []);
  console.log(listaProdutos);

  function carregarAPI() {
    const getProdutoAPI = async () => {
      try {
        const res = await api.get("produto");
        console.log(res);
        setStatusAPI(res.status);
        setListaProdutos(res.data);
      } catch (error) {
        console.log(error);
        if (error.code === "ERR_NETWORK") {
          setStatusAPI((e) => 502);
        }
      }
    };
    getProdutoAPI();
  }

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
      <Titulo>Listar Produtos</Titulo>
      {statusAPI === 200 ? (
        <TabelaProdutos lista={listaProdutos} />
      ) : (
        <BadRequest />
      )}
    </Container>
  );
};
