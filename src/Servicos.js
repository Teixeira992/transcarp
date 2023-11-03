import React from 'react';
import { useState } from 'react';
import ContentContainer from './ContentContainer';
import { Col, Row, Card, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


function HomePage() {
  const imageUrl = `${process.env.PUBLIC_URL}/IMG_6856.jpg`;
  const imageUrl1 = `${process.env.PUBLIC_URL}/expresss.jpg`;
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <div style={{ height: '500px', position: 'relative' }}>
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
          className="scrollable-content"
        >
          <div
            style={{
              width: '100%',
              height: '800px',
              backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_6894.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>
      <ContentContainer>
        <div className='servicos-title'>Os nossos serviços</div>
        <Row xs={1} md={3} className='servicos-title-row'>
          <Col >
            <Card onClick={() => setSmShow(true)}>
              <Card.Img variant="top" src={imageUrl} alt="Card image" />
              <Card.Body>
                <Card.Title>SERVIÇO DE TRANSPORTES NACIONAIS E INTERNACIONAIS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Modal
            show={smShow}
            onHide={() => setSmShow(false)}
            centered
            autoFocus
            dialogClassName="servicos-modal"
          >
            <Modal.Body >
              <Row >
                <Col xs={3}>
                  <img src={imageUrl1} alt="cardimage1" className='card-image' />
                </Col>
                <Col xs={9}>
                  <h3 className='modal-title'>Serviços de Transportes Nacionais e Internacionais</h3>
                  <div className='modal-text'>
                    A Transcarp é especializada em transportar cargas completas e oferece soluções
                    eficientes para a distribuição de mercadorias. Com a capacidade de transportar
                    até 24.000 quilogramas, estamos preparados para atender às necessidades dos nossos
                    clientes, seja para o transporte de cargas completas, em que uma única remessa é
                    enviada, ou para a grupagem, em que várias cargas menores são consolidadas numa
                    única expedição. A versatilidade da Transcarp permite-nos oferecer soluções
                    logísticas personalizadas, garantindo que as mercadorias cheguem ao destino com
                    segurança e dentro do prazo estipulado.
                  </div>
                  <div className='modal-foter'>
                    <div> Contacte-nos |
                      <Button variant="outline-dark" style={{ fontSize: '20px', marginLeft: '10px' }} >
                        Pedir Cotação
                      </Button> </div>
                  </div>

                </Col>
              </Row>

            </Modal.Body>
          </Modal>
          <Col >
            <Card>
              <Card.Img variant="top" src={imageUrl} alt="Card image" />
              <Card.Body>
                <Card.Title>LOGÍSTICA E ARMAZENAGEM</Card.Title>
                <br></br>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card>
              <Card.Img variant="top" src={imageUrl} alt="Card image" />
              <Card.Body>
                <Card.Title>DISTRIBUIÇÃO PORTA-A-PORTA</Card.Title>
                <br></br>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card>
              <Card.Img variant="top" src={imageUrl} alt="Card image" />
              <Card.Body>
                <Card.Title>TRANSPORTES URGENTES</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card>
              <Card.Img variant="top" src={imageUrl} alt="Card image" />
              <Card.Body>
                <Card.Title>MUDANÇAS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </ContentContainer>
    </div>

  );
}

export default HomePage;
