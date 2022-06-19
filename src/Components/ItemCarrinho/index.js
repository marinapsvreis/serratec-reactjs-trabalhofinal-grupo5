import React from "react";
import { api } from "../../Services/api";
import { ButtonDiv, Descricao, Imagem, ItemContainer, DeletarButao } from "./style";
import { useParams, useNavigate } from "react-router-dom";

export const ItemCarrinho = ({ produto, itemPedido }) => {
  let navigate = useNavigate();

  function deletarItemPedido(){
    api.delete(`itemPedido?idItemPedido=${itemPedido[0].idItemPedido}`)
    alert("Produto deletado do pedido")
    window.location.reload(false)
  }

  if (produto === null) {
    return null;
  }

  return (
    <ItemContainer>
      <Imagem src={`${produto.nomeImagemProduto}`} />
      <Descricao>
        Nome do produto: {produto.nomeProduto} <br />
        Preço por Unidade: {produto.valorUnitario} <br />
        Quantidade: {itemPedido[0].quantidadeItemPedido} 
        <ButtonDiv>
        <DeletarButao onClick={deletarItemPedido}>Deletar o Item</DeletarButao>
        </ButtonDiv>
      </Descricao>
    </ItemContainer>
  );
};
