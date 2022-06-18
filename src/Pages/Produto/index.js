import React, { useEffect, useState, useContext } from "react";
import { DataContext } from '../../Context/data'
import { useParams } from "react-router-dom";
import { api } from "../../Services/api";
import { Container } from "../global-style";
import {
  ProdutoButton,
  ProdutoDescricao,
  ProdutoDiv,
  ProdutoImg,
} from "./style";

export const Produto = () => {
  let { categoria, categoriaId, idProduto } = useParams();
  const [produto, setProduto] = useState(null);
  const {idUsuario, handleSetIdUsuario} = useContext(DataContext)

  function adicionarAoCarrinho(){
      console.log('Adicionou ao carrinho o produto: ' + produto.nomeProduto)
     //verificar lista de pedidos de usuario byId
     //se estiver vazia
     //fazer post pedido
     //pegar id do pedido
     //se contiver pedidos, pegue o ultimo
     //fazer post item pedido com o id do pedido e id do produto
  }

  useEffect(() => {
    const getProdutoById = async () => {
      await api
        .get(`produto/${idProduto}`)
        .then((response) => setProduto(response.data));
    };
    getProdutoById();
  }, [categoria]);

  if (produto == null) {
    return null;
  }

  return (
    <Container>
      <ProdutoDiv>
        <ProdutoImg src={`${produto.nomeImagemProduto}`}></ProdutoImg>
        <ProdutoDescricao>
          {produto.nomeProduto} <br />
          Quantidade no estoque: {produto.qtdEstoqueProduto} itens <br />
          R${produto.valorUnitario} <br />
          <ProdutoButton onClick={adicionarAoCarrinho}>Adicionar ao carrinho</ProdutoButton>
        </ProdutoDescricao>
      </ProdutoDiv>
    </Container>
  );
};
