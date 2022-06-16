import styled from "styled-components";

export const CarrosselStyle = styled.div`
  position: relative;
  width: 80%;

  .itemCarrosel {
    background-color: transparent;
    color: white;

    display: flex;

    height: 20em;
    font-size: 2em;
    font-weight: bold;
    
    align-items: center;
    justify-content: space-around;

    .boxPessoaDesc {
      width: 60%;  
    }

    img{
      width: 13em;
      height: 13em;
      border: 7px solid var(--secondary-color);
    }

    @media only screen and (max-width: 768px) {
      height: 30em;
      flex-direction: column;
  }
  }

  .navegacaoCarrosel {
    position: absolute;

    width: 100%;
    padding: 20px 0;
    bottom: 0;
    left: 0;

    text-align: center;
  }

  .botaoCarrosel {
    background-color: rgba(255, 255, 255, 0.1);

    display: inline-block;

    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
  }

  .botaoCarroselAtivo {
    background-color: rgba(255, 255, 255, 0.7);

    display: inline-block;

    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 5px;
  }
`;
