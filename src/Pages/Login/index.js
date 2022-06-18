import React from "react";
import {Link} from "react-router-dom"
import { Container, Titulo } from "../global-style";
import { Form, FormInput, LoginButton, RegistroButton } from "./style";

export const Login = () => {
  return (
    <Container>
      <Titulo>Login Cliente</Titulo>
      <Form>
        <FormInput type="text" placeholder="Email"></FormInput>
        <FormInput type="password" placeholder="Senha"></FormInput>
        <LoginButton type="submit" value="Entrar" />
        <Link to="/registro" style={{textDecoration: "none"}}><RegistroButton>Não tem uma conta? Cadastre-se</RegistroButton></Link>
                
      </Form>
    </Container>
  );
};
