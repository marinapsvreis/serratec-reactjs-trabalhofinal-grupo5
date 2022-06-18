import React, { useEffect, useState, useContext } from "react";
import { CardContainer, CatalogoContainer, ReturnButton } from "./style";
import Footer from "../../Components/Footer";
import { CategoriaCard } from "../../Components/CategoriaCard/index";
import { api } from "../../Services/api";
import { Titulo, Container } from "../global-style";
import { DataContext } from "../../Context/data";

export const Catalogo = () => {
  const { idUsuario, handleSetIdUsuario } = useContext(DataContext);

  const [categorias, setCategorias] = useState([]);

  const [display, setDisplay] = useState(null);

  useEffect(() => {
    const getCategoria = async () => {
      await api
        .get("categoria")
        .then((response) => setCategorias(response.data));
    };
    getCategoria();
  }, [display]);

  function displayToMain() {
    setDisplay(
      categorias.map((res) => {
        return <CategoriaCard categoria={res} key={res.idCategoria} />;
      })
    );
  }

  if (display == null && categorias.length !== 0) {
    displayToMain();
  }

  return (
    <>
      <CatalogoContainer>
        <Container className="container">
          <Titulo className="titulo">Catalogo de Produtos</Titulo>
          <CardContainer>{display}</CardContainer>
        </Container>
      </CatalogoContainer>
      <Footer />
    </>
  );
};
