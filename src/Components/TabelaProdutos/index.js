import React, { useState } from 'react';
import { BotaoVoltar, BoxButtons, BoxProduto, CardProduto, DeleteProduto, EditProduto, ListaProdutos } from "./style";
import { useNavigate } from "react-router-dom";

function TabelaProdutos(props) {
    const navigate = useNavigate();
    const listaProdutos = props.lista;
    const [editarAtivo, setEditarAtivo] = useState(false);
    const [deletarAtivo, setDeletarAtivo] = useState(false);

    function AtualizarProduto(id){
        
      //encontrar pelo id
      //gerar um form autopreenchido com as informações do produto
        handleEditarAtivo()
      //enviar para atualizacao  
    }

    function DeletarProduto(id){
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
            {editarAtivo? <EditProduto estado={handleEditarAtivo}/> : ''}
            {deletarAtivo? <DeletarProduto estado={handleDeletarAtivo}/> : ''}
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
                                            <EditProduto onClick={() => AtualizarProduto(res.idProduto)}>Editar</EditProduto>
                                            <DeleteProduto onClick={()=> DeletarProduto(res.idProduto)}>Excluir</DeleteProduto>
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