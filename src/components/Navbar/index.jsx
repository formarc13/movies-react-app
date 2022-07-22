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
            <Link className={styles.item} to="/login">Login</Link>
            <NavDropdown title="ABM Pelis" id="basic-nav-dropdown">
              <Link className={styles.item} to="/app">Peliculas</Link>
              <Link className={styles.item} to="/app/movies/add">Agregar</Link>              
            </NavDropdown>
            <Link className={styles.item} to="/app/logout">Cerrar sesión</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;