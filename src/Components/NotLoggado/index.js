import React from 'react';
import { BoxBadStyle } from './style';

function NotLoggado(props) {
    return (
        <>
            <BoxBadStyle>
                <img src="https://i.imgur.com/sT5doFz.png" alt='demolidor'></img> 
                <div className='mensagemErro'>
                    <h1>O que você está fazendo aqui?</h1>
                    <p>Faça login para adicionar itens ao carrinho</p> 
                </div>
                
            </BoxBadStyle>
           
        </>
    );
}

export default NotLoggado;