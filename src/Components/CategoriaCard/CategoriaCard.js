import React, { useState } from "react";
import { CatalogoTitulo } from "../../Pages/Catalogo/style";
import { ProdutoCard } from "../ProdutoCard";
import { Cards, CardImagem, CardLink } from "./style";

export const CategoriaCard = (props) => {
  const [categoria] = useState(props.categoria);

  const [produtos] = useState([
    {
      nomeProduto: "Darth Vader",
      descricaoProduto: "Boneco Darth Vader",
      qtdEstoqueProduto: 10,
      valorUnitario: 120,
      nomeImagemProduto: "https://a-static.mlcdn.com.br/800x560/funko-pop-star-wars-01-darth-vader/gamegames/klj67b3xn/fbae4b61e8e162a23ebedaca06eca178.jpg",
      categoria: "Funkos Star Wars",
    },

    {
      nomeProduto: "Luke Skywalker",
      descricaoProduto: "Boneco Luke Skywalker",
      qtdEstoqueProduto: 10,
      valorUnitario: 110,
      nomeImagemProduto: "Boneco Luke Skywalker",
      categoria: "Funkos Star Wars",
    },

    {
      nomeProduto: "Boba feet",
      descricaoProduto: "Boneco Boba feet",
      qtdEstoqueProduto: 10,
      valorUnitario: 110,
      nomeImagemProduto: "Boneco Boba feet",
      categoria: "Funkos Star Wars",
    },

    {
      nomeProduto: "Leia Organa",
      descricaoProduto: "Boneco Leia Organa",
      qtdEstoqueProduto: 10,
      valorUnitario: 110,
      nomeImagemProduto: "Boneco Leia Organa",
      categoria: "Funkos Star Wars",
    },

    {
      nomeProduto: "Yoda",
      descricaoProduto: "Boneco Yoda",
      qtdEstoqueProduto: 10,
      valorUnitario: 110,
      nomeImagemProduto: "Boneco Yoda",
      categoria: "Funkos Star Wars",
    },

    {
      nomeProduto: "Batman",
      descricaoProduto: "Boneco Batman",
      qtdEstoqueProduto: 10,
      valorUnitario: 110,
      nomeImagemProduto: "Boneco Batman",
      categoria: "Funkos Herois DC",
    },

    {
      nomeProduto: "Mulher-Maravilha",
      descricaoProduto: "Boneco Mulher-Maravilha",
      qtdEstoqueProduto: 10,
      valorUnitario: 120,
      nomeImagemProduto: "Boneco Mulher-Maravilha",
      categoria: "Funkos Herois DC",
    },

    {
      nomeProduto: "Lanterna Verde",
      descricaoProduto: "Boneco Lanterna Verde",
      qtdEstoqueProduto: 10,
      valorUnitario: 120,
      nomeImagemProduto: "Boneco Lanterna Verde",
      categoria: "Funkos Herois DC",
    },

    {
      nomeProduto: "Aquaman",
      descricaoProduto: "Boneco Aquaman",
      qtdEstoqueProduto: 10,
      valorUnitario: 120,
      nomeImagemProduto: "Boneco Aquaman",
      categoria: "Funkos Herois DC",
    },
  ]);

  function handleClick() {
    props.funcaoFiltro(() =>
      produtos
        .filter((produto) => produto.categoria === categoria.nomeCategoria)
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
        <CardImagem src={`${categoria.imgLink}`} />
      </a>
      <CardLink onClick={handleClick}>{categoria.nomeCategoria}</CardLink>
    </Cards>
  );
};
