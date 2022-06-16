import styled from 'styled-components'

export const ImageDesktop = styled.img`
    margin-top: 2rem;
    display: none;
`;

export const ImageMobile = styled.img`
    display: block;
    margin-top: 2rem;
    width: 100vw;
`;

export const BotoesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    gap: 2rem;
`;

export const BotoesLinha = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
`;

export const BotaoRoxo = styled.a`
    background-color: var(--secondary-color);
    text-decoration: none;
    color: var(--background);
    width: 10.5rem;
    height: 3.5rem;
    font-size: 1.8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 0.6rem;
    text-transform: uppercase;
    transition: 0.5s;
    &:hover{
        transform: scale(120%);
        background-color: var(--primary-color);
    }
`;

export const BotaoLaranja = styled.a`
    background-color: var(--primary-color);
    text-decoration: none;
    color: var(--background);
    width: 10.5rem;
    height: 3.5rem;
    font-size: 1.8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 0.6rem;
    text-transform: uppercase;
    transition: 0.5s;
    &:hover{
        transform: scale(120%);
        background-color: var(--primary-color);  
    }
`;

