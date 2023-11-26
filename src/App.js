import React, { useState } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import SidebarMenu from './SideBar';
import { BsJustify } from 'react-icons/bs';
import HomePage from './HomePage';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Contactos from './Contactos';
import Servicos from './Servicos';
import Empresa from './Empresa';
import Aniversario from './Aniversario';
import PaginaDeErro from './PaginaDeErro';
import CookieBanner from './Cookie';
import Privacidade from './Privacidade';


const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <Navbar
        variant="dark"
        expand="lg"
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          width: '100%',
          zIndex: 2,
        }}
      >
        <Nav className="ml-auto" >
          <Button
            variant="transparent"
            size="lg"
            onClick={toggleMenu}
            className="custom-button"
          >
            <BsJustify className="custom-icon" />
          </Button>
        </Nav>
      </Navbar>
      <SidebarMenu showMenu={showMenu} toggleMenu={toggleMenu} setShowMenu={setShowMenu} />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/pedidocotacao" element={<Contactos />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/sobrenos" element={<Empresa />} />
        <Route path="/galeria" element={<Empresa />} />
        <Route path="/certificacoes" element={<Empresa />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/40anos" element={<Aniversario />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="*" element={<PaginaDeErro />} />
      </Routes>
      <CookieBanner></CookieBanner>
      <Footer />
    </div>
  );
};

export default App;
