import React, { useState } from "react";
import { api } from "../../Services/api";
import { Loader } from "../Loader";
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
  const [errorMessageHead, setErrorMessageHead] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({
        msgStatus: ''
    })

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

  const handleSubmit = (event) => {
    event.preventDefault();
}

  function reloadPage() {
    window.location.reload(true)
  }

  function load() {
      setLoading(true)
      setTimeout(function() {
          setLoading(false)
          editarProduto()
      }, 800)
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
      setStatus({msgStatus: 'alteradoSucesso'})
    } else {
      setStatus({msgStatus: 'alteracaoErro'})
    }
  }

  return (
    <>
      {loading === false && status.msgStatus === '' ? <>
      <PopupStyle>
        <div className="popup-tela">
          <Form onSubmit={handleSubmit}>
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
              <CancelarButton onClick={props.click}>Cancelar</CancelarButton>
              <RegistroButton onClick={load}>Alterar</RegistroButton>
            </ButtonContainer>
          </Form>
        </div>
      </PopupStyle>
      </>: ''}
      {loading === true ? <>
        <PopupStyle>
                <div className='popup-tela'>
                    <p>Carregando...</p>
                    <Loader/>
                </div>
        </PopupStyle></> : ''}
        {status.msgStatus === 'alteradoSucesso' ? <>
            <PopupStyle>
                <div className='popup-tela'>
                    <p>Alterações feitas com sucesso!</p>
                    <button onClick={reloadPage}>OK!</button>
                </div>
            </PopupStyle> 
            </> : ''}
            {status.msgStatus === 'alteracaoErro' ? <>
            <PopupStyle>
                <div className='popup-tela'>
                    <p>Ops... Parece que ocorreu um erro.</p>
                    <button onClick={reloadPage}>OK!</button>
                </div>
            </PopupStyle> 
            </> : ''}
    </>
  );
};
