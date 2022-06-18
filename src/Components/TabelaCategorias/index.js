import React, { useState } from 'react';
import { BotaoVoltar, BoxButtons, BoxCategoria, CardCategoria, DeleteCategoria, EditCategoria, ListaCategorias } from "./style";
import { useNavigate } from "react-router-dom";

export const TabelaCategorias = (props) => {
    const navigate = useNavigate();
    const listaCategorias = props.lista;
    const [editarAtivo, setEditarAtivo] = useState(false);
    const [deletarAtivo, setDeletarAtivo] = useState(false);

    function AtualizarCategoria(id){
        
      //encontrar pelo id
      //gerar um form autopreenchido com as informações da categoria
        handleEditarAtivo()
      //enviar para atualizacao  
    }

    function DeletarCategoria(id){
        //requisitar deleção pelo id 
        handleDeletarAtivo()         
    }

    function handleEditarAtivo () {
        let editarEstado = editarAtivo
        setEditarAtivo(!editarEstado)
    }

    function handleDeletarAtivo () {
        let deletarEstado = deletarAtivo
        setDeletarAtivo(!deletarEstado)
    }


    return (
        <>
            {editarAtivo? <EditCategoria estado={handleEditarAtivo}/> : ''}
            {deletarAtivo? <DeletarCategoria estado={handleDeletarAtivo}/> : ''}
            <BoxCategoria>
                <ListaCategorias>               
                       {listaCategorias !== [] ? listaCategorias.map(res => {
                            return <CardCategoria key={res.idCategoria}>
                                        <p>Id Categoria: {res.idCategoria}</p>
                                        <p>Nome da Categoria: {res.nomeCategoria}</p>
                                        <p>Descrição da Categoria: {res.descricaoCategoria}</p>
                                        <p>Imagem da Categoria: {res.imagemCategoria}</p>
                                        <BoxButtons>
                                            <EditCategoria onClick={() => AtualizarCategoria(res.idCategoria)}>Editar</EditCategoria>
                                            <DeleteCategoria onClick={()=> DeletarCategoria(res.idCategoria)}>Excluir</DeleteCategoria>
                                        </BoxButtons>
                                    </CardCategoria>
                        }) : ''}                        
                </ListaCategorias>
                <BotaoVoltar>
                    <button onClick={() => navigate("/painel_administrativo")}>
                        Voltar
                    </button>
                </BotaoVoltar>
            </BoxCategoria>
        </>
    );
}