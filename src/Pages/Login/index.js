import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Container, Titulo } from "../global-style";
import { Form, Input, LoginButton, RegistroButton } from "./style";

export const Login = () => {
  return (
    <Container>
      <Titulo>Login</Titulo>
      <Form>
        <Input type="text" placeholder="Email"></Input>
        <Input type="password" placeholder="Senha"></Input>
        <RegistroButton type="submit" value="Pagina de registro"/>
        <LoginButton type="submit" value="Entrar" />
      </Form>
    </Container>
  );
};
