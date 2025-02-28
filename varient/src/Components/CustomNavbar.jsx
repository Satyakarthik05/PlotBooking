import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaPhone, FaUser } from "react-icons/fa";
import "./Header.css"; // Import custom CSS

const CustomNavbar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-white border-bottom px-3"
      style={{ height: "90px" }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home">
          <img
            src="../public/Logo-Remade.png" // Replace with your logo path
            alt="Variant Logo"
            height="80"
          />
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="text-center text-lg-start">
            <Nav.Link href="#home" className="nav-hover text-dark fw-bold">
              HOME
            </Nav.Link>
            <Nav.Link href="#about" className="nav-hover text-dark fw-bold">
              ABOUT US
            </Nav.Link>
            <Nav.Link href="#projects" className="nav-hover text-dark fw-bold">
              PROJECTS
            </Nav.Link>
            <Nav.Link href="#partner" className="nav-hover text-dark fw-bold">
              PARTNER WITH US
            </Nav.Link>
            <Nav.Link href="#guide" className="nav-hover text-dark fw-bold">
              BUYER'S GUIDE
            </Nav.Link>
            <Nav.Link href="#careers" className="nav-hover text-dark fw-bold">
              CAREERS
            </Nav.Link>
            <Nav.Link href="#blog" className="nav-hover text-dark fw-bold">
              BLOG
            </Nav.Link>
          </Nav>
          <div
            className="d-flex align-items-center gap-3"
            style={{ marginLeft: "100px" }}
          >
            <div
              className="bg-dark text-white rounded-circle p-2 d-flex justify-content-center align-items-center"
              style={{ width: "40px", height: "40px" }}
            >
              <FaPhone size={20} />
            </div>
            <div
              className="bg-dark text-white rounded-circle p-2 d-flex justify-content-center align-items-center"
              style={{ width: "40px", height: "40px" }}
            >
              <FaUser size={20} />
            </div>
          </div>
        </Navbar.Collapse>

        {/* Icons */}
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
