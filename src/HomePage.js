import React from 'react';
import ContentContainer from './ContentContainer';
import { Col, Row, Card } from 'react-bootstrap';
import { BsTelephonePlusFill, BsPencilSquare } from 'react-icons/bs';


function HomePage() {
  const imageUrl = `${process.env.PUBLIC_URL}/IMG_6856.jpg`;
  const videoMP4 = `${process.env.PUBLIC_URL}/transcarp_1min.mp4`;
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <video autoPlay loop muted className="video-style">
          <source src={videoMP4} type="video/mp4" />
        </video>
        <div className="text-overlay">
          <h1>Slogan da Empresa </h1>
          <p>(ou então não colocar nenhum texto aqui)</p>
        </div>
      </div>
      <ContentContainer>
        <Row>
          <div className="homep-first-div">
            <div className="homep-first-div-img">
              <img src={imageUrl} alt="Hexagon" />
            </div>
            <div className="homep-first-div-text">
              <div className='homep-first-div-title'>Titulo/Frase</div>
              <p className='homep-first-div-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </Row>
        <div className='title-homep-servicos'>Os nossos Serviços</div>
        <Row md={3} style={{ display: 'flex', justifyContent: 'center' }}>
          <Col>
            <Card className="bg-dark text-white card-highlight">
              <Card.Img src={imageUrl} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Serviço 1</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className="bg-dark text-white card-highlight">
              <Card.Img src={imageUrl} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Serviço 2</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className="bg-dark text-white card-highlight">
              <Card.Img src={imageUrl} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Serviço 3</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row md={3} style={{ display: 'flex', justifyContent: 'center' }} >
          <Col>
            <Card className="bg-dark text-white card-highlight">
              <Card.Img src={imageUrl} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Serviço 4</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className="bg-dark text-white card-highlight">
              <Card.Img src={imageUrl} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Serviço 5</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
          <Card className='card-homep-contactos'>
            <Card.Body className='card-body-homep-contactos'>
              <Card.Text className='card-body-homep-contactos-text'>
                <BsTelephonePlusFill size={50}></BsTelephonePlusFill>
                <br></br>
                <br></br>
                <h1>Contacte-nos</h1>
                <br></br>
                <p>+351 123123123</p>
                <p>+351 123123123</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='card-homep-contactos'>
            <Card.Body className='card-body-homep-contactos'>
              <Card.Text className='card-body-homep-contactos-text' >
                <BsPencilSquare size={50}></BsPencilSquare>
                <br></br>
                <br></br>
                <h1>Peça uma Cotação</h1>
                <br></br>
                <p>Preencha o formulário para que consigamos dar a melhor solução ao seu pedido</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </ContentContainer>
      <br></br>
      <br></br>
      <br></br>

    </div>

  );
}

export default HomePage;
