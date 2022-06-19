import React from "react";
import { Descricao, Imagem, ItemContainer } from "./style";

export const ItemCarrinho = ({ produto, itemPedido }) => {

  if(produto === null) {
    return null;
  }

  return (
    <ItemContainer>
      <Imagem src={`${produto.nomeImagemProduto}`} />
      <Descricao>
        {itemPedido[0].idPedido} <br/>
        {produto.nomeProduto} <br/>
        {itemPedido[0].quantidadeItemPedido} <br/>
        {produto.valorUnitario} <br/>
        {itemPedido[0].valorBrutoItemPedido} <br/>
        {itemPedido[0].valorLiquidoItemPedido} 
      </Descricao>
    </ItemContainer>
  );
};
