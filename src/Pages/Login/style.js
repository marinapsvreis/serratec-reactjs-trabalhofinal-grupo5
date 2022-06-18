import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;
`;

export const FormInput = styled.input`
  height: 3rem;
  font-size: 1.5rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
`

export const LoginButton = styled.input`
  height: 3rem;
  width: 100%;
  font-size: 1.5rem;
  background-color: var(--secondary-color);
  border: none;
  &:hover {
    background-color: #456bf6;
  }
`;
export const RegistroButton = styled.p`
  height: 3rem;
  width: 100%;
  font-size: 1.5rem;
  color: var(--primary-color);
  text-decoration: none;
  text-align: center;
  &:hover{
    color: #456bf6;
  }
`;
