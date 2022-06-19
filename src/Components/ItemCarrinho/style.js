import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 1rem;
  border: 1px solid #ffffff;
  color: #ffffff;
  border-radius: 1rem;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const Imagem = styled.img`
  max-width: 25rem;
  max-height: 35rem;
  margin: 1rem;
  border-radius: 1rem;
`;

export const Descricao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  text-align: center;
  font-size: 1.7rem;
`;

export const ButtonDiv = styled.div`
  display: inline;
  align-items: center;
  justify-content: center;

  .aumentar {
    background-color: var(--primary-color);
  }
  .diminuir {
    background-color: var(--secondary-color);
  }
`;

export const QuantidadeButao = styled.button`
  border: none;
  padding: 1.5rem;
  margin: 0.5rem;
`;
