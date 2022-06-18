import React, {useState, useContext} from "react";
import {Link, useNavigate} from "react-router-dom"
import { Container, Titulo } from "../global-style";
import { Form, FormInput, LoginButton, RegistroButton } from "./style";
import { DataContext } from '../../Context/data'

export const Login = () => {

  const {idUsuario, handleSetIdUsuario} = useContext(DataContext)

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  let navigate = useNavigate();

  function handleLoginChange(e){
    setLogin(e.target.value)
  }

  function handleSenhaChange(e){
    setSenha(e.target.value)
  }
  function logar() {

    if (login == 'teste' && senha == 'teste') {
      alert('Sucesso!')
      handleSetIdUsuario(1)
      navigate("../catalogo")
      
    } else if(login == 'teste2' && senha == 'teste2'){
      alert('Sucesso!')
      handleSetIdUsuario(2)
      navigate("../catalogo")

    } else {
      alert('Usuário ou senha incorretos')
      navigate("../login")
    }
  }  

  return (
    <Container>
      <Titulo>Login Cliente</Titulo>
      <Form>
        <FormInput onChange={e => handleLoginChange(e)} type="text" placeholder="Email"></FormInput>
        <FormInput onChange={e => handleSenhaChange(e)} type="password" placeholder="Senha"></FormInput>
        <LoginButton onClick={logar} type="submit" value="Entrar" />
        <Link to="/registro" style={{textDecoration: "none"}}><RegistroButton>Não tem uma conta? Cadastre-se</RegistroButton></Link>
                
      </Form>
    </Container>
  );
};
