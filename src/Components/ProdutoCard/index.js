import React, { useState } from "react";
import { PaginaProduto } from "../PaginaProduto";
import { Cards, CardImagem, CardLink } from "./style";

export const ProdutoCard = (props) => {

   function handleClick() {
     props.abrirProduto(() => <PaginaProduto produto={props.produto}></PaginaProduto>);
   }


  return (
    <Cards>
      <a onClick={handleClick}>
        <CardImagem src={`${props.produto.nomeImagemProduto}`} />
      </a>
      <CardLink onClick={handleClick}>
        {props.produto.nomeProduto} - R${props.produto.valorUnitario}
      </CardLink>
    </Cards>
  );
};
