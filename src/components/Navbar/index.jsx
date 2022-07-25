import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuthContext } from "../../contexts/authContext";

const Header = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Movies React App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!isAuthenticated && (
              <Link className={styles.item} to="/signup">
                Registro
              </Link>
            )}
            {!isAuthenticated && (
              <Link className={styles.item} to="/login">
                Login
              </Link>
            )}
            {isAuthenticated && (
               <NavDropdown title="ABM Pelis" id="basic-nav-dropdown">
               <Link className={styles.item} to="/app">
                 Peliculas
               </Link>
               <Link className={styles.item} to="/app/movies/add">
                 Agregar
               </Link>
             </NavDropdown>
            )}
           
            {isAuthenticated && (
              <Link className={styles.item} to="/app/logout">
                Cerrar sesión
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
