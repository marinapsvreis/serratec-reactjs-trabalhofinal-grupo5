import React, { useState, useEffect } from "react";
import { ProdutoCard } from "../ProdutoCard";
import { Cards, CardImagem, CardLink } from "./style";
import {api} from "../../Services/api"

export const CategoriaCard = (props) => {
  const [categoria] = useState(props.categoria);

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const getProduto = async () => {
      await api.get("produto").then(response => setProdutos(response.data))
    }
    getProduto()
  }, [categoria])

  function handleClick() {
    props.funcaoFiltro(() =>
      produtos
        .filter((produto) => produto.idCategoria === categoria.idCategoria)
        .map((res) => (
          <>
            <ProdutoCard produto={res} abrirProduto={props.funcaoFiltro}></ProdutoCard>
          </>
        ))
    );
  }

  return (
    <Cards>
      <a onClick={handleClick}>
        <CardImagem src={`${categoria.imagemCategoria}`} />
      </a>
      <CardLink onClick={handleClick}>{categoria.nomeCategoria}</CardLink>
    </Cards>
  );
};
