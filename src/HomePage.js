import React from 'react';
import ContentContainer from './ContentContainer';
import { Col, Row, Card } from 'react-bootstrap';
import { BsTelephonePlusFill, BsPencilSquare, BsBoxes } from 'react-icons/bs';
import { FaWarehouse, FaTruckMoving, FaGlobe } from 'react-icons/fa';
import { PiTruck } from 'react-icons/pi';
import { TbUrgent, TbHomeMove } from 'react-icons/tb';
import { FaTruckFast } from 'react-icons/fa6';


function HomePage() {
  const imageUrl = `${process.env.PUBLIC_URL}/IMG_6856.jpg`;
  const videoMP4 = `${process.env.PUBLIC_URL}/pag_inicial.mp4`;
  return (
    <div id='home'>
      <div style={{ position: 'relative' }}>
        <video autoPlay loop muted playsInline className="video-style">
          <source src={videoMP4} type="video/mp4" />
        </video>
        <div className="text-overlay">
        </div>
      </div>
      <ContentContainer>
        <Row>
          <div className="homep-first-div">
            <div className="homep-first-div-img">
              <img src={imageUrl} alt="Hexagon" loading='lazy' />
            </div>
            <div className="homep-first-div-text">
              <div className='homep-first-div-title'>Conectamos destinos, entregamos excelência</div>
            </div>
          </div>
        </Row>
        <div className='title-homep-servicos'>Os nossos Serviços</div>
        <a href="#servicos" style={{ textDecoration: "none" }}>
          <Row md={3} xs={1} style={{ display: 'flex', justifyContent: 'center' }}>
            <Col className='servicos-col'>
              <Card className="card-highlight">
                <span><PiTruck size={80} style={{ marginRight: '30px' }}></PiTruck > <FaGlobe size={70}></FaGlobe></span>
                <Card.Title className='card-highlight-text'>
                  <Card.Text>SERVIÇO DE TRANSPORTES NACIONAIS E INTERNACIONAIS</Card.Text>
                </Card.Title>
              </Card>
            </Col>
            {/*<Col className='servicos-col' >
              <Card className="card-highlight">
                <FaHome size={75}></FaHome >
                <Card.Title className='card-highlight-text'>
                  <Card.Text className='card-highlight-text' > DISTRIBUIÇÃO PORTA-A-PORTA</Card.Text>
                </Card.Title>
              </Card>
            </Col>
        */}
            <Col className='servicos-col' >
              <Card className="card-highlight">
                <span><FaWarehouse size={75} style={{ marginRight: '30px' }}></FaWarehouse>
                  <BsBoxes size={75}></BsBoxes></span>
                <Card.Title className='card-highlight-text'>
                  <Card.Text>LOGÍSTICA E ARMAZENAGEM</Card.Text>
                </Card.Title>
              </Card>
            </Col>
          </Row>
          <br></br>
          <Row md={3} xs={1} style={{ display: 'flex', justifyContent: 'center' }} >
            <Col className='servicos-col'>
              <Card className="card-highlight">
                <span><FaTruckFast size={75} style={{ marginRight: '30px' }}></FaTruckFast >
                  <TbUrgent size={75}></TbUrgent></span>
                <Card.Title className='card-highlight-text'>
                  <Card.Text>TRANSPORTES URGENTES</Card.Text>
                </Card.Title>
              </Card>
            </Col>
            <Col className='servicos-col'>
              <Card className="card-highlight">
                <span><FaTruckMoving size={75} style={{ marginRight: '30px' }}></FaTruckMoving >
                  <TbHomeMove size={75}></TbHomeMove></span>
                <Card.Title className='card-highlight-text'>
                  <Card.Text>MUDANÇAS</Card.Text>
                </Card.Title>
              </Card>
            </Col>
          </Row>
        </a>
        <div className="row justify-content-center" style={{ marginTop: '100px' }}>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <Card className='card-homep-contactos card-large'>
              <Card.Body className='card-body-homep-contactos'>
                <Card.Text className='card-body-homep-contactos-text'>
                  <BsTelephonePlusFill size={50}></BsTelephonePlusFill>
                  <br></br>
                  <br></br>
                  <span className='hp-contactos'><a href='#contactos' style={{ textDecoration: 'none', color: 'black' }}>Contacte-nos</a></span>
                  <br></br>
                  <br></br>
                  <span>+351 251 795 345</span>
                  <br></br>
                  <span>+351 964 514 005</span>
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
                  <span className='hp-contactos'><a href='#pedidocotacao' style={{ textDecoration: 'none', color: 'black' }}>Peça uma Cotação</a></span>
                  <br></br>
                  <br></br>
                  <span>Preencha o formulário para que consigamos dar a melhor solução ao seu pedido</span>
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
