import React, {useState, useContext, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom"
import { Container, Titulo } from "../global-style";
import { Form, FormInput, LoginButton, RegistroButton } from "./style";
import { DataContext } from '../../Context/data'
import {api} from '../../Services/api'

export const Login = () => {

  const {idUsuario, handleSetIdUsuario} = useContext(DataContext)
  const [clienteList, setClienteList] = useState([]);
  let cliente;
  let idCliente;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();


  useEffect(()=>{
    getClientes()
    console.log(clienteList)

  }, [])

  const getClientes = async () => {
    const response = await api.get(`cliente/`)
    setClienteList(response.data)
  }  

  function getIdCliente (email){
    cliente = clienteList.filter(c => c.email === email)
    idCliente = cliente[0].idCliente;
  }

  function handleEmailChange(e){
    setEmail(e.target.value)
  }

  function handlePasswordChange(e){
    setPassword(e.target.value)
  }

  const allowLogin = async (email, password) => {
    const response = await api.get(`cliente/logar_cliente?email=${email}&password=${password}`)
    if (response) {
      alert('Sucesso!')
      handleSetIdUsuario(idCliente)
      navigate("../catalogo")

    } else {
      alert('Usuário ou senha incorretos')
      navigate("../login")
    }      
  }

  function logar() {
    getIdCliente(email);
    allowLogin(email, password);
  }  

  return (
    <Container>
      <Titulo>Login Cliente</Titulo>
      <Form>
        <FormInput onChange={e => handleEmailChange(e)} type="text" placeholder="Email"/>
        <FormInput onChange={e => handlePasswordChange(e)} type="password" placeholder="Senha"/>
        <LoginButton onClick={logar}>Entrar</LoginButton>
        <Link to="/registro" style={{textDecoration: "none"}}><RegistroButton>Não tem uma conta? Cadastre-se</RegistroButton></Link>                
      </Form>
    </Container>
  );
};
