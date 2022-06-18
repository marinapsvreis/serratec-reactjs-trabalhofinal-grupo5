import React, { useState, useEffect } from "react";
import { ProdutoCard } from "../ProdutoCard";
import { Cards, CardImagem, CardLink } from "./style";
import {api} from "../../Services/api"
import { Link } from "react-router-dom";

export const CategoriaCard = ( {categoria} ) => {

  return (
    <Cards>
      <Link to={`/catalogo/${categoria.nomeCategoria}&${categoria.idCategoria}`}>
        <CardImagem src={`${categoria.imagemCategoria}`} />
      
      <CardLink>{categoria.nomeCategoria}</CardLink>
      </Link>
    </Cards>
  );
};
