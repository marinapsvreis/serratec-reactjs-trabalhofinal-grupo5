import styled from "styled-components";

export const ProdutoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 28.2rem;
  height: max-content;
  border-radius: 1rem;
  background-color: var(--secondary-color);
  transition: 0.5s;

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 80rem;
  }
`;

export const ProdutoImg = styled.img`
  width: 24.6rem;
  height: 24.6rem;
  margin: 2rem;
  border-radius: 1rem;
  border: var(--primary-color);
  @media(min-width: 1024px){
    width: 36rem;
    height: 36rem;
  }
`;

export const ProdutoDescricao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding: 3rem;
  font-size: 2rem;
  text-align: center;
  
`;

export const ProdutoInput = styled.input`
  text-align: center;
`

export const ProdutoButton = styled.button`
 margin: 2rem;
 text-transform: uppercase;
 background-color: var(--primary-color);
 border-radius: 1rem;
 padding: 0.5rem;
 &:hover{ 
  background-color: #d5601c;
 }
`;
