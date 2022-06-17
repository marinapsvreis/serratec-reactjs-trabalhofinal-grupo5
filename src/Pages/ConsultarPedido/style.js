import styled from "styled-components";

export const ListaPedidos = styled.div`
  width: 100%;
  height: auto;
  padding-top: 10em;
  display: flex;
  justify-content: center;

  table {
    font-size: 2em;
    width: 80%;
  }
`;
export const BoxPedido = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const BotaoVoltar = styled.div`
  padding-top: 15em;
  padding-left: 5em;

  button {
    background-color: var(--secondary-color);
    width: 8em;
    height: 3.5em;
    font-size: 1.7em;
    border-radius: 30px;
    transition: 500ms;
  }

  button:hover {
    background-color: var(--primary-color);
  }
`;
