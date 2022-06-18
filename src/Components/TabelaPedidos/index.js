import React from 'react';
import { BotaoVoltar, BoxPedido, ListaPedidos } from "./style";
import { useNavigate } from "react-router-dom";

function TabelaPedidos(props) {
    const navigate = useNavigate();
    const listaPedidos = props.lista;

    return (
        <>
            <BoxPedido>
                <ListaPedidos>
                    <table className="table table-bordered table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Número Pedido</th>
                                <th scope="col">Cliente</th>
                                <th scope="col">Status</th>
                                {window.innerWidth <= 898 ? <><th scope="col">Detalhes</th></> : ''}
                                {window.innerWidth >= 899 ? <><th scope="col">Data Pedido</th>
                                    <th scope="col">Data de Entrega</th>
                                    <th scope="col">Data de Envio</th>
                                    <th scope="col">Valor Total do Pedido</th>
                                    <th scope="col">% de Desconto</th>
                                    <th scope="col">Total Liquido</th></> : ''}
                            </tr>
                        </thead>
                        <tbody>
                        {listaPedidos !== [] ? listaPedidos.map(res => {
                                return <tr key={res.idPedido}>
                                    <td>{res.idPedido}</td>
                                    <td>{res.idCliente}</td>
                                    <td>{res.status === true ? 'Ativo' : 'Inativo'}</td>
                                    {window.innerWidth <= 898 ? <><td><a href="~">Exibir</a></td></> : ''}
                                    {window.innerWidth >= 899 ? <>
                                        <td>{res.dataPedido !== null ? res.dataPedido : '...'}</td>
                                        <td>{res.dataEntrega !== null ? res.dataEntrega : '...'}</td>
                                        <td>{res.dataEnvio !== null ? res.dataEntrega : '...'}</td>
                                        <td>R$ {res.valorTotalPedidoBruto}</td>
                                        <td>{res.valorTotalDescontoPedido}%</td>
                                        <td>R$ {res.valorTotalPedidoLiquido}</td></> : ''}

                                </tr>
                            }) : ''}
                        </tbody>
                    </table>
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