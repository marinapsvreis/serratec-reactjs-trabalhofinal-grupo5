import styled from "styled-components";

export const BotoesPainel = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35em;

  button {
    background-color: var(--secondary-color);
    width: 20em;
    height: 4.5em;
    font-size: 1.7em;
    border-radius: 30px;
    transition: 500ms;
  }

  button:hover {
    background-color: var(--primary-color);
  }
`;
