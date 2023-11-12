import React from 'react';
import { FaFacebook } from 'react-icons/fa';

function Footer() {
    const logo = `${process.env.PUBLIC_URL}/logo.png`;

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-column">
                    <h4>Empresa</h4>
                    <br></br>
                    <p>Sobre nós</p>
                    <p>Galeria</p>
                    <p>Certificações</p>
                </div>
                <div class="footer-column">
                    <h4>Serviços</h4>
                    <br></br>
                    <p>Os nossos Serviços</p>
                </div>
                <div class="footer-column">
                    <h4>Contactos</h4>
                    <br></br>
                    <p>Contactos</p>
                    <p>Morada</p>
                    <p>Pedidos de Cotação</p>
                </div>
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
        </footer>
    );
}

export default Footer;