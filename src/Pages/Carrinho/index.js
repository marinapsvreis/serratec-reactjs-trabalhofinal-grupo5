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
  const { idUsuario, handleSetIdUsuario } = useContext(DataContext);

  useEffect(() => {
    const getPedidosByClienteId = async () => {
      await api
        .get(`pedido/cliente/${idUsuario}`)
        .then((res) => setPedidos(res.data));
    };
    getPedidosByClienteId();
  }, [idUsuario]);

  useEffect(() => {
    if (pedidos.length > 0) {
      const getItemPedidoByPedidoId = async () => {
        await api
          .get(`itemPedido/pedido/${pedidos[pedidos.length - 1].idPedido}`)
          .then((res) => setItemPedido(res.data));
      };
      getItemPedidoByPedidoId();
    }
  }, [pedidos]);

  useEffect(() => {
    if (itemPedido.length > 0) {
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
      if(newProduto.length >0){
        
      }
    }
  }, [itemPedido]);
  
  function handleDisplay(){
    setDisplay(
      produtos.map((res) => {
        const itemPedidoFiltrado =  itemPedido.filter((response) => response.idProduto == res.idProduto)
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

  const load = setTimeout(handleDisplay,500)

  return (
    <Container>
      <Titulo>Carrinho</Titulo>
      <ItemContainer>{display}</ItemContainer>
    </Container>
  );
};
