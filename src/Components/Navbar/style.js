import styled from 'styled-components'


export const NavbarSection = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 2rem;
    width: 100vw;
    height: 5rem;
    background-color: var(--primary-color);
`;

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
`;

export const NavbarLista = styled.ul`
    display: flex;
    gap: 2rem;
    margin-bottom: 0;
`;

export const NavbarItem = styled.li`
    list-style: none;
    font-size: 1.8rem;
    text-decoration: none;
    color: var(--background);
    transition: 0.5s;
    &:hover{
        transform: scale(130%);
    }
`;

export const HamburguerButton = styled.button`
    display: none;
`;

export const LinkHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    gap: 10px;
    &:hover{
        transform: scale(130%);
    }
`;

export const NomeLogo = styled.p`
    display: block;
    color: var(--background);
    font-size: 1.8rem;
    margin-bottom: 0;
`;

export const ButtonLogin = styled.div`
    background-color: var(--secondary-color);
    padding-inline: 1rem;
    border-radius: 0.5rem;
`;