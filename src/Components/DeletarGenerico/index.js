import React, {useState} from 'react';
import { Loader } from '../Loader';
import { CancelarButton, PopupStyle, Form, ButtonContainer, RegistroButton } from './style';
import { api } from "../../Services/api"

export const DeletarGenerico = (props) => {
    const [isDeletarPress, setDeletarPress] = useState(false)
    const [isDeletado, setDeletado] = useState(false)
    const [statusAPI, setStatusAPI] = useState(0)

    function processarDelete() {
        setTimeout(function(){
            const deleteAPI = async () => {
                try {
                  if(props.titulo === 'pedido') {
                    let id = parseInt(props.id)
                    const res = await api.delete('pedido', {params: {idPedido: id}});
                    setStatusAPI(res.status);
                  } if(props.titulo === 'categoria') {
                    let id = parseInt(props.id)
                    const res = await api.delete('categoria', {params: {idCategoria: id}});
                    setStatusAPI(res.status);
                  } if(props.titulo === 'produto') {
                    let id = parseInt(props.id)
                    const res = await api.delete('produto', {params: {idProduto: id}});
                    setStatusAPI(res.status);
                  }
                } catch (error) {
                  console.log(error);
                  if (error.code === "ERR_NETWORK") {
                    setStatusAPI((e) => 502);
                  }
                }
              };
              deleteAPI();
              window.location.reload(false);
        }, 500);
    }

    return (
        <>
            <PopupStyle>
                {!isDeletarPress ? <div className='popup-tela'>
                    <Form>
                        <p>Tem certeza que deseja excluir o/a {props.titulo} de id {props.id} ?</p>     
                        <ButtonContainer>
                            <CancelarButton onClick={props.clickFechar}>Cancelar</CancelarButton>
                            <RegistroButton onClick={() => {
                                setDeletarPress(!isDeletarPress);
                                setDeletado(!isDeletado)}}>Deletar</RegistroButton>
                        </ButtonContainer>
                    </Form>
                </div> : ''}
                
                {isDeletarPress ? <div className='popup-tela'>
                    <Form>
                        <h1>Deletando {(props.titulo)} {props.id}...</h1>     
                        <Loader/>
                        {processarDelete()}
                    </Form>
                </div> : ''}

            </PopupStyle>  
        </>
    );
}