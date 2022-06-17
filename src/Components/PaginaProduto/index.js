import React from "react";
import { Subtitulo } from "../../Pages/global-style";
import { ProdutoButton, ProdutoDescricao, ProdutoDiv, ProdutoImg } from "./style";

export const PaginaProduto = ({produto}) => {

    return(
        <ProdutoDiv>
            <ProdutoImg src={`${produto.nomeImagemProduto}`}></ProdutoImg>
            <ProdutoDescricao>
                {produto.nomeProduto} <br/>
                {produto.descricaoProduto} <br/>
                R${produto.valorUnitario} <br/>
            </ProdutoDescricao>
            <ProdutoButton>Adicionar ao carrinho</ProdutoButton>
        </ProdutoDiv>
    )
}