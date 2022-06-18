import React, { useState, useEffect } from 'react';
import { PopupStyle } from './style';
import { api } from "../../Services/api";

export const Popup = (props) => {

    const [informacaoPost, setInformacaoPost] = useState({})

    useEffect(() => {
        setInformacaoPost({
            Nome: props.informacoes.Nome,
            Descricao: props.informacoes.Descricao,
            Imagem: props.informacoes.Imagem
        })

        
    }, [])

    function enviarInformacoes() {
        const postCategoriaAPI = async () => {
            try {
              const res = await api.post("categoria", {
                nomeCategoria: informacaoPost.Nome,
                descricaoCategoria: informacaoPost.Descricao,
                imagemCategoria: informacaoPost.Imagem
              });
              console.log(res)
            } catch (error) {
              console.log(error)
            }
          };
          postCategoriaAPI();
    }

    return (
        <>
            <PopupStyle>
                <div className='popup-tela'>
                    <p>Tem certeza que deseja criar uma uma {props.titulo}?</p>
                    <div className='botoes'>
                        <button className='close' onClick={props.clickFechar}>Cancelar</button>
                        <button className='close' onClick={() => {
                            enviarInformacoes();
                            props.clickFechar()
                        }}>Confirmar</button>
                    </div>
                </div>
            </PopupStyle>  
        </>
    );
}