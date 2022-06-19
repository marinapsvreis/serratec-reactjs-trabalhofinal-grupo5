import React from "react";
import { Container, Titulo } from "../global-style";
import { Input, Form, ButtonContainer, RegistroButton } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../Services/api";
import TabelaProdutos from "../../Components/TabelaProdutos";
import BadRequest from "../../Components/BadRequest";
import { Popup } from "../../Components/Popup";

export const AdmProduto = () => {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [qtdEstoque, setQtdEstoque] = useState(0)
  const [valorUnitario, setValorUnitario] = useState(0.0)
  const [nomeImagem, setNomeImagem] = useState('')
  const [idCategoria, setIdCategoria] = useState(0)
  const [statusAPI, setStatusAPI] = useState(0);
  const [isConfirmado, setConfirmado] = useState(false);

  useEffect(() => {
    carregarAPI();
  }, []);

  function carregarAPI() {
    const getProdutoAPI = async () => {
      try {
        const res = await api.get("produto");
        setStatusAPI(res.status);
        setListaProdutos(res.data);
      } catch (error) {
        if (error.code === "ERR_NETWORK") {
          setStatusAPI((e) => 502);
        }
      }
    };
    getProdutoAPI();
  }

  const handleFechar = (event) => {
    setConfirmado(!isConfirmado);
  };

  const handleConfirmar = (event) => {
    window.location.reload(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setNome("");
    setDescricao("");
    setQtdEstoque(0);
    setValorUnitario(0.0);
    setNomeImagem("");
    setIdCategoria(0);
  };

  return (
    <Container>
      <Titulo>Cadastro Produto</Titulo>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Nome do Produto" onChange={(event) => setNome(event.target.value)}/>
        <Input type="text" placeholder="Descrição do Produto" onChange={(event) => setDescricao(event.target.value)}/>
        <Input type="number" placeholder="Quantidade" onChange={(event) => setQtdEstoque(event.target.value)}/>
        <Input type="number" step="0.01" placeholder="Preço Unitário" onChange={(event) => setValorUnitario(event.target.value)}/>
        <Input type="number" placeholder="Id da Categoria" onChange={(event) => setIdCategoria(event.target.value)}/>
        <Input type="text" placeholder="Link imagem produto" onChange={(event) => setNomeImagem(event.target.value)}/>
        <ButtonContainer>
          <RegistroButton type="submit" value="Cadastrar" onClick={() => setConfirmado(!isConfirmado)}/>
        </ButtonContainer>
      </Form>
      {isConfirmado ? <Popup
          titulo={"produto"}
          informacoes={{
            Nome: nome,
            Descricao: descricao,
            Quantidade: qtdEstoque,
            ValorUnitario: valorUnitario,
            IdCategoria: idCategoria,
            NomeImagem: nomeImagem,}} clickFechar={handleFechar} clickConfirmar={handleConfirmar}/> : "" }
      <Titulo>Listar Produtos</Titulo>
      {statusAPI === 200 ? (
        <TabelaProdutos lista={listaProdutos} />
      ) : (
        <BadRequest />
      )}
    </Container>
  );
};
