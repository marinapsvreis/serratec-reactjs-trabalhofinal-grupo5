import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BotaoVoltar, BoxPedido, ListaPedidos } from "./style";
import { api } from "../../Services/api";

function ConsultarPedido(props) {
  const navigate = useNavigate();
  const [listPedidos, setListPedidos] = useState([]);

  useEffect(() => {
    carregarAPI();
  }, []);

  function carregarAPI() {
    const getPedidoAPI = async () => {
      const res = await api.get("pedido");
      setListPedidos(res.data);
    };
    getPedidoAPI();
  }

  return (
    <>
      <BoxPedido>
        <BotaoVoltar>
          <button onClick={() => navigate("/painel_administrativo")}>
            Voltar
          </button>
        </BotaoVoltar>
        <ListaPedidos>
          <table className="table table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col">Número Pedido</th>
                <th scope="col">Cliente</th>
                <th scope="col">Status</th>
                {window.innerWidth <= 898 ? <><th scope="col">Detalhes</th></>: ''}
                {window.innerWidth >= 899 ? <><th scope="col">Data Pedido</th>
                <th scope="col">Data de Entrega</th>
                <th scope="col">Data de Envio</th>
                <th scope="col">Valor Total do Pedido</th>
                <th scope="col">% de Desconto</th>
                <th scope="col">Total Liquido</th></> : ''}
              </tr>
            </thead>
            <tbody>
            {listPedidos !== [] ? listPedidos.map(res => {
              console.log(res)
              return <tr key={res.idPedido}>
              <td>{res.idPedido}</td>
              <td>{res.idCliente}</td>
              <td>{res.status === true ? 'Enviado' : 'Pendente'}</td>
              {window.innerWidth <= 898 ? <><td><a href="~">Exibir</a></td></>: ''}
              {window.innerWidth >= 899 ? <>
                <td>{res.dataPedido !== null  ? res.dataPedido : '...'}</td>
              <td>{res.dataEntrega !== null  ? res.dataEntrega : '...'}</td>
              <td>{res.dataEnvio !== null  ? res.dataEntrega : '...'}</td>
              <td>R$ {res.valorTotalPedidoBruto}</td>
              <td>{res.valorTotalDescontoPedido}%</td>
              <td>R$ {res.valorTotalPedidoLiquido}</td></> : ''}
              
            </tr> }) : ''}
            </tbody>
          </table>
        </ListaPedidos>
      </BoxPedido>
    </>
  );
}

export default ConsultarPedido;
