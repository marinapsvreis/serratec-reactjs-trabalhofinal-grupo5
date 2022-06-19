import styled from "styled-components";

export const PopupStyle = styled.div`
background-color: rgba(0, 0, 0, 0.5);

display: flex;

position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;

justify-content: center;
align-items: center;

.popup-tela {
    background-color: var(--primary-color);

    display: flex;
    flex-direction: column;

    padding: 20px;
    width: 55em;
    height: 10em;

    align-items: center;
    justify-content: center;

    border: 2px solid black;
    
}

.popup-tela p {
    font-size: 1.5em;
}


.botaoConfirmar {
    background-color: var(--secondary-color);

    font-size: 1.3em;
    width: 5em;

    padding: 3px;

    border-radius: 10px;

    transition: 250ms;
}

.botaoConfirmar:hover {
    background-color: var(--primary-color);
}

`;