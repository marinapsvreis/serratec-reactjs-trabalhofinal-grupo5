import React, { useState } from "react";
import {
  CardContainer,
  CatalogoTitulo,
  CatalogoContainer,
  ReturnButton,
} from "./style";
import { CategoriaCard } from "../../Components/CategoriaCard/CategoriaCard";

export const Catalogo = () => {
  const [categorias] = useState([
    {
      nome: "Funkos Star Wars",
      descricao: "Filmes",
      imgLink: "https://m.media-amazon.com/images/I/61MDv8vAIpL._AC_SX425_.jpg",
    },
    {
      nome: "Funkos Genshin Impact",
      descricao: "Jogo",
      imgLink:
        "https://www.lojatsc.com.br/wp-content/uploads/2022/03/Funko-Pop-Genshin-Impact-Aether-160.png",
    },
    {
      nome: "Funkos Herois DC",
      descricao: "Quadrinhos/Filmes",
      imgLink:
        "https://www.lojatsc.com.br/wp-content/uploads/2022/03/Funko-Pop-Genshin-Impact-Aether-160.png",
    },
    {
      nome: "Funkos Overwatch",
      descricao: "Jogo",
      imgLink:
        "https://www.lojatsc.com.br/wp-content/uploads/2022/03/Funko-Pop-Genshin-Impact-Aether-160.png",
    },
    {
      nome: "Funkos Disney",
      descricao: "Filmes",
      imgLink:
        "https://www.lojatsc.com.br/wp-content/uploads/2022/03/Funko-Pop-Genshin-Impact-Aether-160.png",
    },
    {
      nome: "Funkos Harry Potter",
      descricao: "Filmes/Livros",
      imgLink:
        "https://www.lojatsc.com.br/wp-content/uploads/2022/03/Funko-Pop-Genshin-Impact-Aether-160.png",
    },
  ]);

  const [display, setDisplay] = useState(null);

  function handleDisplay(newDisplay) {
    setDisplay(newDisplay);
  }

  function displayToMain () {
    setDisplay(
      categorias.map((res) => {
        return <CategoriaCard categoria={res} funcaoFiltro={handleDisplay} />;
      })
    );
  }

  if (display == null) {
    displayToMain()
  }

  return (
    <CatalogoContainer>
      <CatalogoTitulo>Catalogo de Produtos</CatalogoTitulo>
      <ReturnButton onClick={displayToMain}>Voltar para as categoria</ReturnButton>
      <CardContainer>{display}</CardContainer>
    </CatalogoContainer>
  );
};
