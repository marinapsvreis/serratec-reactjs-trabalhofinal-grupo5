import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../../Services/api";
import { CancelarButton, PopupStyle } from './style';
import { Input, Form, ButtonContainer, RegistroButton } from "./style";

export const EditarPassword = (props) => {

  const [password, setPassword] = useState(props.cliente.password)

    let navigate = useNavigate();

    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

    async function editarPassword() {
        const response = await api.put(`cliente?idCliente=${localStorage.getItem('idCliente')}`, {"nomeCompleto": props.cliente.nomeCompleto, "email": props.cliente.email, "password": password, "cpf": props.cliente.cpf, "telefone": props.cliente.telefone, "dataNascimento": props.cliente.dataNascimento, "idEndereco": props.cliente.idEndereco});
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
                    <p>Digite a nova senha:</p>
                    <Input type="text" onChange={handlePasswordChange} />                                                        
                    <ButtonContainer>
                    <RegistroButton onClick={editarPassword}>Alterar</RegistroButton>
                    <CancelarButton onClick={props.handleEditarAtivo}>Cancelar</CancelarButton>
                    </ButtonContainer>
                 </Form>
                </div>
            </PopupStyle>  
        </>
    );
}