import styled from "styled-components";

export const Cards = styled.div`
  width: 42.2rem;
  height: 30.4rem;
  background-color: var(--secondary-color);
  transition: 0.5s;

  &:hover {
    background-color: var(--primary-color);
    transform: scale(110%);
  }
`;

export const CardImagem = styled.img`
  width: 100%;
  height: 26.8rem;
  border: var(--primary-color);
`;

export const CardLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: var(--background);
  font-size: 1.8rem;
  padding-top: 0.5rem;
`;
