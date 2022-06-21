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
  const [statusAPI, setStatusAPI] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const [errorMessageHead, setErrorMessageHead] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  function formatarCPF(cpf){
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  function enviarInformacoes() {
    setLoading(e => true)
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
          if(res.status === 201) {
            console.log('iniciando post endereco')
            postEnderecoCliente()
          }
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
    },1000)  
  }

    async function postEnderecoCliente(){
      try {
        const res = await api.get("cliente")
        let clienteFiltrado = res.data.filter(c => c.cpf === formatarCPF(cpf))[0]
        const res2 = await api.post(`endereco/salvar?idCliente=${clienteFiltrado.idCliente}&cep=${cep}&numero=${numero}`)
        console.log(res2)
      } catch (error) {
          console.log(error)
          setStatusAPI(e => error.response.data.status)
          setErrorMessageHead(e => error.response.data.message)
          setErrorMessage(e => error.response.data.details[0])
          setLoading(e => false)
        }
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(cep.length)
    if(nome === '' || email === '' || senha === '' || senha2 === '' || cpf === '' || telefone === '' || dataNascimento === '' || cep === '' || numero === '') {
      alert('Não deixe os campos vazios!')
    } else if(senha !== senha2) {
      alert('Suas senhas não coincidem! tente novamente')
    } else if(cep.length !== 9 && cep.length !== 8) {
      alert('CEP inválido')
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
        <ButtonContainer>
          <RegistroButton onClick={handleSubmit}>Completar o Registro</RegistroButton>
        </ButtonContainer>
      </Form>
      {isLoading === true ? <Loader/> : ''}
      {statusAPI === 201 ? <PopupRespostaAPI titulo={'cliente'} status={'sucesso'} tipo={'registrar'}/> : ''}
      {statusAPI === 400 ? <PopupRespostaAPI titulo={'cliente'} status={'error'} errorHead={errorMessageHead} errorMessage={errorMessage} click={handleClick}/> : ''}
    </Container>
  );
};
