import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../pages/styleSheetPages/ShoppingCart.css'
import Navbar from '../components/Navbar';



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
<div className='header-cart'>
<h1>Your Shopping Cart</h1><Button className="remove" onClick={() => removeCartProducts()}>Empty Cart</Button>

<br />

    <div className="container-gn"  >
    {cartProducts.map((product) => (
        <Card className="cards" key={product.id}>
            <div className="container-bar">

            <div className= "img-cart"  >
                    <img variant="top" style={{width: '150px'}} src={product.img} alt="" />
                <h2>{product.title}</h2>
                <br />
                <h3>{product.price}$</h3>
                <br />
                <div>
                <h3>
            
                </h3>
                </div>
                <Button variant="outline-primary" style={{width: '100px'}}  onClick={() => handleRemove(product.id)}>Delete</Button>
                </div>  
            </div>
            <div>       
            </div>
        </Card>
        ))}
        <div>
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
