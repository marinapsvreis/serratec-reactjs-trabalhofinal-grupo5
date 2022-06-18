import React, { useContext, useEffect, useState } from "react";
import { Container, Titulo } from "../global-style";
import { api } from "../../Services/api";
import { DataContext } from "../../Context/data";

export const Carrinho = () => {
  const [pedidos, setPedidos] = useState([]);
  const [itemPedido, setItemPedido] = useState([]);
  const { idUsuario, handleSetIdUsuario } = useContext(DataContext);

  useEffect(() => {
    const getPedidosByClienteId = async () => {
      await api
        .get(`pedido/cliente/${idUsuario}`)
        .then((response) => setPedidos(response.data));
    };
    getPedidosByClienteId();

    const getItemPedidoByPedidoId = async () => {
      await api
        .get(`itemPedido/pedido/${pedidos[pedidos.length - 1].idPedido}`)
        .then((response) => setItemPedido(response.data));
    };
    getItemPedidoByPedidoId();
  });

  if (itemPedido == null) {
    return null;
  }

  return (
    <Container>
      <Titulo>Carrinho</Titulo>
    </Container>
  );
};
