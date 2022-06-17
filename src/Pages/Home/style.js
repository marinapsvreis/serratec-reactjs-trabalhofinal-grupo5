import styled from 'styled-components'

export const ImageDesktop = styled.img`
    margin-top: 2rem;
    display: none;
    max-width: 877px;

    @media (min-width: 1024px){
        display: block;
        padding-inline: 2%;    
    }
`;

export const ImageMobile = styled.img`
    display: block;
    margin-top: 2rem;
    width: 100vw;

    @media (min-width: 1024px){
        display: none;    
    }
`;

export const BotoesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    gap: 2rem;
    
    @media (min-width: 1024px){
        display: none;   
    }
`;

export const BotoesLinha = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
`;

export const BotaoRoxo = styled.div`
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

export const BotaoLaranja = styled.div`
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

