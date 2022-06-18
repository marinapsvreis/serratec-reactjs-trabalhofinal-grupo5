import React from 'react';
import { CancelarButton, PopupStyle } from './style';
import {
    Input,
    Form,
    ButtonContainer,
    RegistroButton,
  } from "./style";

export const EditarPedido = (props) => {

    return (
        <>
            <PopupStyle>
                <div className='popup-tela'>
                <Form>
                    <Input type="number" placeholder="Id do cliente" />      
                    <ButtonContainer>
                    <RegistroButton type="submit" value="Alterar" />
                    <CancelarButton onClick={props.handleEditarAtivo}>Cancelar</CancelarButton>
                    </ButtonContainer>
                 </Form>
                </div>
            </PopupStyle>  
        </>
    );
}