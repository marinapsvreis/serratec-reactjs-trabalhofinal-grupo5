import React from "react";
import { PopupStyle } from "./style";
import { useNavigate } from "react-router-dom";

export const PopupRespostaAPI = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <PopupStyle>
        <div className="popup-tela">
          {props.titulo === 'cliente' && props.status === 'sucesso' ? <><p>Sucesso ao registrar {props.titulo}</p>
            <button className="botaoConfirmar" onClick={() => navigate("/login")}>OK</button></> : ''
          }
          {props.titulo === 'cliente' && props.status === 'error' ? <>
            <h2>{props.errorHead}</h2>
            <p>{props.errorMessage}</p>
            <button className="botaoConfirmar" onClick={props.click}>OK</button></> : ''
          }
        </div>
      </PopupStyle>
    </>
  );
};
