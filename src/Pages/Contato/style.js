import styled from 'styled-components'

export const ContainerEsquerdo = styled.div`
    padding-block: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 1024px) {
      align-items: center;
      height: 92.5vh;
    }
`;

export const ContainerDireito = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
      align-items: center;
    @media (min-width: 1024px) {
      height: 92.5vh;
    }
`;

export const Formulario = styled.form`
    padding-inline: 2rem;
    height: 35.5rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: 1024px) {
      width: 40vw;
    }
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





