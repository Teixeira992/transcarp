import React, { useState } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import SidebarMenu from './SideBar';
import { BsJustify } from 'react-icons/bs';
import HomePage from './HomePage';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contactos from './Contactos';
import Servicos from './Servicos';
import Empresa from './Empresa';
import Aniversario from './Aniversario';


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
      <SidebarMenu showMenu={showMenu} toggleMenu={toggleMenu} />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/40anos" element={<Aniversario />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
