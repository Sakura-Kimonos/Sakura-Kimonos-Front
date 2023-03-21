import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import CartItem from '../components/CartItem';


const Cart = () => {
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
        <MDBContainer>
        <MDBRow>
            <MDBCol md='12'>
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
    );
};

export default Cart;