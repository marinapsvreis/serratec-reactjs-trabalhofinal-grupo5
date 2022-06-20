import styled from "styled-components";

export const PopupStyle = styled.div`
background-color: rgba(0, 0, 0, 0.5);

display: flex;

position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;

justify-content: center;
align-items: center;

.popup-tela {
    background-color: gray;

    display: flex;
    flex-direction: column;

    padding: 40px;
    width: 55em;

    align-items: center;
    justify-content: center;

    border: 2px solid black;
    border-radius: 10px;
    
}

.popup-tela p {
    font-size: 1.5em;
}

.popup-tela .botoes {
    display: flex;
    gap: 20%;
}

.popup-tela .botoes button {
    background-color: var(--secondary-color);

    font-size: 1.3em;

    padding: 3px;

    border-radius: 10px;

    transition: 250ms;
}

.popup-tela .botoes button:hover {
    background-color: var(--primary-color);
}

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 300px;
  width: 100%;
  max-width: 800px;
  padding-inline: 20px;
  @media (min-width: 1024px){
    padding-inline: 50px;    
    }

`;

export const Input = styled.input`
  height: 3rem;
  font-size: 1.5rem;
`;

export const InputBlock = styled.input`
  background-color: #b8b8b8;
  height: 3rem;
  font-size: 1.5rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
`;

export const RegistroButton = styled.button`
  height: 3rem;
  width: 100%;
  font-size: 1.5rem;
  background-color: var(--secondary-color);
  border-radius: 10px;
  &:hover {
    background-color: #bb5a21;
  }
`;

export const CancelarButton = styled.button`
    height: 3rem;
    width: 100%;
    font-size: 1.5rem;
    background-color: var(--secondary-color);
    border-radius: 10px;
    &:hover {
      background-color: #bb5a21;
    }
`;