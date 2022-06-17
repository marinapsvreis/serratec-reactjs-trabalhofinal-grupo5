import styled from "styled-components";

export const ProdutoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25.2rem;
  height: 50.8rem;
  border-radius: 1rem;
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
  margin: 4rem;
  border: var(--primary-color);
`;

export const ProdutoDescricao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding: 5rem;
  font-size: 2rem;
  text-align: center;
  
`;

export const ProdutoButton = styled.button`
 margin: 4rem;
 text-transform: uppercase;
 background-color: var(--primary-color);
 border-radius: 1rem;
 padding: 0.5rem;
 &:hover{ 
  background-color: #d5601c;
 }
`;
