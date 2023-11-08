import React from 'react';
import ContentContainer from './ContentContainer';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import photos from './photos';

function HomePage() {
  const [index, setIndex] = useState(-1);
  const imageUrl = `${process.env.PUBLIC_URL}/IMG_6856.jpg`;
  const certUrl = `${process.env.PUBLIC_URL}/certificado.png`;

  return (
    <div>
      <div style={{ maxWidth: '100%', height: '50vh', position: 'relative' }}>
        <div
          className="scrollable-content"
        >
          <div
            style={{
              maxWidth: '100%',
              height: '50vh',
              backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_6894.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>
      <ContentContainer>
        <div>
          <Row className='sobre-nos-title'>Sobre nós</Row>
          <p className='sobre-nos-text '>Há mais de 30 anos na TRANSCARP trabalhamos para ajudar os nossos clientes a encontrarem as melhores
            soluções para os seus negócios. Há mais de duas gerações que as distâncias e as fronteiras são desafios
            que superamos diariamente, com rigor e profissionalismo, garantindo sempre um serviço de qualidade
            para encurtar distâncias e aproximar vontades. Fruto de uma política de valorização e melhoria contínua,
            na TRANSCARP contamos com colaboradores experientes e competetentes e com um quadro técnico especializado,
            capaz de garantir o melhor serviço aos seus clientes. Desde 1984 que investimos continuamente em veículos
            e equipamentos modernos, garantindo assim mais segurança e as melhores soluções para satisfazer as
            necessidades dos nossos clientes. A nossa missão é garantir aos nossos clientes que as suas encomendas
            chegam rapidamente e em segurança ao seu destino.
          </p>

          <Row className='sobre-nos-title'>Galeria</Row>
          <PhotoAlbum photos={photos}
            layout="rows"
            targetRowHeight={200}
            onClick={({ index }) => setIndex(index)} />

          <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />

          <Row className='sobre-nos-title'>Certificações</Row>
          <div className="container-cert">
            <div className="imagem-cert">
              <img src={certUrl} alt="cert-img" />
            </div>
            <div className="texto-cert">
              <p>A ISO 9001 é a norma de sistemas de gestão mais utilizada mundialmente, sendo a referência
                internacional para a Certificação de Sistemas de Gestão da Qualidade.
                A adoção de um Sistema de Gestão da Qualidade é, segundo a ISO 9001, uma decisão estratégica
                da Organização, ou seja, tomada ao mais alto nível de decisão para servir um propósito específico
                e obter resultados.

                Ao endereçar a capacidade de satisfazer as necessidades e expetativas dos clientes, aumentar a
                sua satisfação através de um sistema de gestão e melhorar o desempenho global da Organização, a
                ISO 9001 assenta no propósito fundamental da existência de uma Organização.

                A ISO 9001 adota uma abordagem por processos, que incorpora o ciclo PDCA de melhoria contínua, e
                integra o pensamento baseado em risco, permitindo não só a fidelização do cliente como também a
                competitividade da organização assente nos pilares da sustentabilidade.
              </p>
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>

  );
}

export default HomePage;
