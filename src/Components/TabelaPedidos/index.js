import React, { useState } from 'react';
import { BotaoVoltar, BoxPedido, ListaPedidos, CardPedido, DeletePedido, BoxButtons } from "./style";
import { useNavigate } from "react-router-dom";
import { DeletarGenerico } from "../DeletarGenerico"

function TabelaPedidos(props) {
    const navigate = useNavigate();
    const listaPedidos = props.lista;
    const [id, setId] = useState()
    const [isDeletado, setDeletado] = useState(false);

    const handleDeletar = () => {
        setDeletado(!isDeletado)
    }

    return (
        <>
            {isDeletado? <DeletarGenerico clickFechar={handleDeletar} id={id} titulo={'pedido'}/> : ''}
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
                                        <p>Valor Bruto: R$ {res.valorTotalPedidoBruto},00</p>
                                        <p>Valor Desconto: R${res.valorTotalDescontoPedido},00</p>
                                        <p>Valor Liquido: R$ {res.valorTotalPedidoLiquido},00</p>
                                        <BoxButtons>
                                            <DeletePedido onClick={() => {
                                                setDeletado(!isDeletado);
                                                setId(e => res.idPedido)}}>Excluir</DeletePedido>
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