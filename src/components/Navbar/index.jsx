import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Movies React App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className={styles.item} to="/signup">Registro</Link>
            <Link className={styles.item} to="/signin">Login</Link>
            <NavDropdown title="ABM Pelis" id="basic-nav-dropdown">
              <Link className={styles.item} to="">Peliculas</Link>
              <Link className={styles.item} to="">Agregar</Link>              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;