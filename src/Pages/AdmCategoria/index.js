import React, { useState, useEffect } from "react";
import { Container, Titulo } from "../global-style";
import { Popup } from "../../Components/Popup/index";
import { Input, Form, ButtonContainer, RegistroButton } from "./style";
import { api } from "../../Services/api";
import { TabelaCategorias } from "../../Components/TabelaCategorias";
import BadRequest from "../../Components/BadRequest";

export const AdmCategoria = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [linkImagem, setLinkImagem] = useState("");
  const [isConfirmado, setConfirmado] = useState(false);
  const [listaCategorias, setListaCategorias] = useState([]);
  const [statusAPI, setStatusAPI] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log('Nome :' + nome)
    // console.log('Descricao :' + descricao)
    // console.log('Link :' + linkImagem)
    setNome("");
    setDescricao("");
    setLinkImagem("");
  };

  useEffect(() => {
    carregarAPI();
  }, []);
  console.log(listaCategorias);

  const handleFechar = (event) => {
    setConfirmado(!isConfirmado);
  };

  function carregarAPI() {
    const getCategoriaAPI = async () => {
      try {
        const res = await api.get("categoria");
        console.log(res);
        setStatusAPI(res.status);
        setListaCategorias(res.data);
      } catch (error) {
        console.log(error);
        if (error.code === "ERR_NETWORK") {
          setStatusAPI((e) => 502);
        }
      }
    };
    getCategoriaAPI();
  }

  return (
    <Container>
      <Titulo>Cadastro Categoria</Titulo>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome da Categoria"
          onChange={(event) => setNome(event.target.value)}
          value={nome}
        />
        <Input
          type="text"
          placeholder="Descrição da Categoria"
          onChange={(event) => setDescricao(event.target.value)}
          value={descricao}
        />
        <Input
          type="text"
          placeholder="Link imagem Categoria"
          onChange={(event) => setLinkImagem(event.target.value)}
          value={linkImagem}
        />
        <ButtonContainer>
          <RegistroButton
            type="submit"
            value="Cadastrar"
            onClick={() => setConfirmado(!isConfirmado)}
          />
        </ButtonContainer>
      </Form>
      {isConfirmado ? (
        <Popup
          titulo={"categoria"}
          informacoes={{
            Nome: nome,
            Descricao: descricao,
            Imagem: linkImagem,
          }}
          clickFechar={handleFechar}
        />
      ) : (
        ""
      )}
    <Titulo>Listar Categorias</Titulo>
    {statusAPI === 200 ? <TabelaCategorias lista={listaCategorias}/> : <BadRequest/>}
    </Container>
  );
};
