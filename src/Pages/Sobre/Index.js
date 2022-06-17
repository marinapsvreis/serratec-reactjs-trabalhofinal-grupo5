import React from 'react';
import Carrossel from '../../Components/Carrossel';
import Footer from '../../Components/Footer';
import { Navbar } from '../../Components/Navbar';
import { Container, Titulo } from '../global-style';
import { SobreDescricao, SobreMain } from './style';

export const Sobre = (props) => {
    return (
        <>
        <SobreMain>
        <Container className='sobre'>
            <Titulo className='titulo'>Sobre</Titulo>
            <SobreDescricao>
                Somos uma loja de bonecos colecionaveis e prezamos pela sua coleção,
                acessa paginas exclusivas pelo tema desejado e garanta já os seus
                personagens favoritos. Existem alguma unidade que você gostaria e não
                apresentamos em nosso catalogo? Entre em contato conosco pleos links
                fornecidos no fim da página para solicitar os personagens de sua
                preferência. Seu feedback é tudo para nós
            </SobreDescricao>
            <Titulo className='titulo'>Responsáveis pela loja</Titulo>
            <Carrossel/>
        </Container>
        <Footer>

        </Footer>
        </SobreMain>
        </>
    );
}