import React from "react";
import { Subtitulo } from "../../Pages/global-style";
import { ProdutoButton, ProdutoDescricao, ProdutoDiv, ProdutoImg } from "./style";

export const PaginaProduto = ({produto, imagem}) => {

    

    return(
        <ProdutoDiv>
            <ProdutoImg src={process.env.PUBLIC_URL + imagem+".png"}></ProdutoImg>
            <ProdutoDescricao>
                {produto.nomeProduto} <br/>
                Quantidade no estoque: {produto.qtdEstoqueProduto} itens <br/>
                R${produto.valorUnitario} <br/>
                <ProdutoButton>Adicionar ao carrinho</ProdutoButton>
            </ProdutoDescricao>
            
        </ProdutoDiv>
    )
}