import React, { useState } from 'react';
import ContentContainer from './ContentContainer';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';

function Contactos() {
  const [formData, setFormData] = useState({
    email: '',
    nome: '',
    texto: '',
    morada: '',
    telemovel: '',
  });

  const [formValid, setFormValid] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [telemovelError, setTelemovelError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateForm(name, value);
  };

  const validateForm = (fieldName, value) => {
    switch (fieldName) {
      case 'email':
        const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        setEmailError(emailIsValid ? '' : 'Email inválido');
        break;
      case 'telemovel':
        const telemovelIsValid = /\d{9}/.test(value);
        setTelemovelError(telemovelIsValid ? '' : 'Número de telemóvel inválido');
        break;
      default:
        break;
    }

    const { email, nome, texto, morada, telemovel } = formData;
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const telemovelIsValid = /\d{9}/.test(telemovel);

    const formIsValid =
      emailIsValid &&
      nome.trim() !== '' &&
      texto.trim() !== '' &&
      morada.trim() !== '' &&
      telemovelIsValid;

    setFormValid(formIsValid);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para lidar com o envio do formulário
    console.log('Dados do formulário:', formData);
  };
  return (
    <div>
      <div className="scrollable-content">
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/IMG_6904.jpg)`,
            opacity: 0.5
          }} className='content-image'
        ></div>
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
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId='formEmail'>
                  <Form.Label column sm={2}>
                    <h5>Email:</h5>
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type='email'
                      placeholder='Email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!emailError}
                    />
                    <Form.Control.Feedback type='invalid'>{emailError}</Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <br></br>
                <Form.Group as={Row} controlId='formNome'>
                  <Form.Label column sm={2}>
                    <h5>Nome:</h5>
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type='text'
                      placeholder='Nome'
                      name='nome'
                      value={formData.nome}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <br></br>
                <Form.Group as={Row} controlId='formTelemovel'>
                  <Form.Label column sm={2}>
                    <h5>Telemóvel:</h5>
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type='tel' // Pode usar 'text' se preferir
                      placeholder='Número de telemóvel'
                      name='telemovel'
                      value={formData.telemovel}
                      onChange={handleChange}
                      isInvalid={!!telemovelError}
                    />
                    <Form.Control.Feedback type='invalid'>{telemovelError}</Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <br></br>
                <Form.Group as={Row} controlId='formMorada'>
                  <Form.Label column sm={2}>
                    <h5>Morada:</h5>
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type='text'
                      placeholder='Morada'
                      name='morada'
                      value={formData.morada}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <br></br>
                <Form.Group as={Row} controlId='formTexto'>
                  <Form.Label column sm={2}>
                    <h5>Mensagem:</h5>
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      as='textarea'
                      placeholder='Digite a sua mensagem'
                      name='texto'
                      value={formData.texto}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <br></br>
                <Button type='submit' disabled={!formValid}>
                  Enviar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </ContentContainer>
    </div>
  );
}

export default Contactos;
