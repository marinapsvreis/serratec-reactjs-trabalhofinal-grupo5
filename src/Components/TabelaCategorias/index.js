import React, { useState } from 'react';
import { BotaoVoltar, BoxButtons, BoxCategoria, CardCategoria, DeleteCategoria, EditCategoria, ListaCategorias } from "./style";
import { useNavigate } from "react-router-dom";
import { EditarCategoria } from '../EditarCategoria';
import { DeletarGenerico } from '../DeletarGenerico';

export const TabelaCategorias = (props) => {
    const navigate = useNavigate();
    const listaCategorias = props.lista;
    const [id, setId] = useState()
    const [isEditado, setEditado] = useState(false);
    const [isDeletado, setDeletado] = useState(false);

    const handleEditar = () => {
        setEditado(!isEditado)
    }

    const handleDeletar = () => {
        setDeletado(!isDeletado)
    }

    return (
        <>
            {isEditado? <EditarCategoria clickFechar={handleEditar} id={id} categoria={listaCategorias.filter(c => c.idCategoria === id)[0]}/> : ''}
            {isDeletado? <DeletarGenerico clickFechar={handleDeletar} id={id} titulo={'categoria'}/> : ''}
            <BoxCategoria>
                <ListaCategorias>               
                       {listaCategorias !== [] ? listaCategorias.map(res => {
                            return <CardCategoria key={res.idCategoria}>
                                        <p>Id Categoria: {res.idCategoria}</p>
                                        <p>Nome da Categoria: {res.nomeCategoria}</p>
                                        <p>Descrição da Categoria: {res.descricaoCategoria}</p>
                                        <p>Imagem da Categoria: {res.imagemCategoria}</p>
                                        <BoxButtons>
                                            <EditCategoria onClick={() => {setEditado(!isEditado); setId(e => res.idCategoria)}}>Editar</EditCategoria>
                                            <DeleteCategoria onClick={()=> {setDeletado(!isDeletado); setId(e => res.idCategoria)
                                            }}>Excluir</DeleteCategoria>
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