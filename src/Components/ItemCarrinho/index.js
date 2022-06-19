import React from "react";
import { ButtonDiv, Descricao, Imagem, ItemContainer, QuantidadeButao } from "./style";

export const ItemCarrinho = ({ produto, itemPedido }) => {
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
        <QuantidadeButao className="diminuir">-</QuantidadeButao>
        <QuantidadeButao className="aumentar">+</QuantidadeButao>
        </ButtonDiv>
      </Descricao>
    </ItemContainer>
  );
};
