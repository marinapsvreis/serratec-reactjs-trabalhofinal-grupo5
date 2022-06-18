import React, { useState } from "react";
import { Container, Titulo } from "../global-style";
import Popup from "../../Components/Popup";
import {
  Input,
  Form,
  ButtonContainer,
  RegistroButton,
} from "./style";

export const AdmCategoria = () => {

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [linkImagem, setLinkImagem] = useState('');
  const [isConfirmado, setConfirmado] = useState(false)
  const meuObjeto = {
    'nome': 'Kaua',
    'idade': 18
  }

  const handleSubmit = event => {
    event.preventDefault();

    console.log('Nome :' + nome)
    console.log('Descricao :' + descricao)
    console.log('Link :' + linkImagem)
    setNome('');
    setDescricao('');
    setLinkImagem('');
  };

  return (
    <Container>
      <Titulo>Cadastro Categoria</Titulo>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Nome da Categoria" onChange={event => setNome(event.target.value)} value={nome}/>
        <Input type="text" placeholder="Descrição da Categoria" onChange={event => setDescricao(event.target.value)} value={descricao}/>
        <Input type="text" placeholder="Link imagem Categoria"onChange={event => setLinkImagem(event.target.value)} value={linkImagem}/>
        <ButtonContainer>
          <RegistroButton type="submit" value="Cadastrar" onClick={() => setConfirmado(true)}/>
        </ButtonContainer>
      </Form>
      {isConfirmado ? <Popup titulo={'categoria'} informacoes={meuObjeto}/> : ''}
    </Container>
  );
};
