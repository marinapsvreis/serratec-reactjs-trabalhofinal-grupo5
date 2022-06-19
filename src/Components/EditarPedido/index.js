import React from 'react';
import { CancelarButton, PopupStyle } from './style';
import {
    Input,
    Form,
    ButtonContainer,
    RegistroButton,
  } from "./style";

export const EditarPedido = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
      };

    return (
        <>
            <PopupStyle>
                <div className='popup-tela'>
                <Form onSubmit={handleSubmit}>
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