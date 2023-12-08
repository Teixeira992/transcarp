import React from 'react';
import { useState } from 'react';
import ContentContainer from './ContentContainer';
import { Col, Row, Card, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


function HomePage() {
  const imageUrl1 = `${process.env.PUBLIC_URL}/galeria_8.jpg`;
  const imageUrl2 = `${process.env.PUBLIC_URL}/armaz_2.jpg`;
  //const imageUrl3 = `${process.env.PUBLIC_URL}/distribuição_porta_a_porta.jpg`;
  const imageUrl4 = `${process.env.PUBLIC_URL}/galeria_7.jpg`;
  const imageUrl5 = `${process.env.PUBLIC_URL}/galeria_2.jpg`;

  const [serv1Show, setServ1Show] = useState(false);
  const [serv2Show, setServ2Show] = useState(false);
  //const [serv3Show, setServ3Show] = useState(false);
  const [serv4Show, setServ4Show] = useState(false);
  const [serv5Show, setServ5Show] = useState(false);


  return (
    <div id='servicos'>
      <div className="scrollable-content">
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_6894.jpg)`
          }} className='content-image'
        >
          <img
            src={`${process.env.PUBLIC_URL}/IMG_6904.jpg`}
            alt='Descrição da imagem'
            loading='lazy'
            style={{ display: 'none' }}
          />
        </div>
      </div>
      <ContentContainer>
        <div className='servicos-title'>Os nossos serviços</div>
        <Row md={3} xs={1} style={{ display: 'flex', justifyContent: 'center' }} className='servicos-row'>
          <Col className='servicos-col'>
            <Card onClick={() => setServ1Show(true)} className='servicos-card'>
              <Card.Img variant="top" src={imageUrl1} alt="Card image" loading="lazy" />
              <Card.Body>
                <Card.Title>SERVIÇO DE TRANSPORTES NACIONAIS E INTERNACIONAIS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Modal
            show={serv1Show}
            onHide={() => setServ1Show(false)}
            centered
            autoFocus
            dialogClassName="servicos-modal"
          >
            <Modal.Body >
              <Row className="d-flex align-items-center">
                <Col xs={12} md={3}>
                  <img src={imageUrl1} alt="cardimage1" className='card-image img-fluid mt-3 mt-md-0' loading="lazy" />
                </Col>
                <Col xs={12} md={9} style={{ alignSelf: 'center' }}>
                  <h3 className='modal-title mt-3 mt-md-0'>Serviços de Transportes Nacionais e Internacionais</h3>
                  <div className='modal-text mt-3 mt-md-0'>
                    A Transcarp é especializada em transportar cargas completas e oferece soluções
                    eficientes para a distribuição de mercadorias. Com a capacidade de transportar
                    até 24.000 quilogramas, estamos preparados para atender às necessidades dos nossos
                    clientes, seja para o transporte de cargas completas, em que uma única remessa é
                    enviada, ou para a grupagem, em que várias cargas menores são consolidadas numa
                    única expedição. A versatilidade da Transcarp permite-nos oferecer soluções
                    logísticas personalizadas, garantindo que as mercadorias cheguem ao destino com
                    segurança e dentro do prazo estipulado.
                  </div>
                  <div className='modal-foter mt-3 mt-md-0'>
                    <div> Contacte-nos |
                      <Button variant="outline-dark" style={{ fontSize: '20px', marginLeft: '10px' }} >
                        <a href="#pedidocotacao" style={{ textDecoration: 'none', color: 'inherit' }}>
                          Pedir Cotação
                        </a>
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
          <Col className='servicos-col'>
            <Card onClick={() => setServ2Show(true)} className='servicos-card'>
              <Card.Img variant="top" src={imageUrl2} alt="Card image" loading="lazy" />
              <Card.Body>
                <Card.Title>LOGÍSTICA E ARMAZENAGEM</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Modal
            show={serv2Show}
            onHide={() => setServ2Show(false)}
            centered
            autoFocus
            dialogClassName="servicos-modal"
          >
            <Modal.Body >
              <Row className="d-flex align-items-center">
                <Col xs={12} md={3}>
                  <img src={imageUrl2} alt="cardimage1" className='card-image img-fluid mt-3 mt-md-0' loading="lazy" />
                </Col>
                <Col xs={12} md={9} style={{ alignSelf: 'center' }}>
                  <h3 className='modal-title mt-3 mt-md-0'>Logística e Armazenagem</h3>
                  <div className='modal-text mt-3 mt-md-0'>
                    A nossa empresa disponibiliza serviços de logística e armazenagem personalizados
                    e flexíveis, ajustados às suas necessidades. Asseguramos soluções à medida para
                    otimizar a gestão da sua cadeia de abastecimento, oferecendo eficiência e economia.
                    Pode contar connosco para simplificar os desafios logísticos do seu negócio e armazenar
                    os seus produtos com total segurança e flexibilidade.
                  </div>
                  <div className='modal-foter mt-3 mt-md-0'>
                    <div> Contacte-nos |
                      <Button variant="outline-dark" style={{ fontSize: '20px', marginLeft: '10px' }} >
                        <a href="#pedidocotacao" style={{ textDecoration: 'none', color: 'inherit' }}>
                          Pedir Cotação
                        </a>
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
          {/*<Col onClick={() => setServ3Show(true)} className='servicos-col'>
            <Card onClick={() => setServ3Show(true)} className='servicos-card'>
              <Card.Img variant="top" src={imageUrl3} alt="Card image" loading="lazy" />
              <Card.Body>
                <Card.Title>DISTRIBUIÇÃO PORTA-A-PORTA</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Modal
            show={serv3Show}
            onHide={() => setServ3Show(false)}
            centered
            autoFocus
            dialogClassName="servicos-modal"
          >
            <Modal.Body >
              <Row className="d-flex align-items-center">
                <Col xs={12} md={3}>
                  <img src={imageUrl3} alt="cardimage1" className='card-image img-fluid mt-3 mt-md-0' loading="lazy" />
                </Col>
                <Col xs={12} md={9} style={{ alignSelf: 'center' }}>
                  <h3 className='modal-title mt-3 mt-md-0'>Distribuição Porta-a-Porta</h3>
                  <div className='modal-text mt-3 mt-md-0'>
                    Oferecemos um serviço de recolha e entrega de mercadorias no próprio dia ou no dia seguinte
                    em toda a região Norte de Portugal Continental e na Galiza (Espanha). Com a nossa eficiente
                    rede de distribuição, garantimos que as suas mercadorias sejam recolhidas e entregues com
                    rapidez e eficácia. Independentemente do tamanho ou da urgência do envio, estamos aqui para
                    assegurar que as suas entregas sejam feitas de forma eficiente em ambas as regiões,
                    proporcionando-lhe uma solução de logística ágil e confiável.
                  </div>
                  <div className='modal-foter mt-3 mt-md-0'>
                    <div> Contacte-nos |
                      <Button variant="outline-dark" style={{ fontSize: '20px', marginLeft: '10px' }} >
                        <a href="#pedidocotacao" style={{ textDecoration: 'none', color: 'inherit' }}>
                          Pedir Cotação
                        </a>
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
        */}
        </Row>
        <Row md={3} xs={1} className='servicos-row'>
          <Col className='servicos-col'>
            <Card onClick={() => setServ4Show(true)} className='servicos-card'>
              <Card.Img variant="top" src={imageUrl4} alt="Card image" loading="lazy" />
              <Card.Body>
                <Card.Title>TRANSPORTES URGENTES</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Modal
            show={serv4Show}
            onHide={() => setServ4Show(false)}
            centered
            autoFocus
            dialogClassName="servicos-modal"
          >
            <Modal.Body >
              <Row className="d-flex align-items-center">
                <Col xs={12} md={3}>
                  <img src={imageUrl4} alt="cardimage1" className='card-image img-fluid mt-3 mt-md-0' loading="lazy" />
                </Col>
                <Col xs={12} md={9} style={{ alignSelf: 'center' }}>
                  <h3 className='modal-title mt-3 mt-md-0'>Transportes Urgentes</h3>
                  <div className='modal-text mt-3 mt-md-0'>
                    Oferecemos um serviço expresso que garante entrega rápida e segura de pequenos
                    volumes em todo o território de Portugal Continental e na Galiza (Espanha). Com
                    a nossa rede eficiente, pode contar com entregas ágeis e confiáveis, permitindo
                    que os seus envios cheguem ao destino de forma célere e intacta. A nossa missão
                    é proporcionar conveniência e eficácia, assegurando que as suas entregas sejam
                    realizadas de forma expedita e segura em ambas as regiões.
                  </div>
                  <div className='modal-foter mt-3 mt-md-0'>
                    <div> Contacte-nos |
                      <Button variant="outline-dark" style={{ fontSize: '20px', marginLeft: '10px' }} >
                        <a href="#pedidocotacao" style={{ textDecoration: 'none', color: 'inherit' }}>
                          Pedir Cotação
                        </a>
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
          <Col className='servicos-col'>
            <Card onClick={() => setServ5Show(true)} className='servicos-card'>
              <Card.Img variant="top" src={imageUrl5} alt="Card image" loading="lazy" />
              <Card.Body>
                <Card.Title>MUDANÇAS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Modal
            show={serv5Show}
            onHide={() => setServ5Show(false)}
            centered
            autoFocus
            dialogClassName="servicos-modal"
          >
            <Modal.Body >
              <Row className="d-flex align-items-center">
                <Col xs={12} md={3}>
                  <img src={imageUrl5} alt="cardimage1" className='card-image img-fluid mt-3 mt-md-0' loading="lazy" />
                </Col>
                <Col xs={12} md={9} style={{ alignSelf: 'center' }}>
                  <h3 className='modal-title mt-3 mt-md-0'>Mudanças</h3>
                  <div className='modal-text mt-3 mt-md-0'>
                    Dispomos de veículos e pessoal especializado para realizar qualquer serviço de mudanças.
                    Independentemente do tamanho ou da complexidade da sua mudança, estamos preparados para
                    garantir um serviço eficiente e de qualidade. Os nossos profissionais experientes cuidarão
                    de cada etapa do processo, assegurando que os seus bens sejam transportados com o máximo
                    cuidado e segurança. Conte connosco para tornar a sua mudança uma experiência tranquila
                    e sem preocupações.
                  </div>
                  <div className='modal-foter  mt-3 mt-md-0'>
                    <div> Contacte-nos |
                      <Button variant="outline-dark" style={{ fontSize: '20px', marginLeft: '10px' }} >
                        <a href="#pedidocotacao" style={{ textDecoration: 'none', color: 'inherit' }}>
                          Pedir Cotação
                        </a>
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
        </Row>
      </ContentContainer>
    </div>

  );
}

export default HomePage;
