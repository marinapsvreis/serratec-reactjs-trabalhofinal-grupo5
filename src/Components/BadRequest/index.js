import React from 'react';
import { BoxBadStyle } from './style';

function BadRequest(props) {
    return (
        <>
            <BoxBadStyle>
                <img src="https://i.imgur.com/H1rJnqj.png" alt='palhaço'></img> 
                <div className='mensagemErro'>
                    <h1>Ops... Alguma coisa deu errado</h1>
                    <p>Os desenvolves estão trabalhando duro para fazer tudo voltar ao normal</p> 
                </div>
                
            </BoxBadStyle>
           
        </>
    );
}

export default BadRequest;