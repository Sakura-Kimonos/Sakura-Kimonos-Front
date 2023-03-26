import React, { useState } from 'react';
import { MDBNavbar, MDBContainer, MDBNavbarBrand, MDBNavbarToggler, MDBNavbarItem, MDBNavbarLink, MDBCollapse, MDBIcon, MDBNavbarNav, } from 'mdb-react-ui-kit';
import Logo from '../assets/LogoSakura1.png';
import {BsFillCartFill} from "react-icons/bs";
import './styleSheet/Navbar.css'

export default function App() {
  const [showNavCentred, setShowNavCentred] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg'  style={{  backgroundColor: "#CB5F5F", position: "float", bottom: 0 }} >
        <MDBContainer fluid >
          <MDBNavbarBrand href='/'><img src={Logo} alt="Sakura-Kimonos"className='Logo'/></MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavCentred(!showNavCentred)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavCentred}>
            <MDBNavbarNav className='ms-auto mb-2 mb-lg-0'>

              <MDBNavbarItem className='ms-auto mb-2 mb-lg-0'>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/' className='text-white d-flex justify-content-center justify-content-lg-between p-4 navbar-item'>HOME</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/userDashboard' className='text-white d-flex justify-content-center justify-content-lg-between p-4 navbar-item'>PRODUCTS</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/join' className='text-white d-flex justify-content-center justify-content-lg-between p-4 navbar-item'>JOIN</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/login' className='text-white d-flex justify-content-center justify-content-lg-between p-4 navbar-item '>LOGIN</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/cart' className='text-white d-flex justify-content-center justify-content-lg-between p-4 navbar-item'><BsFillCartFill/></MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

