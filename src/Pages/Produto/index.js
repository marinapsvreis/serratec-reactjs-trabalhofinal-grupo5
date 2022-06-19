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
  ProdutoInput,
} from "./style";

export const Produto = () => {
  let { categoria, categoriaId, idProduto } = useParams();
  const [produto, setProduto] = useState(null);
  const [quantidade, setQuantidade] = useState("");
  const [pedidosCliente, setPedidosCliente] = useState([]);
  const [listaPedidos, setListaPedidos] = useState([]);
  const { idUsuario, handleSetIdUsuario } = useContext(DataContext);

  useEffect(() => {
    const getProdutoById = async () => {
      await api
        .get(`produto/${idProduto}`)
        .then((response) => setProduto(response.data));
    };
    getProdutoById();

    if (idUsuario != 0) {
      const getPedidosByClienteId = async () => {
        await api
          .get(`pedido/cliente/${idUsuario}`)
          .then((response) => setPedidosCliente(response.data));
      };
      getPedidosByClienteId();

      const getPedidos = async () => {
        await api
          .get(`pedido`)
          .then((response) => setListaPedidos(response.data));
      };
      getPedidos();
    }
  }, [categoria]);

  function adicionarAoCarrinho() {
    if (idUsuario != 0) {
      if (pedidosCliente.length === 0) {
        const pedido = {
          idCliente: idUsuario,
        };
        api.post("pedido", pedido);

        const postItemPedido1 = {
          idPedido: listaPedidos.length + 1,
          idProduto: idProduto,
          quantidadeItemPedido: quantidade,
          precoVendaItemPedido: produto.valorUnitario,
          percentualDescontoItemPedido: 0,
        };
        setTimeout(() => api.post("itemPedido", postItemPedido1), 1000);
      } else {
        const ultimoPedido = pedidosCliente[pedidosCliente.length - 1];
        if (ultimoPedido.status === false) {
          const postItemPedido = {
            idPedido: ultimoPedido.idPedido,
            idProduto: idProduto,
            quantidadeItemPedido: quantidade,
            precoVendaItemPedido: produto.valorUnitario,
            percentualDescontoItemPedido: 0,
          };
          api.post("itemPedido", postItemPedido);
        } else {
          const pedido = {
            idCliente: idUsuario,
          };
          api.post("pedido", pedido);

          const postItemPedido2 = {
            idPedido: listaPedidos.length + 1,
            idProduto: idProduto,
            quantidadeItemPedido: quantidade,
            precoVendaItemPedido: produto.valorUnitario,
            percentualDescontoItemPedido: 0,
          };
          setTimeout(() => api.post("itemPedido", postItemPedido2), 1000);
        }
      }
      alert("Produto adicionado ao carrinho");
    } else {
      alert("Faça login para adicionar um produto ao carrinho");
    }
  }

  function handleQuantidade(e){
    setQuantidade(e.target.value)
  }

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
          <ProdutoInput type="number" placeholder="Quantidade desejada" onChange={handleQuantidade}/>
          <ProdutoButton onClick={adicionarAoCarrinho}>
            Adicionar ao carrinho
          </ProdutoButton>
        </ProdutoDescricao>
      </ProdutoDiv>
    </Container>
  );
};
