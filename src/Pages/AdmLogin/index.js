import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { Container, Titulo } from "../global-style";
import { StatusLogAdm, Form, FormInput, LoginButton } from "./style";

export const AdmLogin = () => {
  
      
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
      localStorage.setItem('admin', '1')
      alert('Sucesso!')      
      navigate("../painel_administrativo")    

    } else {
      localStorage.removeItem('admin')
      alert('Usuário ou senha incorretos')
      navigate("../admlogin")
    }
  }

  function limparLocalStorage(){
    localStorage.removeItem('admin')
    window.location.reload(true);
  }

  function goToPanel(){
    navigate("../painel_administrativo")
  }
  
  return (
    <Container>
      <Titulo>Login Administrativo</Titulo>
      {localStorage.getItem('admin') !== null ? 
      <StatusLogAdm>
        <p>Admin já autenticado!</p>
        <div>
          <button onClick={goToPanel}>Painel</button>
          <button onClick={limparLocalStorage}>Deslogar</button>
        </div>
      </StatusLogAdm> 
      : ''}
      <Form>
        <FormInput onChange={e => handleLoginChange(e)} type="text" placeholder="Login"></FormInput>
        <FormInput onChange={e => handleSenhaChange(e)} type="password" placeholder="Senha"></FormInput>
      <LoginButton onClick={logar}>Entrar</LoginButton>
               
      </Form>
    </Container>
  );
};
