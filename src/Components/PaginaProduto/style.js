import styled from "styled-components";

export const ProdutoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25.2rem;
  height: 60.8rem;
  background-color: var(--secondary-color);
  transition: 0.5s;

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 80rem;
  }
`;

export const ProdutoImg = styled.img`
  width: 100%;
  height: 36.7rem;
  border: var(--primary-color);
`;

export const ProdutoDescricao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  color: var(--primary-color);
  text-transform: uppercase;

  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  text-shadow: 3px 3px 10px black;
`;

export const ProdutoButton = styled.button`
`;
