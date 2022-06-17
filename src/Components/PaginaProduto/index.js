import React from "react";
import { Subtitulo } from "../../Pages/global-style";
import { ProdutoButton, ProdutoDescricao, ProdutoDiv, ProdutoImg } from "./style";

export const PaginaProduto = ({produto}) => {

    return(
        <ProdutoDiv>
            <ProdutoImg src="https://static3.tcdn.com.br/img/img_prod/460977/pop_albus_dumbledore_harry_potter_15_funko_3981_1_20201211171908.jpg"></ProdutoImg>
            <ProdutoDescricao>
                {produto.nomeProduto} <br/>
                Quantidade no estoque: {produto.qtdEstoqueProduto} itens <br/>
                R${produto.valorUnitario} <br/>
                <ProdutoButton>Adicionar ao carrinho</ProdutoButton>
            </ProdutoDescricao>
            
        </ProdutoDiv>
    )
}