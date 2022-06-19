import React, { useState } from 'react';
import { BotaoVoltar, BoxButtons, BoxCategoria, CardCategoria, DeleteCategoria, EditCategoria, ListaCategorias } from "./style";
import { useNavigate } from "react-router-dom";
import { DeletarGenerico } from '../DeletarGenerico';

export const TabelaCategorias = (props) => {
    const navigate = useNavigate();
    const listaCategorias = props.lista;
    const [id, setId] = useState()
    const [isEditado, setEditado] = useState(false);
    const [isDeletado, setDeletado] = useState(false);

    const handleDeletar = () => {
        setDeletado(!isDeletado)
    }

    return (
        <>
            {isEditado? '' : ''}
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
                                            <EditCategoria onClick={() => ''}>Editar</EditCategoria>
                                            <DeleteCategoria onClick={()=> {
                                                setDeletado(!isDeletado);
                                                setId(e => res.idCategoria)
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