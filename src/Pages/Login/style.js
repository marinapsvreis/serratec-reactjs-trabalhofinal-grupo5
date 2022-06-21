import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  @media (min-width: 1024px){
    width: 50%;
  }
`;

export const FormInput = styled.input`
  height: 3rem;
  font-size: 1.5rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
`

export const LoginButton = styled.button`
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

export const AdmButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: var(--primary-color);
  &:hover{
    background-color: var(--secondary-color);
  }
`;
