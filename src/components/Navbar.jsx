import Logo from '../assets/LogoSakura1.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function MyNavbar() {
  return (
    <Container fluid className='menu'>
    <Navbar bg="light" expand="md">
     
        <Navbar.Brand as={Link} to="/">
        <img src={Logo} alt="Sakura-Kimonos"className='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto justify-content-end" style={{ maxHeight: '100px' }}>
          <Nav.Link as={Link} to="/" className="mx-4">HOME</Nav.Link>
           <Nav.Link as={Link} to="/userDashboard">PRODUCTS</Nav.Link>
           <Nav.Link as={Link} to="/join" className="mx-4">JOIN</Nav.Link>
           <Nav.Link as={Link} to="/login" className="mx-4">LOGIN</Nav.Link>
           <Nav.Link as={Link} to="/ShoppingCart" className="mx-4"><FaShoppingCart /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>
    </Container>
  );
}

export default MyNavbar;
