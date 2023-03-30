import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../pages/styleSheetPages/ShoppingCart.css'
import Navbar from '../components/Navbar';
import { BsSearchHeart,  BsTrash, BsX } from 'react-icons/bs';


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

/*const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);*/
/*const removeItem = item => {
    setItems(prevItems => prevItems.filter(i => i.id !== item.id));
    };*/


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
       <div className="container-bar" id="text">
        <br />
        <br />   
        <h3>Amount to Pay</h3>
        <h3>{`Total: ${totalPrice}`}$</h3>
        <br />
        </div>
        <br />
        <Button className='buy' type="submit" id="btn" style={{width: '100px'}} >To Buy</Button>
        <br />
        <br />
    </div>    
</div>
</>
);
};

export default Cart;
