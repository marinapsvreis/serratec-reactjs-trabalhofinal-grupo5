import React, { useContext, useEffect, useState } from "react";
import { Container, Titulo } from "../global-style";
import { api } from "../../Services/api";
import { DataContext } from "../../Context/data";
import { ItemCarrinho } from "../../Components/ItemCarrinho";
import { CarrinhoContainer, ConfirmarPedido, Descricao } from "./style";

export const Carrinho = () => {
  const [pedidos, setPedidos] = useState([]);
  const [itemPedido, setItemPedido] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [display, setDisplay] = useState(null);
  const [listExists, setListExists] = useState(false);
  const [nextRequest, setNextRequest] = useState(false);
  const [descricao, setDescricao] = useState(null);
  const { idUsuario, handleSetIdUsuario } = useContext(DataContext);

  useEffect(() => {
    if (localStorage.getItem('idCliente') === null) {
      setDisplay(
        <Titulo>Por favor faça login para vizualizar seu Carrinho</Titulo>
      );
    } else {
      const getPedidosByClienteId = async () => {
        await api
          .get(`pedido/cliente/${localStorage.getItem('idCliente')}`)
          .then((res) => setPedidos(res.data));
          setNextRequest(true);
      };
      getPedidosByClienteId();
    }
  }, [idUsuario]);

  useEffect(() => {
    if(pedidos.length === 0 && display === null){
      setDisplay(<Titulo>Não ha items em seu carrinho</Titulo>);
    } else if (pedidos.length !== 0 && nextRequest === true) {
      if (pedidos[pedidos.length - 1].status === true) {
        setDisplay(<Titulo>Não há items em seu carrinho</Titulo>);
      } else {
        setNextRequest(false);
        const getItemPedidoByPedidoId = async () => {
          await api
            .get(`itemPedido/pedido/${pedidos[pedidos.length - 1].idPedido}`)
            .then((res) => setItemPedido(res.data));
        };
        getItemPedidoByPedidoId();
        setNextRequest(true);
      }
    }
  }, [pedidos]);

  useEffect(() => {
    if (nextRequest === true) {
      if (itemPedido.length === 0 && display === null) {
        setDisplay(<Titulo>Não ha items em seu carrinho</Titulo>);
      } else {
        let newProduto = [];
        itemPedido.forEach((response) => {
          const getProduto = async () => {
            await api
              .get(`produto/${response.idProduto}`)
              .then((res) => newProduto.push(res.data));
          };
          getProduto();
        });
        setProdutos(newProduto);
        setListExists(true);
      }
    }
  }, [itemPedido]);

  function handleDisplay() {
    if (listExists) {
      setDisplay(
        produtos.map((res, index) => {
          const itemPedidoFiltrado = itemPedido.filter(
            (response) => response.idProduto == res.idProduto
          );
          return (
            <ItemCarrinho
              produto={res}
              itemPedido={itemPedidoFiltrado}
              key={index}
            />
          );
        })
      );

      setDescricao(
        <Descricao>
          <strong>Valor Bruto do pedido:</strong> R${" "}
          {pedidos[pedidos.length - 1].valorTotalPedidoBruto},00 <br />
          <ConfirmarPedido onClick={finalizar}>
            Finalizar pedido
          </ConfirmarPedido>
        </Descricao>
      );
    }
  }

  const load = setTimeout(handleDisplay, 300);

  function finalizar() {
    api.put(
      `pedido/processar?idPedido=${pedidos[pedidos.length - 1].idPedido}`
    );
    alert("Pedido finalizado");
  }

  return (
    <Container>
      <Titulo>Carrinho</Titulo>
      <CarrinhoContainer>{display}</CarrinhoContainer>
      {descricao}
    </Container>
  );
};
