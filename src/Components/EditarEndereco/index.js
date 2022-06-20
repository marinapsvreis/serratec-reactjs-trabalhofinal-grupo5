import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../../Services/api";
import { CancelarButton, PopupStyle } from './style';
import { Input, Form, ButtonContainer, RegistroButton } from "./style";

export const EditarEndereco = (props) => {

    const [cep, setCep] = useState(props.endereco.cep)
    const [numero, setNumero] = useState(props.endereco.numero)

    let navigate = useNavigate();

    function handleCepChange(e){
        setCep(e.target.value)
    }

    function handleNumeroChange(e){
        setNumero(e.target.value)
    }

    async function editarEndereco() {
        const response = await api.put(`endereco/salvar?idCliente=${localStorage.getItem('idCliente')}&cep=${cep}&numero=${numero}`);
        if(response.status === 200){
            alert("Alteração realizada com sucesso!")
            navigate("../perfil")
        }else{
            alert("Erro ao atualizar!")
        }
    }

    return (
        <>
            <PopupStyle>
                <div className='popup-tela'>
                <Form>                      
                    <Input type="text" value={cep} onChange={(e) => handleCepChange(e)}/>                                                       
                    <Input type="number" value={numero} onChange={(e) => handleNumeroChange(e)}/>                                                       
                    <ButtonContainer>
                    <RegistroButton onClick={editarEndereco}>Alterar</RegistroButton>
                    <CancelarButton onClick={props.handleEditarAtivo}>Cancelar</CancelarButton>
                    </ButtonContainer>
                 </Form>
                </div>
            </PopupStyle>  
        </>
    );
}