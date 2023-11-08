import React from 'react';
import ContentContainer from './ContentContainer';
import { Row, Col } from 'react-bootstrap';


function Aniversario() {
  const anivImg = `${process.env.PUBLIC_URL}/IMG_8738.JPG`;

  const divStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_6856.jpg)`, // Caminho para a imagem de fundo
    backgroundSize: 'cover',
    color: 'white',
    textAlign: 'center',
    fontSize: '200px',
    fontWeight: '900',
    maxWidth: '100%',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div>
      <div style={divStyle}>
        <div >40ºAniversário</div>
      </div>
      <ContentContainer>
        <Row>
          <div className="container-aniv">
            <div className="texto-aniv">
              <p>Ainda hoje de cariz familiar, a TRANSCARP, é uma sociedade comercial por quotas a qual, na origem,
                acolheu todo o núcleo familiar do seu fundador, Rui Gomes Carpinteira. Patriarca e grande impulsionador
                deste negócio, o qual representa grande parte da sua vida, Rui Gomes Carpinteira iniciou a atividade
                de transporte rodoviário de mercadorias por conta de outrem, primeiro como empresário em nome individual
                em 1968, sendo que, com a constituição da sociedade comercial, a respetiva atividade económica, passou
                para RUI CARPINTEIRA & Cia, LDA (designação da firma, aquando da sua criação) a partir de 1 de janeiro
                de 1984.
              </p>
              <p >
                Em finais de 2002 e após alguns anos mais problemáticos ao nível da respetiva gestão, a empresa altera
                a respetiva denominação para a atual TRANSCARP - TRANSPORTES E LOGÍSTICA, LDA, redefine o seu pacto
                social e altera/moderniza a respetiva imagem junto do mercado.
              </p>
              <p >
                Em janeiro de 2003, a TRANSCARP, que ainda hoje permanece como a empresa da Família Carpinteira,
                adota novos sistemas de gestão e controlo internos os quais, num primeiro momento, permitiram garantir
                a estabilização da situação económico-financeira da empresa e um conhecimento mais adequado das condições
                de atuação da empresa no mercado e, depois, adotar políticas de investimento, mais consentâneas com as
                suas necessidades.
              </p>
              <p >
                A conquista sempre crescente de quota de mercado, à qual não é alheia a imagem de seriedade, força e
                competência do seu principal rosto, que ainda hoje comanda os destinos da empresa, o senhor Rui Gomes
                Carpinteira, têm possibilitado, desde então, o robustecimento e modernização da empresa, com preocupações
                permanentes de reforço do investimento produtivo, de que são nota a contínua renovação da frota ou a
                construção de uma nova zona de parqueamento de quase 4 mil m2, junto à sede da empresa, a qual também,
                dentro do possível, também viu melhoradas a sua imagem e funcionalidade.
              </p>
            </div>
            <div className="imagem-aniv">
              <img src={anivImg} alt="aniv" />
            </div>
          </div>
        </Row>
      </ContentContainer>
    </div >

  );
}

export default Aniversario;
