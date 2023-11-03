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

  return (
    <div>
      <div style={{ height: '400px', position: 'relative' }}>
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
          className=""
        >
          <div
            style={{
              width: '100%',
              height: '400px',
              backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_6894.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>
      <ContentContainer>
        <div>
          <Row className='title-homep-servicos'>Sobre nós</Row>
          Há mais de 30 anos na TRANSCARP trabalhamos para ajudar os nossos clientes a encontrarem as melhores
          soluções para os seus negócios. Há mais de duas gerações que as distâncias e as fronteiras são desafios
          que superamos diariamente, com rigor e profissionalismo, garantindo sempre um serviço de qualidade
          para encurtar distâncias e aproximar vontades. Fruto de uma política de valorização e melhoria contínua,
          na TRANSCARP contamos com colaboradores experientes e competetentes e com um quadro técnico especializado,
          capaz de garantir o melhor serviço aos seus clientes. Desde 1984 que investimos continuamente em veículos
          e equipamentos modernos, garantindo assim mais segurança e as melhores soluções para satisfazer as
          necessidades dos nossos clientes. A nossa missão é garantir aos nossos clientes que as suas encomendas
          chegam rapidamente e em segurança ao seu destino.
          PARCEIROS DE CONFIANÇA DESDE 1984!

          <Row className='title-homep-servicos'>Galeria</Row>

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

          <Row className='title-homep-servicos'>Certificações</Row>
        </div>
      </ContentContainer>
    </div>

  );
}

export default HomePage;
