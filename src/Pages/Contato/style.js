import styled from 'styled-components'

export const ContainerSobre = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    margin-top: 10rem; 

    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 92.5vh;
      margin-top: 1rem; 
      padding-inline: 50px;
    }
`;

export const ContainerEsquerdo = styled.div`
    padding-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 1024px) {
    width: 800px;
    }
`;

export const ContainerDireito = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 1024px) {
    width: 800px;
    }
`;

export const Formulario = styled.form`
    height: 35.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const FormularioInput = styled.input`
  width: 100%;
  font-size: 1.6rem;
`;

export const FormularioTextArea = styled.textarea`
  width: 100%;
  font-size: 1.6rem;
`;

export const FormularioBotao = styled.input`
  width: 100%;
  font-size: 1.6rem;
  background-color: var(--secondary-color);
  color: var(--background);

  font-size: 1.6rem;

  text-transform: uppercase;

  margin-bottom: 5rem;
  &:hover{
    background-color: var(--primary-color);
  }
`;





