import React, { useState } from 'react';
import {getItem, setItem} from '../services/productService'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard,
    MDBCardBody,
    MDBCardImage, MDBIcon,
    MDBInput, MDBTypography, } from 'mdb-react-ui-kit';
import CartItem from '../components/CartItem';




    



































/*const Cart = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Producto 1', price: 10, quantity: 1 },
        { id: 2, name: 'Producto 2', price: 20, quantity: 2 },
        { id: 3, name: 'Producto 3', price: 30, quantity: 3 },
    ]);

const removeItem = item => {
    setItems(prevItems => prevItems.filter(i => i.id !== item.id));
    };

const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);


    return (
        <section className="h-100" style={{ backgroundColor: "#fdccbc" }}>
        <MDBContainer className="h-100" >
        <MDBRow className="justify-content-center align-items-center h-100">
            <p>
                <span className="h2">Shopping Cart </span>
                <span className="h4">()</span>
            </p>


        
            <MDBCol>
            <div className="d-flex justify-content-between align-items-center h-100">
          <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
            Shopping Cart
          </MDBTypography>
          <div>
            <p className="mb-0">
              <span className="text-muted">Sort by:</span>
              <a href="#!" className="text-body">
                price <i className="fas fa-angle-down mt-1"></i>
              </a>
            </p>
          </div>
        </div> 

            {items.map(item => (
            <CartItem key={item.id} item={item} removeItem={removeItem} />
            ))}
        </MDBCol>
    </MDBRow>
    <MDBRow>
        <MDBCol md='12' className='text-right'>
            <h4>Total: ${total}</h4>
            <MDBBtn color='primary'>Buy Now</MDBBtn>
        </MDBCol>
    </MDBRow>
    </MDBContainer>
    </section>
    );
};

export default Cart;*/