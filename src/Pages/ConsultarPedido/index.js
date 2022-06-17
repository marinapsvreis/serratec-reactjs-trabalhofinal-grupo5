import React from "react";
import { useNavigate } from "react-router-dom";
import { BotaoVoltar, BoxPedido, ListaPedidos } from "./style";

function ConsultarPedido(props) {
  const navigate = useNavigate();

  return (
    <>
      <BoxPedido>
        <BotaoVoltar>
          <button onClick={() => navigate("/painel_administrativo")}>
            Voltar
          </button>
        </BotaoVoltar>
        <ListaPedidos>
          <table class="table table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col">Número Pedido</th>
                <th scope="col">Número Produto</th>
                <th scope="col">Quantidade de Itens</th>
                <th scope="col">Preço da Venda</th>
                <th scope="col">Porcentagem de Desconto</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
        </ListaPedidos>
      </BoxPedido>
    </>
  );
}

export default ConsultarPedido;
