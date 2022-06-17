import React, { useState } from "react";
import { PaginaProduto } from "../PaginaProduto";
import { Cards, CardImagem, CardLink } from "./style";

export const ProdutoCard = (props) => {
  const imagem = props.produto.nomeImagemProduto.replace('C:\\Users\\pedro\\Code\\react\\serratec-reactjs-trabalhofinal-grupo5\\public\\','/')

   function handleClick() {
     props.abrirProduto(() => <PaginaProduto produto={props.produto} imagem={imagem}></PaginaProduto>);
   }

  return (
    <Cards>
      <a onClick={handleClick}>
        <CardImagem src={process.env.PUBLIC_URL + imagem + ".png"} />
      </a>
      <CardLink onClick={handleClick}>
        {props.produto.nomeProduto} - R${props.produto.valorUnitario}
      </CardLink>
    </Cards>
  );
};
