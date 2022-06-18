import React from 'react';
import { CancelarButton, PopupStyle, Form, ButtonContainer,
    RegistroButton } from './style';

export const DeletarPedido = (props) => {

    return (
        <>
            <PopupStyle>
                <div className='popup-tela'>
                    <Form>
                        <p>Tem certeza que deseja excluir o pedido de id: ?</p>     
                        <ButtonContainer>
                        <RegistroButton type="submit" value="Deletar" />
                        <CancelarButton onClick={props.handleDeletarAtivo}>Cancelar</CancelarButton>
                        </ButtonContainer>
                    </Form>
                </div>
            </PopupStyle>  
        </>
    );
}