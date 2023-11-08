import React from 'react';
import ContentContainer from './ContentContainer';
import { Card, Col, Row } from 'react-bootstrap';

function Contactos() {

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
              backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_6904.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.5
            }}
          ></div>
        </div>
      </div>
      <ContentContainer>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card className='card-contactos'>
            <Card.Header className='card-contactos-header'>Contactos</Card.Header>
            <Card.Body >
              <Row>
                <Col>
                  <Card.Text >
                    <h5>Contactos Telefónicos</h5>
                    <p>+351 251 795 345</p>
                    <p>+351 964 514 005</p>
                    <h5>Fax</h5>
                    <p>+351 251 796 780</p>
                    <h5>Email</h5>
                    <p>geral@transcarp.pt</p>
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text >
                    <h5>Morada</h5>
                    <p>Zona Industrial - Pólo 1</p>
                    <p><b>4920-247</b> Vila Nova de Cerveira</p>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card className='card-contactos'>
            <Card.Header className='card-contactos-header'>Pedido de Cotação</Card.Header>
            <Card.Body >
              <Row>

              </Row>
            </Card.Body>
          </Card>
        </div>
      </ContentContainer>
    </div>

  );
}

export default Contactos;
