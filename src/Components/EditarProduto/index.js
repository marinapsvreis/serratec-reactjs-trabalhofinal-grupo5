import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Services/api";
import { CancelarButton, PopupStyle } from "./style";
import { Input, Form, ButtonContainer, RegistroButton } from "./style";

export const EditarProduto = (props) => {
  const [nomeProduto, setNomeProduto] = useState(props.produto.nomeProduto);
  const [descricaoProduto, setDescricaoProduto] = useState(
    props.produto.descricaoProduto
  );
  const [qtdEstoqueProduto, setQtdEstoqueProduto] = useState(
    props.produto.qtdEstoqueProduto
  );
  const [valorUnitario, setValorUnitario] = useState(
    props.produto.valorUnitario
  );
  const [nomeImagemProduto, setNomeImagemProduto] = useState(
    props.produto.nomeImagemProduto
  );
  const [idCategoria, setIdCategoria] = useState(props.produto.idCategoria);
  let navigate = useNavigate();

  function handleNomeChange(e) {
    setNomeProduto(e.target.value);
  }

  function handleDescricaoChange(e) {
    setDescricaoProduto(e.target.value);
  }

  function handleQtdEstoqueChange(e) {
    setQtdEstoqueProduto(e.target.value);
  }

  function handleValorUnitarioChange(e) {
    setValorUnitario(e.target.value);
  }

  function handleNomeImagemChange(e) {
    setNomeImagemProduto(e.target.value);
  }

  function handleCategoriaChange(e) {
    setIdCategoria(e.target.value);
  }

  async function editarProduto() {
    const response = await api.put(`produto?idProduto=${props.id}`, {
      nomeProduto: nomeProduto,
      descricaoProduto: descricaoProduto,
      qtdEstoqueProduto: qtdEstoqueProduto,
      valorUnitario: valorUnitario,
      nomeImagemProduto: nomeImagemProduto,
      idCategoria: idCategoria,
    });
    if (response.status === 200) {
      alert("Alteração realizada com sucesso!");
      navigate("../painel_administrativo/produto");
    } else {
      alert("Erro ao atualizar!");
    }
  }

  return (
    <>
      <PopupStyle>
        <div className="popup-tela">
          <Form>
            <Input
              type="text"
              value={nomeProduto}
              onChange={(e) => handleNomeChange(e)}
            />
            <Input
              type="text"
              value={descricaoProduto}
              onChange={(e) => handleDescricaoChange(e)}
            />
            <Input
              type="number"
              value={qtdEstoqueProduto}
              onChange={(e) => handleQtdEstoqueChange(e)}
            />
            <Input
              type="number"
              value={valorUnitario}
              onChange={(e) => handleValorUnitarioChange(e)}
            />
            <Input
              type="text"
              value={nomeImagemProduto}
              onChange={(e) => handleNomeImagemChange(e)}
            />
            <Input
              type="text"
              value={idCategoria}
              onChange={(e) => handleCategoriaChange(e)}
            />
            <ButtonContainer>
              <RegistroButton onClick={editarProduto}>Alterar</RegistroButton>
              <CancelarButton onClick={props.handleEditarAtivo}>
                Cancelar
              </CancelarButton>
            </ButtonContainer>
          </Form>
        </div>
      </PopupStyle>
    </>
  );
};
