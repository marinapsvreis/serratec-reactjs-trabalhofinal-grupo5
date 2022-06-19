import { useNavigate } from "react-router-dom";
import { BotoesPainel } from "./style";

function PainelAdministrativo(props) {
  const navigate = useNavigate();

  return (
    <>
      <BotoesPainel>
        <button onClick={() => navigate("/painel_administrativo/pedido")}>Pedidos</button>
        <button onClick={() => navigate("/painel_administrativo/cliente")}>Clientes</button>
        <button onClick={() => navigate("/painel_administrativo/categoria")}>Categorias</button>
        <button onClick={() => navigate("/painel_administrativo/produto")}>Produtos</button>
      </BotoesPainel>
    </>
  );
}

export default PainelAdministrativo;
