import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 15rem;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const Titulo = styled.h1`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 15rem;
    align-items: center;
    width: 100vw;

    display: inline;
    color: var(--secondary-color);
    text-transform: uppercase;
    text-align: center;
    font-size: 2.2rem;
    width: 100vw;
`;

export const Subtitulo = styled.h3`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    color: var(--primary-color);
    text-transform: uppercase;

    text-transform: uppercase;
    text-align: center;
    font-size: 2.0rem;
    text-shadow: 3px 3px 10px black;
`;