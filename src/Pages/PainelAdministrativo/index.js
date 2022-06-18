import { useNavigate } from "react-router-dom";
import { BotoesPainel } from "./style";

function PainelAdministrativo(props) {
  const navigate = useNavigate();

  return (
    <>
      <BotoesPainel>
        <button onClick={() => navigate("/painel_administrativo/consultar_pedido")}>Consultar pedidos</button>
        <button onClick={() => navigate("/painel_administrativo/cadastrar_categoria")}>Cadastrar categoria</button>
        <button onClick={() => navigate("/painel_administrativo/editar_categoria")}>Editar categoria</button>
        <button onClick={() => navigate("/painel_administrativo/cadastrar_produto")}>Cadastrar produto</button>
        <button onClick={() => navigate("/painel_administrativo/cadastrar_produto")}>Editar produto</button>
      </BotoesPainel>
    </>
  );
}

export default PainelAdministrativo;
