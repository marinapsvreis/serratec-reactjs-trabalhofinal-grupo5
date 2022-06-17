import styled from "styled-components";

export const Cards = styled.div`
  width: 21.6rem;
  height: 17rem;
  border-radius: 1rem;
  background-color: var(--secondary-color);
  transition: 0.5s;
  word-wrap: break-word;

  &:hover {
    background-color: var(--primary-color);
    transform: scale(110%);
  }

  @media (min-width: 1024px) {
    width: 43.2rem;
    height: 30.4rem;
  }
`;

export const CardImagem = styled.img`
  width: 100%;
  height: 13.4rem;
  border: var(--primary-color);
  border-radius: 1rem;

  @media (min-width: 1024px) {
    height: 26.8rem;
  }
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
