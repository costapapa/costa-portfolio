import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillHome } from 'react-icons/ai'
import './NavBar.css'

export default function NavBar() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="navvy">
      <Container>
        <Navbar.Brand href="/"><AiFillHome className="mb-1"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="mt-1" href="/aboutme">About Me</Nav.Link>
            <Nav.Link className="mt-1" href="/projects">Projects</Nav.Link>
            <Nav.Link className="mt-1" href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
