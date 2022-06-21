import React, {useState, useEffect, useContext} from "react";
import {Link, useNavigate} from "react-router-dom"
import { Container, Titulo } from "../global-style";
import { AdmButton, Form, FormInput, LoginButton, PopupStyle, RegistroButton } from "./style";
import {api} from '../../Services/api'
import { DataContext } from "../../Context/data";
import { Loader } from "../../Components/Loader";

export const Login = () => {
  const { idUsuario, handleSetIdUsuario } = useContext(DataContext);
  const [statusCliente, setStatusCliente] = useState(0)
  const [statusCliente1, setStatusCliente1] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const [isEmailCerto, setEmailCerto] = useState(false)
  const [clienteList, setClienteList] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  let cliente;
  let idCliente;


  useEffect(()=>{
    getClientes()
    console.log(clienteList)

  }, [])

  const getClientes = async () => {
    const response = await api.get(`cliente/`)
    setClienteList(response.data)
  }  

  function getIdCliente (email){
    cliente = clienteList.filter(c => c.email === email)
    if(cliente[0] === undefined){
      setStatusCliente1(e => 401)
      setEmailCerto(false)
    }else{
      setEmailCerto(true)
      idCliente = cliente[0].idCliente;
      localStorage.setItem('idCliente', cliente[0].idCliente)
      localStorage.setItem('nomeCliente', cliente[0].nomeCompleto)      
    }    
  }

  function handleEmailChange(e){
    setEmail(e.target.value)
  }

  function handlePasswordChange(e){
    setPassword(e.target.value)
  }

  const allowLogin = async (email, password) => {
    try{
      const res = await api.get(`cliente/logar_cliente?email=${email}&password=${password}`)
      setStatusCliente(e => res.status)
      handleSetIdUsuario(idCliente);
    }catch(error){
      setStatusCliente(e => 400)
      localStorage.removeItem('idCliente')
      localStorage.removeItem('nomeCliente')
    }          
  }

  function logar() {
    getIdCliente(email);
    allowLogin(email, password);
  }  

  function gotToAdm() {
    navigate("../admlogin")
  }

  function load() {
    setLoading(e => true)
    setTimeout(function() {
      setLoading(e => false)
      logar()
    }, 800)
  }

  return (
    <>
      <Container>
      <Titulo>Login Cliente</Titulo>
      <Form>
        <FormInput onChange={e => handleEmailChange(e)} type="text" placeholder="Email"/>
        <FormInput onChange={e => handlePasswordChange(e)} type="password" placeholder="Senha"/>
        <LoginButton onClick={load}>Entrar</LoginButton>
        <Link to="/registro" style={{textDecoration: "none"}}><RegistroButton>Não tem uma conta? Cadastre-se</RegistroButton></Link>                
      </Form>

      <AdmButton onClick={gotToAdm}>Login Admin</AdmButton>
    </Container>
    {isLoading === true ? <>
      <PopupStyle>
                <div className='popup-tela'>
                  <p>Carregando...</p>
                  <Loader/>
                </div>
            </PopupStyle> 
    </> : ''}
    {isLoading === false && statusCliente === 200 ? <>
      <PopupStyle>
          <div className='popup-tela'>
            <p>Cliente autenticado com sucesso!</p>
            <div className="botoes">
              <button onClick={() => {navigate('../catalogo'); window.location.reload(true)}}>OK</button>
            </div>
          </div>
        </PopupStyle> 
    </> : ''}
    {isLoading === false && statusCliente === 400 && isEmailCerto === true ? <>
      <PopupStyle>
          <div className='popup-tela'>
            <h2>Sua senha está errada...</h2>
            <p>Tente novamente</p>
            <div className="botoes">
              <button onClick={() => setStatusCliente(e => 0)}>OK</button>
            </div>
          </div>
        </PopupStyle>
    </> : ''}
    {isLoading === false && statusCliente1 === 401 && isEmailCerto === false ? <>
      <PopupStyle>
          <div className='popup-tela'>
            <h2>Parece que você não tem um email!</h2>
            <p>Por favor, crie um email</p>
            <div className="botoes">
              <button onClick={() => {navigate("../registro"); window.location.reload(true)}}>OK</button>
            </div>
          </div>
        </PopupStyle>
    </> : ''}
    
    </>
  );
};
