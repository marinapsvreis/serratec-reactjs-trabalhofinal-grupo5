import styled from "styled-components";

export const BotoesPainel = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20%;

  button {
    background-color: var(--secondary-color);
    width: 15em;
    height: 4.5em;
    font-size: 1.5em;
    border-radius: 30px;
    transition: 500ms;
  }

  button:hover {
    background-color: var(--primary-color);
  }
`;
