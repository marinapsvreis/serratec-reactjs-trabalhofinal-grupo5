import React, { useContext, useEffect, useState } from "react";
import { Container, Titulo } from "../global-style";
import { api } from "../../Services/api";
import { DataContext } from "../../Context/data";
import { ItemContainer } from "../../Components/ItemCarrinho/style";
import { ItemCarrinho } from "../../Components/ItemCarrinho";

export const Carrinho = () => {
  const [pedidos, setPedidos] = useState([]);
  const [itemPedido, setItemPedido] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [display, setDisplay] = useState(null);
  const [listExists, setListExists] = useState(false);
  const [nextRequest, setNextRequest] = useState(false);
  const { idUsuario, handleSetIdUsuario } = useContext(DataContext);

  useEffect(() => {
    if (idUsuario === 0) {
      setDisplay(
        <Container>
          <Titulo>Por favor faça login para vizualizar seu Carrinho</Titulo>
        </Container>
      );
    } else {
      const getPedidosByClienteId = async () => {
        await api
          .get(`pedido/cliente/${idUsuario}`)
          .then((res) => setPedidos(res.data));
      };
      getPedidosByClienteId();
      setNextRequest(true);
    }
  }, [idUsuario]);

  useEffect(() => {
    if (pedidos.length !== 0 && nextRequest === true) {
      if (pedidos[pedidos.length - 1].status === true) {
        console.log("teste 1");
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
        console.log(itemPedido);
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
        produtos.map((res) => {
          const itemPedidoFiltrado = itemPedido.filter(
            (response) => response.idProduto == res.idProduto
          );
          return (
            <ItemCarrinho
              produto={res}
              itemPedido={itemPedidoFiltrado}
              key={res.idProduto}
            />
          );
        })
      );
    }
  }

  const load = setTimeout(handleDisplay, 300);

  return (
    <Container>
      <Titulo>Carrinho</Titulo>
      <ItemContainer>{display}</ItemContainer>
    </Container>
  );
};