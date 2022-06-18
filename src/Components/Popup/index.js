import React, { useState } from 'react';
import { PopupStyle } from './style';

function Popup(props) {

    const [isEnviado, setEnviado] = useState(false)

    return (
        <>
            <PopupStyle>
                <div className='popup-tela'>
                    <p>Tem certeza que deseja criar uma uma {props.titulo}?</p>
                    <div className='botoes'>
                        <button className='close'>Cancelar</button>
                        <button className='cloe'>Confirmar</button>
                    </div>
                </div>
            </PopupStyle>  
        </>
    );
}

export default Popup;