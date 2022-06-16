import React, { useEffect, useState } from "react";
import { SobreDescricao } from "../../Pages/Sobre/style";
import { CarrosselStyle } from "./style";
import ImagemBreno from "../../Sources/img/breno-carrossel.jpg"
import ImagemMarina from "../../Sources/img/marina-carrossel.jpg"
import ImagemPedro from "../../Sources/img/pedro-carrossel.png"
import ImagemSophia from "../../Sources/img/sophia-carrossel.jpg"

function Carrossel(props) {
  const [itemAtivo, setItemAtivo] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setItemAtivo(e => e + 1)
      
    }, 5000);
    
  }, []);

  if(itemAtivo===6){
    setItemAtivo(0)
  }

  function alterarImagem() {
    console.log('clicou')
  }

  console.log("item ativo: " + itemAtivo);
  return (
    <>
    
      <CarrosselStyle>
        {itemAtivo === 0 ? <div className="itemCarrosel">
          <img src={ImagemBreno} alt="Breno" />
          <div className="boxPessoaDesc">
          <SobreDescricao className="descCard">
            Breno de Medeiros Seitz, 28 anos, Residente do SERRATEC em TIC e Software, cursando 
            Sistema em Informação, TI pelo SENAI e amante de tecnologia. Objetivo, persistente e 
            tem foco que se atualiza constantemente faz parte do dia a dia. Tem como hobby jogos
            tipo FPS e simuladores nas horas vagas e viajar em férias.
          </SobreDescricao>
          </div>
        </div> : null}
        {itemAtivo === 1 ? <div className="itemCarrosel">
          <p>Imagem Pessoa 2</p>
          <div className="boxPessoaDesc">
          <SobreDescricao className="descCard">
            Ester é estudante de Desenvolvimento de Sotware. Curte tocar violão, sair com amigos, estudar
            química e assistir futebol. Jogava joguinhos na internet quando era criança e nunca se imaginou
            codando. Atuou como assessora de projetos em uma empresa junior de uma universidade e hoje se 
            aventura no mundo da programação.
          </SobreDescricao>
          </div>
          
        </div> : null}
        {itemAtivo === 2 ? <div className="itemCarrosel">
          <p>Imagem Pessoa 3</p>
          <div className="boxPessoaDesc">
          <SobreDescricao className="descCard">
            Kauã Cassiano, 18 anos. Residente do SERRATEC e estagiário em Blockchain no Inmetro. Um jogador de 
            Aphelios buscando paixão na programação, o que mais poderia dar errado...
          </SobreDescricao>
          </div>
          
        </div> : null}
        {itemAtivo === 3 ? <div className="itemCarrosel">
          <img src={ImagemMarina} alt="Marina" />
          <div className="boxPessoaDesc">
          <SobreDescricao className="descCard">
            Marina tem 30 anos, formada em Tecnologia da Informação e Comunicação pela FAETERJ, atualmente
            cursando Residencia em TIC/Sofware oferecido pelo Serratec em parceria com o SENAI. Já atuou em outras áreas
            como: Infraestrutura, gestão, administração, segurança da informação, marketing e empreendedorismo
          </SobreDescricao>
          </div>
          
        </div> : null}
        {itemAtivo === 4 ? <div className="itemCarrosel">
          <img src={ImagemPedro} alt="Sophia" />
          <div className="boxPessoaDesc">
          <SobreDescricao className="descCard">
            Pedro Henrique, 19 anos, atualmente realizando a Residência em Software do Serratec além de cursar engenhraria da computação.
            Sempre foi interessado na área de tecnologia e tendo mais interesse no BackEnd, está agradavelmente surpreso por gostar
            de FrontEnd. Curte jogos, passou diversas horas jogando League of Legends, porem atualmente está mais voltado para os JRPGS.
          </SobreDescricao>
          </div>
          
        </div> : null}
        {itemAtivo === 5 ? <div className="itemCarrosel">
          <img src={ImagemSophia} alt="Sophia" />
          <div className="boxPessoaDesc">
          <SobreDescricao className="descCard">
            Sophia, tem 18 anos. Se formou no ensino médio em 2021 e atualmente está cursando a Residência de Software do Serratec
          </SobreDescricao>
          </div>
        </div> : null}
        <div className="navegacaoCarrosel">
          <span className={itemAtivo === 0 ? 'botaoCarroselAtivo' : 'botaoCarrosel'} onClick={alterarImagem}></span>
          <span className={itemAtivo === 1 ? 'botaoCarroselAtivo' : 'botaoCarrosel'} onClick={alterarImagem}></span>
          <span className={itemAtivo === 2 ? 'botaoCarroselAtivo' : 'botaoCarrosel'} onClick={alterarImagem}></span>
          <span className={itemAtivo === 3 ? 'botaoCarroselAtivo' : 'botaoCarrosel'} onClick={alterarImagem}></span>
          <span className={itemAtivo === 4 ? 'botaoCarroselAtivo' : 'botaoCarrosel'} onClick={alterarImagem}></span>
          <span className={itemAtivo === 5 ? 'botaoCarroselAtivo' : 'botaoCarrosel'} onClick={alterarImagem}></span>
        </div>
      </CarrosselStyle>
    </>
  );
}

export default Carrossel;
