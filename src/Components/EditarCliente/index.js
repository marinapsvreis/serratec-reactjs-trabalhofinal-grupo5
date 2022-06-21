import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../../Services/api";
import { CancelarButton, InputBlock, PopupStyle } from './style';
import { Input, Form, ButtonContainer, RegistroButton } from "./style";

export const EditarCliente = (props) => {

  const [nomeCompleto, setNomeCompleto] = useState(props.cliente.nomeCompleto)
  const [email, setEmail] = useState(props.cliente.email)
  const [password, setPassword] = useState(props.cliente.password)
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

    async function editarCliente() {
        const response = await api.put(`cliente?idCliente=${localStorage.getItem('idCliente')}`, {"nomeCompleto": nomeCompleto, "email": email, "password": password, "cpf": cpf, "telefone": telefone, "dataNascimento": dataNascimento, "idEndereco": idEndereco});
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
                    <InputBlock type="text" value={nomeCompleto} />                       
                    <Input type="text" value={email} onChange={(e) => handleEmailChange(e)}/>                       
                    <InputBlock type="text" value={cpf}/>                       
                    <Input type="text" value={telefone} onChange={(e) => handleTelefoneChange(e)}/>                    
                    <InputBlock type="text" value={dataNascimento} />                                               
                    <ButtonContainer>
                    <CancelarButton onClick={props.clickFechar}>Cancelar</CancelarButton>
                    <RegistroButton onClick={editarCliente}>Alterar</RegistroButton>
                    </ButtonContainer>
                 </Form>
                </div>
            </PopupStyle>  
        </>
    );
}