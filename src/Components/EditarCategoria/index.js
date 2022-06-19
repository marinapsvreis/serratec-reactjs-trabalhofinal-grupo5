import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../../Services/api";
import { CancelarButton, PopupStyle } from './style';
import { Input, Form, ButtonContainer, RegistroButton } from "./style";

export const EditarCategoria = (props) => {

    const [nomeCategoria, setNomeCategoria] = useState(props.categoria.nomeCategoria);
    const [descricaoCategoria, setDescricaoCategoria] = useState(props.categoria.descricaoCategoria);
    const [imagemCategoria, setImagemCategoria] = useState(props.categoria.imagemCategoria);
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

    async function editarCategoria() {
        const response = await api.put(`categoria?idCategoria=${props.id}`, {"nomeCategoria": nomeCategoria, "descricaoCategoria": descricaoCategoria, "imagemCategoria": imagemCategoria});
        if(response.status === 200){
            alert("Alteração realizada com sucesso!")
            navigate("../painel_administrativo/categoria")
        }else{
            alert("Erro ao atualizar!")
        }
    }

    return (
        <>
            <PopupStyle>
                <div className='popup-tela'>
                <Form>
                    <Input type="text" value={nomeCategoria} onChange={(e) => handleNomeChange(e)}/>                       
                    <Input type="text" value={descricaoCategoria} onChange={(e) => handleDescricaoChange(e)}/>                       
                    <Input type="text" value={imagemCategoria} onChange={(e) => handleImagemChange(e)}/>                       
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