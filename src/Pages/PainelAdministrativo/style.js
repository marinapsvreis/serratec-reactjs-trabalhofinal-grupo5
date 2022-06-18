import styled from "styled-components";

export const BotoesPainel = styled.div`
  width: 100vw;
  height: 100vh;
  margin-block: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  button {
    background-color: var(--secondary-color);
    width: 30rem;
    height: 4.5em;
    font-size: 2rem;
    border-radius: 10px;
    transition: 500ms;
  }

  button:hover {
    background-color: var(--primary-color);
  }
`;
