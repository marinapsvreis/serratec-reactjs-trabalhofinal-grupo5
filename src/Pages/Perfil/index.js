import React, {useEffect, useState} from "react";
import { Container, Titulo } from "../global-style";
import { CardCliente, BoxButtons, EditCliente, EditEndereco, EditPassword } from './style'
import { EditarCliente } from '../../Components/EditarCliente'
import { EditarEndereco } from '../../Components/EditarEndereco'
import { EditarPassword } from '../../Components/EditarPassword'
import {api} from '../../Services/api'

export const Perfil = () => {

  let count = 0;
  const [cliente, setCliente] = useState();
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [idEndereco, setIdEndereço] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cep, setCep] = useState('')
  const [rua, setRua] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [uf, setUf] = useState('')

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
      const getClienteAPI = async () => {
        const response = await api.get(`cliente/${localStorage.getItem('idCliente')}`);    
        setCliente(response.data);
        setNomeCompleto(cliente.nomeCompleto)
        setEmail(cliente.email)
        setCpf(cliente.cpf)
        setTelefone(cliente.telefone)
        setDataNascimento(cliente.dataNascimento)
        setIdEndereço(cliente.idEndereco)                
      }
      getClienteAPI();
  
      const getEnderecoAPI = async () => {
        const response = await api.get(`endereco/${idEndereco}`);    
          setEndereco(response.data);
          setCep(endereco.cep)
          setRua(endereco.rua)
          setBairro(endereco.bairro)
          setCidade(endereco.cidade)
          setNumero(endereco.numero)
          setComplemento(endereco.complemento)
          setUf(endereco.uf) 
      }
  
      if(idEndereco !== null){
        getEnderecoAPI()
      }
  }
  
  useEffect(() => {
      carregarAPI();    
  });

  return (
    <Container>
      {isEditadoDados? <EditarCliente clickFechar={handleEditarDados} cliente={cliente}/> : ''}
      {isEditadoEndereco? <EditarEndereco clickFechar={handleEditarEndereco} endereco={endereco}/> : ''}
      {isEditadoPassword? <EditarPassword clickFechar={handleEditarPassword} cliente={cliente}/> : ''}
      <Titulo>Perfil Cliente</Titulo>
      <CardCliente>
        <p>Nome Completo: {nomeCompleto}</p>
        <p>Email: {email}</p>
        <p>Cpf: {cpf}</p>
        <p>Telefone: {telefone}</p>
        <p>Data de Nascimento: {dataNascimento}</p>
        <p>Id Endereço: {idEndereco}</p>
        <BoxButtons>
          <EditCliente onClick={() => {setEditadoDados(!isEditadoDados); setId(e => {localStorage.getItem('idCliente')})}}>Editar Dados</EditCliente>
          <EditEndereco onClick={() => {setEditadoEndereco(!isEditadoEndereco); setId(e => {localStorage.getItem('idCliente')})}}>Editar Endereço</EditEndereco>
          <EditPassword onClick={() => {setEditadoPassword(!isEditadoPassword); setId(e => {localStorage.getItem('idCliente')})}}>Reset Senha</EditPassword>
      </BoxButtons>
      </CardCliente>
    </Container>
  );
};    
