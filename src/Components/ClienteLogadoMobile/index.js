import { ContainerLogin, InfoCliente, LogOff } from "./style";

export const ClienteLogadoMobile = () => {
  
  function limparLocalStorage(){
    localStorage.removeItem('idCliente')
    localStorage.removeItem('nomeCliente')
    window.location.reload(true);
  }


  return(
    <ContainerLogin>
      <InfoCliente>Cliente: {localStorage.getItem('nomeCliente')}</InfoCliente>
      <LogOff onClick={limparLocalStorage}>Sair</LogOff>
    </ContainerLogin>
    
  )
}