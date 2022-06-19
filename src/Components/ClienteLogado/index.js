import { useContext, useEffect } from "react";
import { DataContext } from "../../Context/data";
import { api } from "../../Services/api";
import { InfoCliente } from "./style";

export const ClienteLogado = () => {

  const { idUsuario, handleSetIdUsuario } = useContext(DataContext);

  return(<InfoCliente>Cliente: {idUsuario}</InfoCliente>)
}