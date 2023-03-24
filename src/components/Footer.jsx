import React from "react";
import {MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../components/styleSheet/Footer.css'



export default function Footer() {
    return (
        
      <MDBFooter  className='small text-center text-lg-start text-muted' style={{  backgroundColor: "#CB5F5F", position: "float", bottom: 0 }}  >
        <section  size="sm"className='small text-sm text-white d-flex justify-content-center justify-content-lg-between p-4 border-bottom' id="Footer">
          <div className='text-sm  me-5 d-none d-lg-block'>
          </div>
  
          <div>
          <div style={{ texSize: 'sm' }}></div>
            <a href='' className='text-sm me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="google" />
            </a>
            <a href='' className='me-4 text-reset '>
              <MDBIcon fab icon="instagram" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>
  
        <section className='Footer'>
          <MDBContainer className='text-white text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" />
                  SakuraKimonos
                </h6>
                <p>
                Sakura Kimonos is a website for the sale of Kimonos  inspired by the traditional Japanese garment.
                </p>
              </MDBCol>
  
              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>INFORMATION</h6>
                <p>
                  <a href='/CookiesPolicy' className='text-reset'>
                  Privacy Policy
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                  Terms and Conditions
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                  Legal Warning
                  </a>
                </p>               
              </MDBCol>
  
              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>HELP</h6>
                <p>
                  <a href='#!' className='text-reset'>
                  Returns and Refunds
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                  Shipping Policy
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                  Payment Method
                  </a>
                </p>                
              </MDBCol>
  
              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Sevilla, 41002, Spain
                </p>
                <p>
                  <MDBIcon icon="envelope"   className="me-3" />
                   <a href='/ContactUs' className='text-reset'>
                 contact@sakurakimonos.com
                   </a> 
                  
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 034 956 142 818
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 034 625 288 014 
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
  
        <div className='text-white text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2023 Copyright:
          <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
           SakuraKimonos.com
          </a>
        </div>
      </MDBFooter>
    );
  }