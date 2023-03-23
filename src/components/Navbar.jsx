import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
 
  MDBIcon,
  MDBNavbarNav,
  
} from 'mdb-react-ui-kit';

import Logo from '../assets/LogoSakura1.png';
import {BsFillCartFill} from "react-icons/bs";

export default function App() {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'><img src={Logo} alt="Sakura-Kimonos"className='Logo'/></MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/'>HOME</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/userDashboard'>PRODUCTS</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/join'>JOIN</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/login'>LOGIN</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/cart'><BsFillCartFill/></MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
















// import Logo from '../assets/LogoSakura1.png';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa';

// function MyNavbar() {
//   return (
//     <Container fluid className='menu'>
//     <Navbar bg="light" expand="md">
     
//         <Navbar.Brand as={Link} to="/">
//         <img src={Logo} alt="Sakura-Kimonos"className='Logo'/>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="ms-auto justify-content-end" style={{ maxHeight: '100px' }}>
//           <Nav.Link as={Link} to="/" className="mx-4">HOME</Nav.Link>
//            <Nav.Link as={Link} to="/userDashboard">PRODUCTS</Nav.Link>
//            <Nav.Link as={Link} to="/join" className="mx-4">JOIN</Nav.Link>
//            <Nav.Link as={Link} to="/login" className="mx-4">LOGIN</Nav.Link>
//            <Nav.Link as={Link} to="/ShoppingCart" className="mx-4"><FaShoppingCart /></Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
    
//     </Navbar>
//     </Container>
//   );
// }

// export default MyNavbar;
