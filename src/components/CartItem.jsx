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

/*const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};
}*/
export default CartItem;