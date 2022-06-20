import React, { useEffect, useState } from "react";
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
  const [cupom, setCupom] = useState("");
  const [pedidosCliente, setPedidosCliente] = useState([]);
  const [listaPedidos, setListaPedidos] = useState([]);
  const [idPedido, setIdPedido] = useState();

  useEffect(() => {
    const getProdutoById = async () => {
      await api
        .get(`produto/${idProduto}`)
        .then((response) => setProduto(response.data));
    };
    getProdutoById();

    if (localStorage.getItem("idCliente") !== null) {
      const getPedidosByClienteId = async () => {
        await api
          .get(`pedido/cliente/${localStorage.getItem("idCliente")}`)
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

  async function adicionarAoCarrinho() {
    let desconto = 0;
    if (cupom === "CUPOM10") {
      desconto = 10;
    } else if (cupom === "CUPOM15") {
      desconto = 15;
    }

    if (localStorage.getItem("idCliente") !== null) {
      if (pedidosCliente.length === 0) {
        const responseNovoUsuario = await api.post("pedido", {
          idCliente: localStorage.getItem("idCliente"),
        });
        console.log(responseNovoUsuario);

        const itemPedidoResponseNovoUsuario = await api.post("itemPedido", {
          idPedido: responseNovoUsuario.data.idPedido,
          idProduto: idProduto,
          quantidadeItemPedido: quantidade,
          precoVendaItemPedido: produto.valorUnitario,
          percentualDescontoItemPedido: desconto,
        });
        console.log(itemPedidoResponseNovoUsuario.data);
        alert("O item foi adicionado ao carrinho");
      } else {
        const ultimoPedido = pedidosCliente[pedidosCliente.length - 1];
        if (ultimoPedido.status === false) {
          api.post("itemPedido", {
            idPedido: ultimoPedido.idPedido,
            idProduto: idProduto,
            quantidadeItemPedido: quantidade,
            precoVendaItemPedido: produto.valorUnitario,
            percentualDescontoItemPedido: desconto,
          });
          alert("O item foi adicionado ao carrinho");
        } else {
          const response = await api.post("pedido", {
            idCliente: localStorage.getItem("idCliente"),
          });

          const itemPedidoResponse = await api.post("itemPedido", {
            idPedido: response.data.idPedido,
            idProduto: idProduto,
            quantidadeItemPedido: quantidade,
            precoVendaItemPedido: produto.valorUnitario,
            percentualDescontoItemPedido: desconto,
          });
          alert("O item foi adicionado ao carrinho");
        }
      }
    } else {
      alert("Faça login para adicionar um produto ao carrinho");
    }
  }
  // addicionar mensagem de carrinho vazaio
  function handleQuantidade(e) {
    setQuantidade(e.target.value);
  }

  function handleCupom(e) {
    setCupom(e.target.value);
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
          <ProdutoInput
            type="number"
            placeholder="Quantidade desejada"
            onChange={handleQuantidade}
          />
          <ProdutoInput
            type="text"
            placeholder="Cupom"
            onChange={handleCupom}
          />
          <ProdutoButton onClick={adicionarAoCarrinho}>
            Adicionar ao carrinho
          </ProdutoButton>
        </ProdutoDescricao>
      </ProdutoDiv>
    </Container>
  );
};
