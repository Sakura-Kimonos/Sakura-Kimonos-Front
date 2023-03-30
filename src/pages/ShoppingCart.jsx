import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../pages/styleSheetPages/ShoppingCart.css'
import Navbar from '../components/Navbar';
import { BsSearchHeart,  BsTrash, BsX } from 'react-icons/bs';
import visa from '../assets/visa.png';
import paypal from '../assets/paypal.jpg';
import mastercard from '../assets/mastercard.png';
import gpay from '../assets/Gpay.jpg';
import { Row, Col, Container } from 'react-bootstrap';

const Cart = () => {
    
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cartProducts")) || []);
        console.log(cartProducts)
    
    const removeCartProducts = () => {
        localStorage.removeItem("cartProducts");
        setCartProducts([]);  
    };

    const handleRemove = (id) => {
        const array =cartProducts.filter((product) => product.id !== id);
        setCartProducts(array);
        localStorage.setItem("cartProducts", JSON.stringify(array));
    };

    const totalPrice = cartProducts.reduce((total, product) => {
        return total + product.price;
        }, 0);

return (
    <>
    <Navbar/>  
<div className="container-gn" id="text">
<h1>Your Shopping Cart</h1><Button className="remove" onClick={() => removeCartProducts()}>Empty Cart</Button>

<br />

    <div className="cards" >
    {cartProducts.map((product) => (
        <React.Fragment key={product.id}>
        <Card border="light" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body className='text-center'>
            <Card.Title>{product.title} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
            <Button variant="outline-primary" style={{width: '100px'}}  onClick={() => handleRemove(product.id)}><BsTrash />Delete</Button>
        </Card.Body>
        </Card>
    </React.Fragment>
        ))}

        <Card style={{backgroundColor: '#D6C6B4', border: ' none', borderRadius: '10px', textAlign: 'center'}}>
        
        <div className="container-bar" id="text">
        <br />
        <br />   
        <h3></h3>
        <h3>{`Total: ${totalPrice}`}$</h3> 
        <h6>*Taxes included</h6> 
        <br />  
        <Button className='buy' type="submit" id="btn" style={{width: '100px'}} >To Pay</Button>
        <br />
        </div>
        <Card.Title style={{marginBottom: '15px', marginTop: '20px', backgroundColor: '#D6C6B4'}} >You can pay with:</Card.Title>
        <br />
            <Row  >
                <Col ><img src={visa} alt="visa"  style={{height: 60, marginTop: '10px'}}/></Col>
                <Col ><img src={paypal} alt="paypal" style={{height: 60, marginTop: '12px'}}/></Col>
                <Col ><img src={gpay} alt="gpay" style={{height: 60, marginTop: '20px'}}/></Col>
                <Col><img src={mastercard} alt="mastercard" style={{height: 60, marginTop: '20px'}}/></Col>
                </Row>
        </Card>
    </div>
        <br />
        <br />
    </div>    
</>
);
};

export default Cart;
