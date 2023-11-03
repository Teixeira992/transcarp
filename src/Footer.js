import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';

function Footer() {
    const logo = `${process.env.PUBLIC_URL}/logo.png`;

    return (
        <footer>
            <Container>
                <div className="first-div">
                    <Row>
                        <Col style={{ borderRight: '1px solid #ccc' }}>
                            <h4>Empresa</h4>
                            <p> Sobre nós</p>
                            <p> Galeria</p>
                            <p> Certificações</p>
                        </Col>
                        <Col style={{ borderRight: '1px solid #ccc' }}>
                            <h4>Serviços</h4>
                        </Col>
                        <Col style={{ borderRight: '1px solid #ccc' }}>
                            <h4>Frota</h4>
                        </Col>
                        <Col>
                            <h4>Contactos</h4>
                        </Col>
                    </Row>
                </div>

                <div className="second-div">
                    <div className="social-icons">
                        <a href="https://www.facebook.com">
                            <FaFacebook />
                        </a>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="Logo" className='logo-img' />
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;