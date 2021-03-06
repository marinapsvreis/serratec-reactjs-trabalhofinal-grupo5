import React, { useEffect, useState } from "react";
import { SobreDescricao } from "../../Pages/Sobre/style";
import { CarrosselStyle } from "./style";
import ImagemBreno from "../../Sources/img/breno-carrossel.jpg";
import ImagemMarina from "../../Sources/img/marina-carrossel.jpg";
import ImagemPedro from "../../Sources/img/pedro-carrossel.png";
import ImagemSophia from "../../Sources/img/sophia-carrossel.jpg";
import ImagemKaua from "../../Sources/img/kaua-carrossel.jpg";
import ImagemEster from "../../Sources/img/ester-carossel.jpg";
import Seta1 from "../../Sources/icons/icons8-arrow-50.png";
import Seta2 from "../../Sources/icons/icons8-arrow-50.png";

function Carrossel(props) {
  const [itemAtivo, setItemAtivo] = useState(0);
  const [contador, setContador] = useState(4);
  const timer = () => setContador(contador - 1);

  useEffect(() => {
    if (contador <= 0) {
      setContador((e) => 4);
      setItemAtivo((e) => e + 1);
      if (itemAtivo >= 5) {
        setItemAtivo((e) => 0);
        return;
      }
      return;
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [contador]);

  function alterarImagem(id) {
    setItemAtivo((e) => id);
    setContador((e) => 4);
  }

  function voltarImagem() {
    if (itemAtivo === 0) {
      setItemAtivo((e) => 5);
      setContador((e) => 4);
    } else {
      setItemAtivo((e) => e - 1);
      setContador((e) => 4);
    }
  }

  function avancarImagem() {
    if (itemAtivo === 5) {
      setItemAtivo((e) => 0);
      setContador((e) => 4);
    } else {
      setItemAtivo((e) => e + 1);
      setContador((e) => 4);
    }
  }

  return (
    <>
      <CarrosselStyle>
        {itemAtivo === 0 ? (
          <div className="itemCarrosel">
            <div className="imagemCarrossel">
              <img src={ImagemBreno} alt="Breno" />
            </div>
            <div className="descricaoCarrossel">
              <SobreDescricao className="descCard">
                Breno de Medeiros Seitz, 28 anos, Residente do SERRATEC em TIC e
                Software, cursando Sistema em Informa????o, TI pelo SENAI e amante
                de tecnologia. Objetivo, persistente e tem foco que se atualiza
                constantemente faz parte do dia a dia. Tem como hobby jogos tipo
                FPS e simuladores nas horas vagas e viajar em f??rias.
              </SobreDescricao>
            </div>
          </div>
        ) : null}
        {itemAtivo === 1 ? (
          <div className="itemCarrosel">
            <div className="imagemCarrossel">
              <img src={ImagemEster} alt="Ester" />
            </div>
            <div className="descricaoCarrossel">
              <SobreDescricao className="descCard">
                Ester ?? estudante de Desenvolvimento de Sotware. Curte tocar
                viol??o, sair com amigos, estudar qu??mica e assistir futebol.
                Jogava joguinhos na internet quando era crian??a e nunca se
                imaginou codando. Atuou como assessora de projetos em uma
                empresa junior de uma universidade e hoje se aventura no mundo
                da programa????o.
              </SobreDescricao>
            </div>
          </div>
        ) : null}
        {itemAtivo === 2 ? (
          <div className="itemCarrosel">
            <div className="imagemCarrossel">
              <img src={ImagemKaua} alt="Kaua" />
            </div>
            <div className="descricaoCarrossel">
              <SobreDescricao className="descCard">
                Kau?? Cassiano, 18 anos. Residente do SERRATEC e estagi??rio em
                Blockchain no Inmetro. Esfor??ado e animado para conhecer esse vasto 
                mundo da tecnologia e as ferramentas da programa????o.  
              </SobreDescricao>
            </div>
          </div>
        ) : null}
        {itemAtivo === 3 ? (
          <div className="itemCarrosel">
            <div className="imagemCarrossel">
              <img src={ImagemMarina} alt="Marina" />
            </div>
            <div className="descricaoCarrossel">
              <SobreDescricao className="descCard">
                Marina tem 30 anos, formada em Tecnologia da Informa????o e
                Comunica????o pela FAETERJ, atualmente cursando Residencia em
                TIC/Sofware oferecido pelo Serratec em parceria com o SENAI. J??
                atuou em outras ??reas como: Infraestrutura, gest??o,
                administra????o, seguran??a da informa????o, marketing e
                empreendedorismo
              </SobreDescricao>
            </div>
          </div>
        ) : null}
        {itemAtivo === 4 ? (
          <div className="itemCarrosel">
            <div className="imagemCarrossel">
              <img src={ImagemPedro} alt="Pedro" />
            </div>
            <div className="descricaoCarrossel">
              <SobreDescricao className="descCard">
                Pedro Henrique, 19 anos, atualmente realizando a Resid??ncia em
                Software do Serratec al??m de cursar engenhraria da computa????o.
                Sempre foi interessado na ??rea de tecnologia e tendo mais
                interesse no BackEnd, est?? agradavelmente surpreso por gostar de
                FrontEnd.
              </SobreDescricao>
            </div>
          </div>
        ) : null}
        {itemAtivo === 5 ? (
          <div className="itemCarrosel">
            <div className="imagemCarrossel">
              <img src={ImagemSophia} alt="Sophia" />
            </div>
            <div className="descricaoCarrossel">
              <SobreDescricao className="descCard">
                Sophia, tem 18 anos. Se formou no ensino m??dio em 2021 e atualmente est?? cursando a Resid??ncia de Software do Serratec
              </SobreDescricao>
            </div>
          </div>
        ) : null}
        <div className="navegacaoCarrosel">
          <div className="left" onClick={voltarImagem}>
            <img src={Seta2} alt="seta" />
          </div>
          <div className="middle">
            <span
              className={
                itemAtivo === 0 ? "botaoCarroselAtivo" : "botaoCarrosel"
              }
              onClick={() => alterarImagem(0)}
            ></span>
            <span
              className={
                itemAtivo === 1 ? "botaoCarroselAtivo" : "botaoCarrosel"
              }
              onClick={() => alterarImagem(1)}
            ></span>
            <span
              className={
                itemAtivo === 2 ? "botaoCarroselAtivo" : "botaoCarrosel"
              }
              onClick={() => alterarImagem(2)}
            ></span>
            <span
              className={
                itemAtivo === 3 ? "botaoCarroselAtivo" : "botaoCarrosel"
              }
              onClick={() => alterarImagem(3)}
            ></span>
            <span
              className={
                itemAtivo === 4 ? "botaoCarroselAtivo" : "botaoCarrosel"
              }
              onClick={() => alterarImagem(4)}
            ></span>
            <span
              className={
                itemAtivo === 5 ? "botaoCarroselAtivo" : "botaoCarrosel"
              }
              onClick={() => alterarImagem(5)}
            ></span>
          </div>
          <div className="right" onClick={avancarImagem}>
            <img src={Seta1} alt="right" />
          </div>
        </div>
      </CarrosselStyle>
    </>
  );
}

export default Carrossel;
