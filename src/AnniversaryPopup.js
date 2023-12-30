import React from 'react';
import { Modal } from 'react-bootstrap';
import { LuPartyPopper } from "react-icons/lu";

const AnniversaryPopup = ({ show, handleClose }) => {

    return (
        <Modal show={show} onHide={handleClose} centered >
            <Modal.Header closeButton className="anniversary-header text-center">
                <Modal.Title className="anniversary-title">40º Aniversário</Modal.Title>
            </Modal.Header>
            <Modal.Body className="anniversary-body">
                <p className="anniversary-text">
                    Estamos a celebrar quatro décadas de inovação e sucesso. Obrigado por fazer parte desta jornada!
                </p>
                <LuPartyPopper size={60}></LuPartyPopper>
            </Modal.Body>
        </Modal >
    );
};

export default AnniversaryPopup;