import React from 'react';
import { Nav, Offcanvas } from 'react-bootstrap';

function SidebarMenu({ showMenu, toggleMenu }) {
    const logo = `${process.env.PUBLIC_URL}/logo.png`;

    return (
        <>
            <Offcanvas show={showMenu} onHide={toggleMenu} placement="start" className="side-bar">
                <Offcanvas.Header closeButton>
                    <img src={logo} alt="Logo" className='logo-img' /></Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav as="ul" className="flex-column">
                        <li className='custom-list-item'>
                            <Nav.Link href="/" className='custom-link'>Página Inicial</Nav.Link>
                        </li>
                        <li className='custom-list-item'>
                            <Nav.Link href="/empresa" className='custom-link'>Empresa</Nav.Link>
                        </li>
                        <li className='custom-list-item'>
                            <Nav.Link href="/servicos" className='custom-link'>Serviços</Nav.Link>
                        </li>
                        <li className='custom-list-item'>
                            <Nav.Link href="/contactos" className='custom-link'>Contactos</Nav.Link>
                        </li>
                        <li className='custom-list-item'>
                            <Nav.Link href="/40anos" className='custom-link'>40º Aniversário</Nav.Link>
                        </li>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SidebarMenu;
