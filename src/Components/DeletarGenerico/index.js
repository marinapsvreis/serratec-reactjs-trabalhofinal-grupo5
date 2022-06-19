import React, {useState} from 'react';
import { Loader } from '../Loader';
import { CancelarButton, PopupStyle, Form, ButtonContainer, RegistroButton } from './style';
import { api } from "../../Services/api"

export const DeletarPedido = (props) => {
    const [isDeletarPress, setDeletarPress] = useState(false)
    const [isDeletado, setDeletado] = useState(false)
    const [statusAPI, setStatusAPI] = useState(0)

    function processarDados() {
        setTimeout(function(){
            const deletePedidoAPI = async () => {
                try {
                  let id = parseInt(props.idPedido)
                  const res = await api.delete("pedido", {params: {id: id}});
                  setStatusAPI(res.status);
                } catch (error) {
                  console.log(error);
                  if (error.code === "ERR_NETWORK") {
                    setStatusAPI((e) => 502);
                  }
                }
              };
              deletePedidoAPI();
              window.location.reload(false);
        }, 500);
    }

    function deletarPedidoAPI() {
          processarDados();
    }

    return (
        <>
            <PopupStyle>
                {!isDeletarPress ? <div className='popup-tela'>
                    <Form>
                        <p>Tem certeza que deseja excluir o/a {props.titulo} de id {props.idPedido} ?</p>     
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
                        <h1>Deletando {(props.titulo)} {props.idPedido}...</h1>     
                        <Loader/>
                        {deletarPedidoAPI()}
                    </Form>
                </div> : ''}

            </PopupStyle>  
        </>
    );
}