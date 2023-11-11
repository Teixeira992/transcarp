import React from 'react';
import ContentContainer from './ContentContainer';
import { Col, Row, Card } from 'react-bootstrap';
import { BsTelephonePlusFill, BsPencilSquare, BsBoxes } from 'react-icons/bs';
import { FaWarehouse, FaHome, FaTruckMoving, FaGlobe } from 'react-icons/fa';
import { PiTruck } from 'react-icons/pi';
import { TbUrgent, TbHomeMove } from 'react-icons/tb';
import { FaTruckFast } from 'react-icons/fa6';

function HomePage() {
  const imageUrl = `${process.env.PUBLIC_URL}/IMG_6856.jpg`;
  const videoMP4 = `${process.env.PUBLIC_URL}/transcarp_low.mp4`;
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <video autoPlay loop muted className="video-style">
          <source src={videoMP4} type="video/mp4" />
        </video>
        <div className="text-overlay">
        </div>
      </div>
      <ContentContainer>
        <Row xs={12}>
          <div className="homep-first-div">
            <div className="homep-first-div-img">
              <img src={imageUrl} alt="Hexagon" />
            </div>
            <div className="homep-first-div-text">
              <div className='homep-first-div-title'>Conectamos destinos, entregamos excelência</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </Row>
        <div className='title-homep-servicos'>Os nossos Serviços</div>
        <Row md={3} xs={1} style={{ display: 'flex', justifyContent: 'center' }}>
          <Col className='servicos-col'>
            <Card className="card-highlight">
              <span><PiTruck size={80} style={{ marginRight: '30px' }}></PiTruck > <FaGlobe size={70}></FaGlobe></span>
              <Card.Text className='card-highlight-text'>
                <Card.Title>SERVIÇO DE TRANSPORTES NACIONAIS E INTERNACIONAIS</Card.Title>
              </Card.Text>
            </Card>
          </Col>
          <Col className='servicos-col' >
            <Card className="card-highlight">
              <FaHome size={75}></FaHome >
              <Card.Text className='card-highlight-text'>
                <Card.Title className='card-highlight-text' > DISTRIBUIÇÃO PORTA-A-PORTA</Card.Title>
              </Card.Text>
            </Card>
          </Col>
          <Col className='servicos-col' >
            <Card className="card-highlight">
              <span><FaWarehouse size={75} style={{ marginRight: '30px' }}></FaWarehouse>
                <BsBoxes size={75}></BsBoxes></span>
              <Card.Text className='card-highlight-text'>
                <Card.Title>LOGÍSTICA E ARMAZENAGEM</Card.Title>
              </Card.Text>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row md={3} xs={1} style={{ display: 'flex', justifyContent: 'center' }} >
          <Col className='servicos-col'>
            <Card className="card-highlight">
              <span><FaTruckFast size={75} style={{ marginRight: '30px' }}></FaTruckFast >
                <TbUrgent size={75}></TbUrgent></span>
              <Card.Text className='card-highlight-text'>
                <Card.Title>TRANSPORTES URGENTES</Card.Title>
              </Card.Text>
            </Card>
          </Col>
          <Col className='servicos-col'>
            <Card className="card-highlight">
              <span><FaTruckMoving size={75} style={{ marginRight: '30px' }}></FaTruckMoving >
                <TbHomeMove size={75}></TbHomeMove></span>
              <Card.Text className='card-highlight-text'>
                <Card.Title>MUDANÇAS</Card.Title>
              </Card.Text>
            </Card>
          </Col>
        </Row>
        <div className="row justify-content-center" style={{ marginTop: '100px' }}>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <Card className='card-homep-contactos card-large'>
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
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <Card className='card-homep-contactos card-large'>
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
        </div>
      </ContentContainer >
      <br></br>
      <br></br>
      <br></br>

    </div >

  );
}

export default HomePage;
