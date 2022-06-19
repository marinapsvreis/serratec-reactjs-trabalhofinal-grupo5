import React, { useState, useEffect } from "react";
import { PopupStyle } from "./style";
import { api } from "../../Services/api";

export const Popup = (props) => {
  const [informacaoPost, setInformacaoPost] = useState({});

  useEffect(() => {
    if(props.titulo === 'categoria') {
        let info = props.informacoes
        setInformacaoPost({info});
    }
    if(props.titulo === 'produto') {
        let info = props.informacoes
        setInformacaoPost({info})
    }
  }, []);

  function enviarInformacoes() {
    if (props.titulo === "categoria") {
      const postCategoriaAPI = async () => {
        try {
          const res = await api.post("categoria", {
            nomeCategoria: informacaoPost.info.Nome,
            descricaoCategoria: informacaoPost.info.Descricao,
            imagemCategoria: informacaoPost.info.Imagem,
          });
        } catch (error) {
          console.log(error);
        }
      };
      postCategoriaAPI();
    }

    if (props.titulo === 'produto') {
        const postProdutoAPI = async () => {
            try {
              const res = await api.post("produto", {
                nomeProduto: informacaoPost.info.Nome,
                descricaoProduto: informacaoPost.info.Descricao,
                qtdEstoqueProduto: parseInt(informacaoPost.info.Quantidade),
                valorUnitario: parseFloat(informacaoPost.info.ValorUnitario),
                nomeImagemProduto: informacaoPost.info.NomeImagem,
                idCategoria: parseInt(informacaoPost.info.IdCategoria)
              });
            } catch (error) {
                console.log(error)
            }
          };
          postProdutoAPI();
    }
  }

  return (
    <>
      <PopupStyle>
        <div className="popup-tela">
          <p>Tem certeza que deseja criar uma uma {props.titulo}?</p>
                <div className="botoes">
                    <button className="close" onClick={props.clickFechar}>Cancelar</button>
                    <button className="close" onClick={() => {
                        enviarInformacoes();
                        props.clickConfirmar()}}>Confirmar</button>
                </div>
        </div>
      </PopupStyle>
    </>
  );
};
