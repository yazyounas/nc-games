import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to="/" style={{ fontSize: "2rem", fontWeight: "bold", marginRight: "50rem" }}>
        Review Rave
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Add Review</Nav.Link>
        <Button variant="success" style={{ marginRight: "1rem" }}>Log in</Button>{" "}
        <Button variant="success">Sign Up</Button>{" "}
      </Nav>
    </Container>
  </Navbar>
  );
}

export default Header;
