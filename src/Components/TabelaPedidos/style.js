import styled from "styled-components";

export const ListaPedidos = styled.div`
  width: 100%;
  height: auto;
  padding-top: 15rem;
  display: flex;
  justify-content: center;

  table {
    font-size: 1.5em;
    width: 80%;
  }
`;
export const BoxPedido = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  p {
    font-size: 3em;
    color: white;
  }
`;

export const BotaoVoltar = styled.div`
  padding-top: 5em;
  padding-left: 5em;
  display: flex;
  justify-content: center;

  button {
    background-color: var(--secondary-color);
    width: 8em;
    height: 2.5em;
    font-size: 2em;
    border-radius: 10px;
    transition: 500ms;
  }

  button:hover {
    background-color: var(--primary-color);
  }
`;
