import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../../Services/api";
import { Loader } from '../Loader';
import { CancelarButton, PopupStyle } from './style';
import { Input, Form, ButtonContainer, RegistroButton } from "./style";

export const EditarCategoria = (props) => {

    const [nomeCategoria, setNomeCategoria] = useState(props.categoria.nomeCategoria);
    const [descricaoCategoria, setDescricaoCategoria] = useState(props.categoria.descricaoCategoria);
    const [imagemCategoria, setImagemCategoria] = useState(props.categoria.imagemCategoria);
    const [errorMessageHead, setErrorMessageHead] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({
        msgStatus: ''
    })
    let navigate = useNavigate();

    function handleNomeChange(e){
        setNomeCategoria(e.target.value)
    }

    function handleDescricaoChange(e){
        setDescricaoCategoria(e.target.value)
    }

    function handleImagemChange(e){
        setImagemCategoria(e.target.value)
    }

    function reloadPage() {
        window.location.reload(true)
    }
    
    function load() {
        setLoading(true)
        setTimeout(function() {
            setLoading(false)
            editarCategoria()
        })
    }

    async function editarCategoria() {
        const response = await api.put(`categoria?idCategoria=${props.id}`, {"nomeCategoria": nomeCategoria, "descricaoCategoria": descricaoCategoria, "imagemCategoria": imagemCategoria});
        if(response.status === 200){
            setStatus({msgStatus: 'alteradoSucesso'})
        }else{
            setStatus({msgStatus: 'alteracaoErro'})
        }
    }

    return (
        <>
            {loading === false && status.msgStatus === '' ? <>
                <PopupStyle>
                <div className='popup-tela'>
                <Form>
                    <Input type="text" value={nomeCategoria} onChange={(e) => handleNomeChange(e)}/>                       
                    <Input type="text" value={descricaoCategoria} onChange={(e) => handleDescricaoChange(e)}/>                       
                    <Input type="text" value={imagemCategoria} onChange={(e) => handleImagemChange(e)}/>                       
                    <ButtonContainer>
                    <RegistroButton onClick={load}>Alterar</RegistroButton>
                    <CancelarButton onClick={props.clickFechar}>Cancelar</CancelarButton>
                    </ButtonContainer>
                 </Form>
                </div>
            </PopupStyle> 
            </> : ''}
            {loading === true ? <>
            <PopupStyle>
                <div className='popup-tela'>
                    <p>Carregando...</p>
                    <Loader/>
                </div>
            </PopupStyle>
            </> : ''}
            {status.msgStatus === 'alteradoSucesso' ? <>
            <PopupStyle>
                <div className='popup-tela'>
                    <p>Alterações feitas com sucesso!</p>
                    <button onClick={reloadPage}>OK!</button>
                </div>
            </PopupStyle> 
            </> : ''}
            {status.msgStatus === 'alteracaoErro' ? <>
            <PopupStyle>
                <div className='popup-tela'>
                    <p>Ops... Parece que ocorreu um erro.</p>
                    <button onClick={reloadPage}>OK!</button>
                </div>
            </PopupStyle> 
            </> : ''}
             
        </>
    );
}