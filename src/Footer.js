import React from 'react';
import { FaFacebook } from 'react-icons/fa';

function Footer() {
    const logo = `${process.env.PUBLIC_URL}/logo.png`;
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-column">
                    <a href="#empresa">
                        <h4>Empresa</h4>
                        <br></br>
                        <p>Sobre nós</p>
                        <p>Galeria</p>
                        <p>Certificações</p>
                    </a>
                </div>
                <div class="footer-column">
                    <a href="#servicos">
                        <h4>Serviços</h4>
                        <br></br>
                        <p>Os nossos Serviços</p>
                    </a>
                </div>
                <div class="footer-column">
                    <a href="#contactos">
                        <h4>Contactos</h4>
                        <br></br>
                        <p>Contactos</p>
                        <p>Morada</p>
                        <p>Pedidos de Cotação</p>
                    </a>
                </div>
            </div>

            <div className="second-div">
                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100063475000796" target='blank'>
                        <FaFacebook />
                    </a>
                </div>
                <div className="logo">
                    <img src={logo} alt="Logo" className='logo-img' />
                </div>
            </div>
        </footer >
    );
}

export default Footer;