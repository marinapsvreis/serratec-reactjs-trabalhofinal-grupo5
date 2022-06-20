import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../../Services/api";
import { CancelarButton, PopupStyle } from './style';
import { Input, Form, ButtonContainer, RegistroButton } from "./style";

export const EditarCliente = (props) => {

  const [nomeCompleto, setNomeCompleto] = useState(props.cliente.nomeCompleto)
  const [email, setEmail] = useState(props.cliente.email)
  const [cpf, setCpf] = useState(props.cliente.cpf)
  const [telefone, setTelefone] = useState(props.cliente.telefone)
  const [dataNascimento, setDataNascimento] = useState(props.cliente.dataNascimento)
  const [idEndereco, setIdEndereco] = useState(props.cliente.id)

    
    let navigate = useNavigate();

    function handleEmailChange(e){
        setEmail(e.target.value)
    }

    function handleTelefoneChange(e){
        setTelefone(e.target.value)
    }

    function handleEnderecoChange(e){
        //como postar novo endereço e mudar ID
    }

    async function editarCategoria() {
        const response = await api.put(`cliente?idCliente=${localStorage.getItem('idCliente')}`, {"nomeCompleto": nomeCompleto, "email": email, "cpf": cpf, "telefone": telefone, "dataNascimento": dataNascimento, "idEndereco": idEndereco});
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
                    <Input type="text" value={nomeCompleto} />                       
                    <Input type="text" value={email} onChange={(e) => handleEmailChange(e)}/>                       
                    <Input type="text" value={cpf}/>                       
                    <Input type="text" value={telefone} onChange={(e) => handleTelefoneChange(e)}/>                    
                    <Input type="text" value={dataNascimento} />                                               
                    <ButtonContainer>
                    <RegistroButton onClick={editarCategoria}>Alterar</RegistroButton>
                    <CancelarButton onClick={props.handleEditarAtivo}>Cancelar</CancelarButton>
                    </ButtonContainer>
                 </Form>
                </div>
            </PopupStyle>  
        </>
    );
}