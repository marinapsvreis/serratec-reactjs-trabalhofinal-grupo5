import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;
`;

export const Input = styled.input`
  height: 3rem;
  font-size: 1.5rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
`

export const LoginButton = styled.input`
  height: 3rem;
  width: 30%;
  font-size: 1.5rem;
  background-color: var(--secondary-color);
  &:hover {
    background-color: #456bf6;
  }
`;
export const RegistroButton = styled.input`
  height: 3rem;
  width: 70%;
  font-size: 1.5rem;
  background-color: var(--primary-color);
  &:hover {
    background-color: #bb5a21;
  }
`;


