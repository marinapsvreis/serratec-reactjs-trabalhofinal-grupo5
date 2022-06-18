import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { BotoesPainel } from "./style";

function PainelAdministrativo(props) {
  const navigate = useNavigate();

  return (
    <>
      <BotoesPainel>
        <button onClick={() => navigate("/painel_administrativo/consultar_pedido")}>Consultar pedidos</button>
        <button onClick={() => navigate("/painel_administrativo/gerenciador")}>Gerenciar produto/categoria</button>
      </BotoesPainel>
    </>
  );
}

export default PainelAdministrativo;
