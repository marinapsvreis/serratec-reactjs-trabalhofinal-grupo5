import React, {useState} from "react";
import { Container, Titulo } from "../global-style";
import { CardCliente, BoxButtons, EditCliente } from './style'
import { EditarCliente } from '../../Components/EditarCliente'
import {api} from '../../Services/api'

export const Perfil = () => {

  const [cliente, setCliente] = useState();
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [idEndereco, setIdEndereço] = useState('')

  const [id, setId] = useState()
  const [isEditado, setEditado] = useState(false);

  const handleEditar = () => {
      setEditado(!isEditado)
  }

  const getPedidoAPI = async () => {
    const response = await api.get(`cliente?idCliente=${localStorage.getItem('idCliente')}`);    
    setCliente(response.data);
    setNomeCompleto(cliente[0].nomeCompleto)
    setEmail(cliente[0].email)
    setCpf(cliente[0].cpf)
    setTelefone(cliente[0].telefone)
    setDataNascimento(cliente[0].dataNascimento)
    setIdEndereço(cliente[0].idEndereco)           
  }

  getPedidoAPI()

  return (
    <Container>
      {isEditado? <EditarCliente clickFechar={handleEditar} id={id} cliente={cliente[0]}/> : ''}
      <Titulo>Perfil Cliente</Titulo>
      <CardCliente>
        <p>Nome Completo: {nomeCompleto}</p>
        <p>Email: {email}</p>
        <p>Cpf: {cpf}</p>
        <p>Telefone: {telefone}</p>
        <p>Data de Nascimento: {dataNascimento}</p>
        <p>Id Endereço: {idEndereco}</p>
        <BoxButtons>
          <EditCliente onClick={() => {setEditado(!isEditado); setId(e => {localStorage.getItem('idCliente')})}}>Editar</EditCliente>
      </BoxButtons>
      </CardCliente>
    </Container>
  );
};    
