import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../Context/data";
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
  const [pedidos, setPedidos] = useState([]);
  const { idUsuario, handleSetIdUsuario } = useContext(DataContext);

  function adicionarAoCarrinho() {
    if (pedidos.length == 0) {
      const pedido = {
        idCliente: idUsuario,
      };
      api.post("pedido", pedido);
      const postItemPedido = {
        idPedido: 1,
        idProduto: idProduto,
        quantidadeItemPedido: 1,
        precoVendaItemPedido: produto.valorUnitario,
        percentualDescontoItemPedido: 0,
      };
      api.post("itemPedido", postItemPedido);
    } else {
      const ultimoPedido = pedidos[pedidos.length - 1];
      console.log(pedidos);
      if (ultimoPedido.status == false) {
        const postItemPedido = {
          idPedido: ultimoPedido.idPedido,
          idProduto: idProduto,
          quantidadeItemPedido: 1,
          precoVendaItemPedido: produto.valorUnitario,
          percentualDescontoItemPedido: 0,
        };
        api.post("itemPedido", postItemPedido);
      } else {
        const pedido = {
          idCliente: idUsuario,
        };
        api.post("pedido", pedido);
        const postItemPedido = {
          idPedido: ultimoPedido.idPedido + 1,
          idProduto: idProduto,
          quantidadeItemPedido: 1,
          precoVendaItemPedido: produto.valorUnitario,
          percentualDescontoItemPedido: 0,
        };
        api.post("itemPedido", postItemPedido);
      }
    }
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
    const getPedidosByClienteId = async () => {
      await api
        .get(`pedido/cliente/${idUsuario}`)
        .then((response) => setPedidos(response.data));
    };
    getPedidosByClienteId();
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
          <ProdutoButton onClick={adicionarAoCarrinho}>
            Adicionar ao carrinho
          </ProdutoButton>
        </ProdutoDescricao>
      </ProdutoDiv>
    </Container>
  );
};
