
import { Navbar, Nav, Container } from "react-bootstrap";
import { BiSearch, BiBell, BiUserCircle } from "react-icons/bi";
import './Navbar.css'; // Importa il CSS personalizzato

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ backgroundColor: "#221f1f" }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="assets/logo.png"
            alt="Logo"
            style={{ width: "100px", height: "55px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <BiSearch className="icons me-3" />
            <div id="kids" className="fw-bold me-3">
              KIDS
            </div>
            <BiBell className="icons me-3" />
            <BiUserCircle className="icons" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
