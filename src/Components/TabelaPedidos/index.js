import React from 'react';
import { BotaoVoltar, BoxPedido, ListaPedidos, CardPedido, EditPedido, DeletePedido, BoxButtons } from "./style";
import { useNavigate } from "react-router-dom";

function TabelaPedidos(props) {
    const navigate = useNavigate();
    const listaPedidos = props.lista;

    return (
        <>
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
                                            <EditPedido>Editar</EditPedido>
                                            <DeletePedido>Excluir</DeletePedido>
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