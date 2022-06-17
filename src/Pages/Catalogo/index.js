import React, { useEffect, useState } from "react";
import {
  CardContainer,
  CatalogoContainer,
  ReturnButton,
} from "./style";
import { CategoriaCard } from "../../Components/CategoriaCard/CategoriaCard";
import {api} from "../../Services/api"
import { Titulo } from "../global-style";

export const Catalogo = () => {
  const [categorias,setCategorias] = useState([]);

  const [display, setDisplay] = useState(null);

  useEffect(() => {
    const getCategoria = async () => {
      await api.get("categoria").then(response => setCategorias(response.data))
    }
    getCategoria()
  }, [categorias])
  
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

  if (display == null && categorias.length !== 0) {
    displayToMain()
  }

  return (
    <CatalogoContainer>
      <Titulo>Catalogo de Produtos</Titulo>
      <ReturnButton onClick={displayToMain}>Voltar para as categoria</ReturnButton>
      <CardContainer>{display}</CardContainer>
    </CatalogoContainer>
  );
};
