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
  const [categorias,setCategoria] = useState([]);

  const [display, setDisplay] = useState(null);

  useEffect(() => {
    const getCategoria = async () => {
      await api.get("categoria").then(response => setCategoria(response.data))
    }
    getCategoria()
  }, [display])
  
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
      <Titulo>Catalogo de Produtos</Titulo>
      <ReturnButton onClick={displayToMain}>Voltar para as categoria</ReturnButton>
      <CardContainer>{display}</CardContainer>
    </CatalogoContainer>
  );
};
