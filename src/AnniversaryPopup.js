import React from 'react';
import { Modal } from 'react-bootstrap';

const AnniversaryPopup = ({ show, handleClose }) => {
    const anivImg = `${process.env.PUBLIC_URL}/IMG_8738.JPG`;

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton className="anniversary-header">
                <Modal.Title><a href="#40anos" className="anniversary-title">40º Aniversário</a></Modal.Title>
            </Modal.Header>
            <Modal.Body className="anniversary-body">
                <div className="texto-aniv-pop">
                    Estamos a celebrar quatro décadas de inovação e sucesso. Obrigado por fazer parte desta jornada!
                </div>

                <div className="imagem-aniv-pop">
                    <a href="#40anos"><img src={anivImg} alt="aniv" loading="lazy" /></a>
                </div>
            </Modal.Body>
        </Modal >
    );
};

export default AnniversaryPopup;