import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";

function NavBar() {
  let navigate = useNavigate()
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/NewProduct"}>newproduct</Nav.Link>
            <Nav.Link as={Link} to={"/login/kesavan"}>Login</Nav.Link>
            <Nav.Link as={Link} to={"/products"}>products</Nav.Link>
            <Nav.Link as={Link} to={"/signup"}>signup</Nav.Link>
            <Nav.Link as={Link} to={"/todoapp"}>todoapp</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Button variant='contained' color='warning' onClick={()=>navigate("/wishlist")}><FaCartShopping /></Button>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar