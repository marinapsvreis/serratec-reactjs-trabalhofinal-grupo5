import React, {useEffect, useState} from "react";
import { Container, Titulo } from "../global-style";
import { CardCliente, BoxButtons, EditCliente, EditEndereco, EditPassword } from './style'
import { EditarCliente } from '../../Components/EditarCliente'
import { EditarEndereco } from '../../Components/EditarEndereco'
import { EditarPassword } from '../../Components/EditarPassword'
import {api} from '../../Services/api'

export const Perfil = () => {

  const [cliente, setCliente] = useState({});
  const [endereco, setEndereco] = useState({})

  const [id, setId] = useState()
  const [isEditadoDados, setEditadoDados] = useState(false);
  const [isEditadoEndereco, setEditadoEndereco] = useState(false);
  const [isEditadoPassword, setEditadoPassword] = useState(false);

  const handleEditarDados = () => {
      setEditadoDados(!isEditadoDados)
  }

  const handleEditarEndereco = () => {
    setEditadoEndereco(!isEditadoEndereco)
  }

  const handleEditarPassword = () => {
    setEditadoPassword(!isEditadoPassword)
  }  

  function carregarAPI() {

    api.get(`cliente/${localStorage.getItem('idCliente')}`)
    .then(res => setCliente(res.data))
    
    api.get(`endereco/${cliente.idEndereco}`)
    .then(res => setEndereco(res.data))

  }

    useEffect(() => {
      carregarAPI();    
    }, [cliente, endereco]);


    return (
      <Container>
        {isEditadoDados? <EditarCliente clickFechar={handleEditarDados} cliente={cliente}/> : ''}
        {isEditadoEndereco? <EditarEndereco clickFechar={handleEditarEndereco} endereco={endereco}/> : ''}
        {isEditadoPassword? <EditarPassword clickFechar={handleEditarPassword} cliente={cliente}/> : ''}
        <Titulo>Perfil Cliente</Titulo>
        <CardCliente>
          <p>Nome Completo: {cliente.nomeCompleto}</p>
          <p>Email: {cliente.email}</p>
          <p>Cpf: {cliente.cpf}</p>
          <p>Telefone: {cliente.telefone}</p>
          <p>Data de Nascimento: {cliente.dataNascimento}</p>
          <p>Id Endereço: {cliente.idEndereco}</p>
          <BoxButtons>
            <EditCliente onClick={() => {setEditadoDados(!isEditadoDados)}}>Editar Dados</EditCliente>
            <EditEndereco onClick={() => {setEditadoEndereco(!isEditadoEndereco)}}>Editar Endereço</EditEndereco>
            <EditPassword onClick={() => {setEditadoPassword(!isEditadoPassword)}}>Reset Senha</EditPassword>
        </BoxButtons>
        </CardCliente>
      </Container>
    );
  };  
