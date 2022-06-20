import styled from "styled-components";

export const CardCliente = styled.div`
  width: 300px;
  font-size: 1.6rem;
  background-color: gray;
  padding: 20px;
  border-radius: 10px; 
`;

export const BoxButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

export const EditCliente = styled.button`
  width: 40%;
  border-radius: 10px;
  background-color: #eead2d;
  color: white;
  border: none;
  &:hover{
    background-color: #fff2a6;
    color: black;
  }
`;
