import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar bg="success" variant="dark">
        <Container className="justify-content-start">
          <div class="inicio">
            <div class="logo"><img src="favicon-home.png" alt="logo" /></div>
            <div class="seccion1">
              <Link to="/" className="text-white ms-1 text-decoration-none">
                Home
              </Link>
            </div>
          </div>
          <div class="formulario">
            <div class="logo"><img src="favicon-contacto.png" alt="contacto" /></div>
            <div class="seccion2">
              <Link to="/Contacto" className="text-white ms-1 text-decoration-none">
                Contacto
              </Link>
            </div>
          </div>
        </Container>
        <Container className="justify-content-end">
          <Navbar.Brand>Happy Cake</Navbar.Brand>
          <div class="logo"><img src="favicon-logo.png" alt="logo" /></div>
        </Container>
      </Navbar>
    </>
  );
}
