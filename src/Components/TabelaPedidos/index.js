import React, { useState } from 'react';
import { BotaoVoltar, BoxPedido, ListaPedidos, CardPedido, EditPedido, DeletePedido, BoxButtons } from "./style";
import { useNavigate } from "react-router-dom";
import {EditarPedido} from "../EditarPedido"

function TabelaPedidos(props) {
    const navigate = useNavigate();
    const listaPedidos = props.lista;
    const [editarAtivo, setEditarAtivo] = useState(false);
    const [deletarAtivo, setDeletarAtivo] = useState(false);

    function AtualizarPedido(id){
        
      //encontrar pelo id
      //gerar um form autopreenchido com as informações do pedido
        handleEditarAtivo()
      //enviar para atualizacao  
    }

    function DeletarPedido(id){
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
            {editarAtivo? <EditarPedido estado={handleEditarAtivo}/> : ''}
            {deletarAtivo? <DeletarPedido estado={handleDeletarAtivo}/> : ''}
            <BoxPedido>
                <ListaPedidos>               
                       {listaPedidos !== [] ? listaPedidos.map(res => {
                            return <CardPedido key={res.idPedido}>
                                        <p>Id Pedido: {res.idPedido}</p>
                                        <p>Id Cliente: {res.idCliente}</p>
                                        <p>Status: {res.status === true ? 'Ativo' : 'Inativo'}</p>
                                        <p>Data do Pedido: {res.dataPedido}</p>
                                        <p>Data da Entrega: {res.dataEntrega}</p>
                                        <p>Data do Envio: {res.dataEnvio}</p>
                                        <p>Valor Bruto: R$ {res.valorTotalPedidoBruto}</p>
                                        <p>Valor Desconto: R${res.valorTotalDescontoPedido}%</p>
                                        <p>Valor Liquido: R$ {res.valorTotalPedidoLiquido}</p>
                                        <BoxButtons>
                                            <EditPedido onClick={() => AtualizarPedido(res.idPedido)}>Editar</EditPedido>
                                            <DeletePedido onClick={()=> DeletarPedido(res.idPedido)}>Excluir</DeletePedido>
                                        </BoxButtons>
                                    </CardPedido>
                        }) : ''}                        
                </ListaPedidos>
                <BotaoVoltar>
                    <button onClick={() => navigate("/painel_administrativo")}>
                        Voltar
                    </button>
                </BotaoVoltar>
            </BoxPedido>
        </>
    );
}

export default TabelaPedidos;