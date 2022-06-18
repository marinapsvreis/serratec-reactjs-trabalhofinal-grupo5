import React, {useContext} from "react";
import { ProdutoButton, ProdutoDescricao, ProdutoDiv, ProdutoImg } from "./style";
import { DataContext } from '../../Context/data'

export const PaginaProduto = ({produto}) => {

    const {idUsuario, handleSetIdUsuario} = useContext(DataContext)

    function adicionarAoCarrinho(){
        console.log('Adicionou ao carrinho o produto: ' + produto.nomeProduto)
       //verificar lista de pedidos de usuario byId
       //se estiver vazia
       //fazer post pedido
       //pegar id do pedido
       //se contiver pedidos, pegue o ultimo
       //fazer post item pedido com o id do pedido e id do produto
    }

    return(
        <ProdutoDiv>
            <ProdutoImg src={`${produto.nomeImagemProduto}`}></ProdutoImg>
            <ProdutoDescricao>
                {produto.nomeProduto} <br/>
                Quantidade no estoque: {produto.qtdEstoqueProduto} itens <br/>
                R${produto.valorUnitario} <br/>
                <ProdutoButton onClick={adicionarAoCarrinho}>Adicionar ao carrinho</ProdutoButton>
            </ProdutoDescricao>
            
        </ProdutoDiv>
    )
}