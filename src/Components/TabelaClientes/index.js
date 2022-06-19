import React, { useState } from 'react';
import { BotaoVoltar, BoxCliente, ListaClientes, CardCliente, DeleteCliente, BoxButtons } from "./style";
import { useNavigate } from "react-router-dom";
import { DeletarGenerico } from "../DeletarGenerico"

function TabelaClientes(props) {
    const navigate = useNavigate();
    const listaClientes = props.lista;
    const [id, setId] = useState()
    const [isDeletado, setDeletado] = useState(false);

    const handleDeletar = () => {
        setDeletado(!isDeletado)
    }

    return (
        <>
            {isDeletado? <DeletarGenerico clickFechar={handleDeletar} id={id} titulo={'cliente'}/> : ''}
            <BoxCliente>
                <ListaClientes>               
                       {listaClientes !== [] ? listaClientes.map(res => {
                            return <CardCliente key={res.idPedido}>
                                        <p>Id Cliente: {res.idCliente}</p>
                                        <p>Email: {res.email}</p>
                                        <p>Nome Completo: {res.nomeCompleto}</p>
                                        <p>CPF: {res.cpf}</p>
                                        <p>Telefone: {res.telefone}</p>
                                        <p>Data de Nascimento: {res.dataNascimento}</p>
                                        <p>Id Endereço: {res.idEndereco}</p>
                                        <BoxButtons>
                                            <DeleteCliente onClick={() => {
                                                setDeletado(!isDeletado);
                                                setId(e => res.idPedido)}}>Excluir</DeleteCliente>
                                        </BoxButtons>
                                    </CardCliente>
                        }) : ''}                        
                </ListaClientes>
                <BotaoVoltar>
                    <button onClick={() => navigate("/painel_administrativo")}>
                        Voltar
                    </button>
                </BotaoVoltar>
            </BoxCliente>
        </>
    );
}

export default TabelaClientes;