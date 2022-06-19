import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { Container, Titulo } from "../global-style";
import { Form, FormInput, LoginButton } from "./style";
import { DataContext } from "../../Context/data";

export const AdmLogin = () => {
  
  const { isAdmin, handleSetIsAdmin } = React.useContext(DataContext);
      
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
    if (login === 'admin' && senha === 'admin') {
      handleSetIsAdmin(1)
      alert('Sucesso!')      
      navigate("../painel_administrativo")    

    } else {
      handleSetIsAdmin(0)
      alert('Usuário ou senha incorretos')
      navigate("../admlogin")
    }
  }
  
  return (
    <Container>
      <Titulo>Login Administrativo</Titulo>
      <Form>
        <FormInput onChange={e => handleLoginChange(e)} type="text" placeholder="Login"></FormInput>
        <FormInput onChange={e => handleSenhaChange(e)} type="password" placeholder="Senha"></FormInput>
      <LoginButton onClick={logar}>Entrar</LoginButton>
               
      </Form>
    </Container>
  );
};
