import styled from "styled-components";
// import Font from "https://fonts.googleapis.com/css2?family=Secular+One&display=swap";

export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-size: 62.5%;
  margin: 0%;
  padding-top: 6.4rem;
  padding-bottom: 6.4rem;
  font-family: "Secular One", sans-serif;
  overflow-x: hidden;

  --primary-color: #ff711e;
  --background: #1a1a1a;
  --secondary-color: #819cff;
  --third-color: #456bf6;
  background-color: var(--background);
  /* width: calc(100vw-0.2rem); */
`;

export const CardContainer = styled.div`
display: flex;
justify-content: center;
gap: 3.5rem;
flex-wrap: wrap;
margin-top: 6.4rem;
`;
