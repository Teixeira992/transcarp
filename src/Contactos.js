import React, { useState } from 'react';
import ContentContainer from './ContentContainer';
import { Card, Col, Row, Form, Button, Modal, Spinner } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

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

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Inicia o spinner

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_lo2o7wq';
    const templateId = 'template_r3zwiot';
    const publicKey = 'GXRDI0-d7nzL7BktW';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: formData.nome,
      from_email: formData.email,
      from_telemovel: formData.telemovel,
      from_morada: formData.morada,
      to_name: 'Transcarp',
      message: formData.texto,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        showSuccess();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        showError();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const showSuccess = () => {
    setShowSuccessModal(true);
    setFormValid(false);
    setFormData({
      email: '',
      nome: '',
      texto: '',
      morada: '',
      telemovel: '',
    });
  };

  const showError = () => {
    setShowErrorModal(true);
  };

  const hideModals = () => {
    setShowSuccessModal(false);
    setShowErrorModal(false);
  };

  return (
    <div id="contactos">
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
                    <span className='contactos-title'>Contactos Telefónicos</span>
                    <br />
                    <span className='contactos-text'>+351 251 795 345</span>
                    <br />
                    <span className='contactos-text'>+351 964 514 005</span>
                    <br />
                    <br />
                    <span className='contactos-title'>Email</span>
                    <br />
                    <span className='contactos-text'>geral@transcarp.pt</span>
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text >
                    <span className='contactos-title'>Morada</span>
                    <br />
                    <span className='contactos-text'>Zona Industrial - Pólo 1</span>
                    <br />
                    <span className='contactos-text'><b>4920-247</b> Vila Nova de Cerveira</span>
                    <br />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.2737507642964!2d-8.695952784353208!3d41.972930067453056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd25973018ba5869%3A0x17e3dc94e6cbafd6!2sTranscarp-transportes+E+Log%C3%ADstica+Lda!5e0!3m2!1spt-PT!2spt!4v1492440883874" title="description" className='maps' ></iframe>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }} id="pedidocotacao">
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
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button variant="outline-dark" type='submit' disabled={!formValid} style={{ fontSize: '22px' }}>
                    <span> Enviar {loading && (
                      <Spinner animation="border" role="status" style={{ marginLeft: '10px' }}>
                      </Spinner>
                    )}
                    </span>
                  </Button>
                </div>


              </Form>
            </Card.Body>
          </Card>
        </div>
        <Modal centered show={showSuccessModal || showErrorModal} onHide={hideModals}>
          <Modal.Header className='modal-email-title' closeButton>
            <Modal.Title>
              {showSuccessModal ? 'Sucesso' : 'Erro'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body closeButton>
            {showSuccessModal
              ? 'O email foi enviado com sucesso!'
              : 'O envio do email falhou. Por favor, tente novamente.'}
          </Modal.Body>
        </Modal>
      </ContentContainer>
    </div >
  );
}

export default Contactos;
