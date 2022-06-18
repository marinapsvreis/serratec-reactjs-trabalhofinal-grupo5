import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Container, Titulo } from "../global-style";
import { Form, FormInput, LoginButton, RegistroButton } from "./style";

export const AdmLogin = () => {
  return (
    <Container>
      <Titulo>Login Administrativo</Titulo>
      <Form>
        <FormInput type="text" placeholder="Email"></FormInput>
        <FormInput type="password" placeholder="Senha"></FormInput>
        <LoginButton type="submit" value="Entrar" />       
      </Form>
    </Container>
  );
};
