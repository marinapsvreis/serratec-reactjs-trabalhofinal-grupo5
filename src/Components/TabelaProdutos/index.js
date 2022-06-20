import React, { useState } from 'react';
import { BotaoVoltar, BoxButtons, BoxProduto, CardProduto, DeleteProduto, EditProduto, ListaProdutos } from "./style";
import { useNavigate } from "react-router-dom";
import { EditarProduto } from "../EditarProduto";
import { PopupRespostaAPI } from "../../Components/PopupRespostaAPI"

function TabelaProdutos(props) {
    const navigate = useNavigate();
    const listaProdutos = props.lista;
    const [id, setId] = useState()
    const [isEditado, setEditado] = useState(false);
    const [isDeletarPressed, setDeletarPressed] = useState(false)

    const handleEditar = () => {
        setEditado(!isEditado)
    }

    const handleClick = () => {
        setDeletarPressed(e => false)
    }


    return (
        <>
            {isEditado? <EditarProduto clickFechar={handleEditar} id={id} produto={listaProdutos.filter(c => c.idProduto === id)[0]}/> : ''}
            {isDeletarPressed ? <PopupRespostaAPI titulo={'produto'} tipo={'deletarLoad'} status={''} id={id} click={handleClick}/> : ''}
            <BoxProduto>
                <ListaProdutos>               
                       {listaProdutos !== [] ? listaProdutos.map(res => {
                            return <CardProduto key={res.idProduto}>
                                        <p>Id Produto: {res.idProduto}</p>
                                        <p>Nome do Produto: {res.nomeProduto}</p>
                                        <p>Descrição do Produto: {res.descricaoProduto}</p>
                                        <p>Quantidade do Estoque do Produto: {res.qtdEstoqueProduto}</p>
                                        <p>Data do Cadastro do Produto: {res.dataCadastroProduto}</p>
                                        <p>Valor Unitário: {res.valorUnitario}</p>
                                        <p>Nome da Imagem do Produto: {res.nomeImagemProduto}</p>
                                        <p>Id Categoria: {res.idCategoria}</p>
                                        <BoxButtons>
                                            <EditProduto onClick={()=> {
                                                setEditado(!isEditado);
                                                setId(e => res.idProduto)
                                            }}>Editar</EditProduto>
                                            <DeleteProduto onClick={()=> {
                                                setDeletarPressed(e => true);
                                                setId(e => res.idProduto)
                                            }}>Excluir</DeleteProduto>
                                        </BoxButtons>
                                    </CardProduto>
                        }) : ''}                        
                </ListaProdutos>
                <BotaoVoltar>
                    <button onClick={() => navigate("/painel_administrativo")}>
                        Voltar
                    </button>
                </BotaoVoltar>
            </BoxProduto>
        </>
    );
}

export default TabelaProdutos;