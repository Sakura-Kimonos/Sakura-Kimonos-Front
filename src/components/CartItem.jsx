import React from 'react';

import { MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';



const CartItem = ({ item, removeItem }) => {
    return (
        <MDBRow>
        <MDBCol md='6'>{item.name}</MDBCol>
        <MDBCol md='2'>{item.quantity}</MDBCol>
        <MDBCol md='2'>${item.price}</MDBCol>
        <MDBCol md='2'>
            <MDBBtn color='danger' onClick={() => removeItem(item)}>Delete</MDBBtn>
        </MDBCol>
    </MDBRow>
    );
};

export default CartItem;