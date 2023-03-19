import React from 'react';
import '../components/styleSheet/SubNavbar.css';

function SubNavbar() {
  return (
    <nav className="subnav d-flex justify-content-center justify-content-lg-center flex-wrap align-items-center">
      <ul>
        <li><a href="#last-products">LAST PRODUCTS</a></li>
        <li><a href="#our-vision">OUR VISION</a></li>
        <li><a href="#our-services">OUR SERVICES</a></li>
      </ul>
    </nav>
  );
}

export default SubNavbar;