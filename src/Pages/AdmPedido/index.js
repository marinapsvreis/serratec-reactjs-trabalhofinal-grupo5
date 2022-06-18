import React, { useState, useEffect } from "react";
import BadRequest from "../../Components/BadRequest";
import TabelaPedidos from "../../Components/TabelaPedidos/index";

import { api } from "../../Services/api";

function AdmPedido(props) {
  const [listaPedidos, setListaPedidos] = useState([]);
  const [statusAPI, setStatusAPI] = useState(0)

  useEffect(() => {
    carregarAPI();
  }, []);

  function carregarAPI() {
    const getPedidoAPI = async () => {
      try {
        const res = await api.get("pedido");
        setStatusAPI(res.status)
        setListaPedidos(res.data);
      } catch (error) {
        if(error.code === 'ERR_NETWORK') {
          setStatusAPI(e => 502)
        }
      }
    };
    getPedidoAPI();
  }

  console.log(statusAPI)

  return (
    <>
    {statusAPI === 200 ? <TabelaPedidos lista={listaPedidos}/> : <BadRequest/>}
    </>
  );
}

export default AdmPedido;
