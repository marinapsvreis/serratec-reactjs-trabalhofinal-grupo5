import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../../Services/api";
import { Loader } from '../Loader';
import { CancelarButton, PopupStyle } from './style';
import { Input, Form, ButtonContainer, RegistroButton } from "./style";

export const EditarEndereco = (props) => {

    const [cep, setCep] = useState(props.endereco.cep)
    const [numero, setNumero] = useState(props.endereco.numero)
    const [bairro, setBairro] = useState(props.endereco.bairro)
    const [cidade, setCidade] = useState(props.endereco.cidade)
    const [complemento, setComplemento] = useState(props.endereco.complemento)
    const [rua, setRua] = useState(props.endereco.rua)
    const [uf, setUf] = useState(props.endereco.uf)
    const [isLoading, setLoading] = useState(false)
    const [statusAPI, setStatusAPI] = useState(0)
    const [errorMessageHead, setErrorMessageHead] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    let navigate = useNavigate();

    function handleCepChange(e){
        setCep(e.target.value)
    }

    function handleNumeroChange(e){
        setNumero(e.target.value)
    }

    function handleComplementoChange(e){
        setNumero(e.target.value)
    }

    async function editarEndereco() {
        try {
            const res = await api.put(`endereco?idEndereco=${localStorage.getItem('idCliente')}`, {"cep": cep, "rua": rua, 'bairro': bairro, 'cidade': cidade, 'numero': numero, 'complemento': complemento, 'uf': uf});
            setStatusAPI(e => res)
        } catch (error) {
            console.log(error)
            setStatusAPI(e => error.response.data.status)
            setErrorMessageHead(e => error.response.data.message)
            setErrorMessage(e => error.response.data.details[0])
        }
    }

    function load() {
        setLoading(e => true)
        setTimeout(function() {
            setLoading(E => false)
            editarEndereco()
        }, 800)
    }

    return (
        <>
            {isLoading === false && statusAPI === 0 ? <>
                <PopupStyle>
                <div className='popup-tela'>
                <Form>                      
                    <Input type="text" value={cep} placeholder='Cep' onChange={(e) => handleCepChange(e)}/>                                                       
                    <Input type="number" value={numero} placeholder='Numero' onChange={(e) => handleNumeroChange(e)}/>                                                       
                    <Input type="number" value={complemento} placeholder='Complemento' onChange={(e) => handleComplementoChange(e)}/>                                                       
                    <ButtonContainer>
                    <CancelarButton onClick={props.clickFechar}>Cancelar</CancelarButton>
                    <RegistroButton onClick={load}>Alterar</RegistroButton>
                    </ButtonContainer>
                 </Form>
                </div>
            </PopupStyle>  
            </> : ''} 
            {isLoading === true ? <>
                <PopupStyle>
                <div className='popup-tela'>
                    <p>Carregando...</p>
                    <Loader/>
                </div>
            </PopupStyle>  
            </> : ''}
            {isLoading === false && statusAPI === 200 ? <>
                <PopupStyle>
                    <div className='popup-tela'>
                        <p>Endereco alterado com sucesso!</p>
                        <div className='botoes'>
                            <button onClick={window.location.reload(true)}>OK</button>
                        </div>
                    </div>
                </PopupStyle>  
            </> : ''}
            {isLoading === false && statusAPI !== 200 && statusAPI !== 0 ? <>
                <PopupStyle>
                    <div className='popup-tela'>
                        <h2>{errorMessageHead}</h2>
                        <p>{errorMessage}</p>
                        <div className='botoes'>
                            <button onClick={() => setStatusAPI(e => 0)}>OK</button>
                        </div>
                    </div>
                </PopupStyle>  
            </> : ''}
        </>
    );
}