import React, { useState } from "react";
import { Container, Titulo } from "../global-style";
import { Input, Form, ButtonContainer, RegistroButton} from "./style";
import { api } from "../../Services/api"
import { PopupRespostaAPI } from "../../Components/PopupRespostaAPI"
import { Loader } from "../../Components/Loader";

export const Registro = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [senha2, setSenha2] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [cep, setCep] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [statusAPI, setStatusAPI] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const [errorMessageHead, setErrorMessageHead] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  function enviarInformacoes() {
    setLoading(!isLoading)
    setTimeout(function() {
      const postClienteAPI = async () => {
        try {
          const res = await api.post("cliente", {
            email: email,
            password: senha,
            nomeCompleto: nome,
            cpf: cpf,
            telefone: telefone,
            dataNascimento: (dataNascimento.split('-').reverse().join('/'))
          });
          setStatusAPI(e => res.status)
          setLoading(e => false)
          console.log(res)
        } catch (error) {
          console.log(error)
          setStatusAPI(e => error.response.data.status)
          setErrorMessageHead(e => error.response.data.message)
          setErrorMessage(e => error.response.data.details[0])
          setLoading(e => false)
        }
      }
      postClienteAPI();
    },2000)  
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(nome === '' || email === '' || senha === '' || senha2 === '' || cpf === '' || telefone === '' || dataNascimento === '' || cep === '' || numero === '' || complemento === '') {
      alert('Não deixe os campos vazios!')
    } else if(senha !== senha2) {
      alert('Suas senhas não coincidem! tente novamente')
    } else {
      enviarInformacoes()
    }
  };

  const handleClick = () => {
    console.log(statusAPI)
    setStatusAPI(e => 0)
  }

  return (
    <Container>
      <Titulo>Cadastro Cliente</Titulo>
      <Form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Nome Completo" onChange={(event) => setNome(event.target.value)}/>
        <Input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
        <div className="senhas">
          <Input type='password' placeholder="Senha" onChange={(event) => setSenha(event.target.value)}/>
          <Input type='password' placeholder="Confirmar Senha" onChange={(event) => setSenha2(event.target.value)}/>
        </div>
        <Input type="text" placeholder="CPF" onChange={(event) => setCpf(event.target.value)}/>
        <Input type="tel" placeholder="Telefone" onChange={(event) => setTelefone(event.target.value)}/>
        <Input type="date" placeholder="Data de Nascimento" onChange={(event) => setDataNascimento(event.target.value)}/>
        <Input type="text" placeholder="CEP" onChange={(event) => setCep(event.target.value)}/>
        <Input type="text" placeholder="Numero" onChange={(event) => setNumero(event.target.value)}/>
        <Input type="text" placeholder="Complemento" onChange={(event) => setComplemento(event.target.value)}/>
        <ButtonContainer>
          <RegistroButton onClick={handleSubmit}>Completar o Registro</RegistroButton>
        </ButtonContainer>
      </Form>
      {isLoading === true ? <Loader/> : ''}
      {statusAPI === 201 ? <PopupRespostaAPI titulo={'cliente'} status={'sucesso'}/> : ''}
      {statusAPI === 400 ? <PopupRespostaAPI titulo={'cliente'} status={'error'} errorHead={errorMessageHead} errorMessage={errorMessage} click={handleClick}/> : ''}
    </Container>
  );
};
