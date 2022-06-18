import React from "react";
import { Link } from "react-router-dom";
import { Cards, CardImagem, CardLink } from "./style";

export const ProdutoCard = ({ produto, categoria, id }) => {

  return (
    <Cards>
      <Link className="link" to ={`/catalogo/${categoria}&${id}/${produto.idProduto}`}>
        <CardImagem src={`${produto.nomeImagemProduto}`} />
      
      <CardLink>
        {produto.nomeProduto} - R${produto.valorUnitario}
      </CardLink>
      </Link>
    </Cards>
  );
};
