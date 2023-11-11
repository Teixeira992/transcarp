import React from 'react';
import { useState } from 'react';
import ContentContainer from './ContentContainer';
import { Col, Row, Card, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


function HomePage() {
  const imageUrl = `${process.env.PUBLIC_URL}/IMG_6856.jpg`;
  const imageUrl1 = `${process.env.PUBLIC_URL}/IMG_6897.jpg`;
  const [serv1Show, setServ1Show] = useState(false);
  const [serv2Show, setServ2Show] = useState(false);
  const [serv3Show, setServ3Show] = useState(false);
  const [serv4Show, setServ4Show] = useState(false);
  const [serv5Show, setServ5Show] = useState(false);


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
        {/*
        <div>
          <p>Na TRANSCARP oferecemos aos nossos clientes um conjunto cada vez mais completo de serviços nas áreas dos transportes nacionais e internacionais, logística e armazenagem, distribuição, entregas rápidas e mudanças</p>
        </div>
          */}
        <div className='servicos-title'>Os nossos serviços</div>
        <Row md={3} xs={1} style={{ display: 'flex', justifyContent: 'center' }} className='servicos-row'>
          <Col className='servicos-col'>
            <Card onClick={() => setServ1Show(true)} className='servicos-card'>
              <Card.Img variant="top" src={imageUrl} alt="Card image" />
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
          <Col className='servicos-col'>
            <Card onClick={() => setServ2Show(true)} className='servicos-card'>
              <Card.Img variant="top" src={imageUrl} alt="Card image" />
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
              <Row >
                <Col xs={3}>
                  <img src={imageUrl1} alt="cardimage1" className='card-image' />
                </Col>
                <Col xs={9}>
                  <h3 className='modal-title'>Logísitica e Armazenagem</h3>
                  <div className='modal-text'>
                    A nossa empresa disponibiliza serviços de logística e armazenagem personalizados
                    e flexíveis, ajustados às suas necessidades. Asseguramos soluções à medida para
                    otimizar a gestão da sua cadeia de abastecimento, oferecendo eficiência e economia.
                    Pode contar connosco para simplificar os desafios logísticos do seu negócio e armazenar
                    os seus produtos com total segurança e flexibilidade.
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
          <Col onClick={() => setServ3Show(true)} className='servicos-col'>
            <Card onClick={() => setServ3Show(true)} className='servicos-card'>
              <Card.Img variant="top" src={imageUrl} alt="Card image" />
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
              <Row >
                <Col xs={3}>
                  <img src={imageUrl1} alt="cardimage1" className='card-image' />
                </Col>
                <Col xs={9}>
                  <h3 className='modal-title'>Distribuição Porta-a-Porta</h3>
                  <div className='modal-text'>
                    Oferecemos um serviço de recolha e entrega de mercadorias no próprio dia ou no dia seguinte
                    em toda a região Norte de Portugal Continental e na Galiza (Espanha). Com a nossa eficiente
                    rede de distribuição, garantimos que as suas mercadorias sejam recolhidas e entregues com
                    rapidez e eficácia. Independentemente do tamanho ou da urgência do envio, estamos aqui para
                    assegurar que as suas entregas sejam feitas de forma eficiente em ambas as regiões,
                    proporcionando-lhe uma solução de logística ágil e confiável.
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
        </Row>
        <Row md={3} xs={1} className='servicos-row'>
          <Col className='servicos-col'>
            <Card onClick={() => setServ4Show(true)} className='servicos-card'>
              <Card.Img variant="top" src={imageUrl} alt="Card image" />
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
              <Row >
                <Col xs={3}>
                  <img src={imageUrl1} alt="cardimage1" className='card-image' />
                </Col>
                <Col xs={9}>
                  <h3 className='modal-title'>Transportes Urgentes</h3>
                  <div className='modal-text'>
                    Oferecemos um serviço expresso que garante entrega rápida e segura de pequenos
                    volumes em todo o território de Portugal Continental e na Galiza (Espanha). Com
                    a nossa rede eficiente, pode contar com entregas ágeis e confiáveis, permitindo
                    que os seus envios cheguem ao destino de forma célere e intacta. A nossa missão
                    é proporcionar conveniência e eficácia, assegurando que as suas entregas sejam
                    realizadas de forma expedita e segura em ambas as regiões.
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
          <Col className='servicos-col'>
            <Card onClick={() => setServ5Show(true)} className='servicos-card'>
              <Card.Img variant="top" src={imageUrl} alt="Card image" />
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
              <Row >
                <Col xs={3}>
                  <img src={imageUrl1} alt="cardimage1" className='card-image' />
                </Col>
                <Col xs={9}>
                  <h3 className='modal-title'>Mudanças</h3>
                  <div className='modal-text'>
                    Dispomos de veículos e pessoal especializado para realizar qualquer serviço de mudanças.
                    Independentemente do tamanho ou da complexidade da sua mudança, estamos preparados para
                    garantir um serviço eficiente e de qualidade. Os nossos profissionais experientes cuidarão
                    de cada etapa do processo, assegurando que os seus bens sejam transportados com o máximo
                    cuidado e segurança. Conte connosco para tornar a sua mudança uma experiência tranquila
                    e sem preocupações.
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
        </Row>
      </ContentContainer>
    </div>

  );
}

export default HomePage;
