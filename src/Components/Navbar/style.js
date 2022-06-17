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
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    @media (min-width: 1024px) {
        margin-inline: 50px;
    }
`;

export const NavbarLista = styled.ul`
    display: none;
    @media (min-width: 1024px) {
        display: flex;
        gap: 2rem;
        margin-bottom: 0;
    }
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