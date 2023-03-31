import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../pages/styleSheetPages/ShoppingCart.css'
import Navbar from '../components/Navbar';
import { BsTrash, } from 'react-icons/bs';
import visa from '../assets/visa.png';
import paypal from '../assets/paypal.jpg';
import mastercard from '../assets/mastercard.png';
import gpay from '../assets/Gpay.jpg';
import { Row, Col, } from 'react-bootstrap';

const Cart = () => {
    
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cartProducts")) || []);
    const [productsData, setProductsData] = useState([])
    
    const removeCartProducts = () => {
        localStorage.removeItem("cartProducts");
        setCartProducts([]);  
    };

    const handleRemove = (id) => {
        const array =cartProducts.filter((product) => product.producItem.id !== id);
        setCartProducts(array);
        localStorage.setItem("cartProducts", JSON.stringify(array));
    };

    const totalPrice = cartProducts.reduce((total, product) => {
        return total + product.producItem.price;
        }, 0);

        async function getProducts() {
            var resultList = await productService.getProducts();
            setProductsData(resultList);
          }
        
          function buildImg(extension, content) {
            return "data:" + extension + ";base64," + content;
          }

          useEffect(() => {
            getProducts()
          },[])

return (
    <>
    <Navbar/>  
    <div className="container-gn" id="text">
        <h1 style={{marginTop: 30}}>Your Shopping Cart</h1>
        <Button className="remove" style={{backgroundColor: "#CB5F5F"}} onClick={() => removeCartProducts()}>Empty Cart</Button>
        <br />
        <div className="cards" >
            {cartProducts.map((product) => (
            <React.Fragment key={product.producItem.id}>
                <Card border="light" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={buildImg(product.base64FileModel.extension, product.base64FileModel.content)} />
                <Card.Body className='text-center'>
                    <Card.Title>{product.producItem.title} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">${product.producItem.price}</Card.Subtitle>
                    <Button variant="outline-primary" style={{width: '100px'}}  onClick={() => handleRemove(product.producItem.id)}><BsTrash />Delete</Button>
                </Card.Body>
                </Card>
            </React.Fragment>
                ))}

            <Card style={{backgroundColor: '#D6C6B4', border: ' none', borderRadius: '10px', textAlign: 'center'}}>
                    <div className="container-bar" id="text">
                        <br />
                        <br />   
                        <h3>{`Total: ${totalPrice}`}$</h3> 
                        <h6>*Taxes included</h6> 
                        <br />  
                        <Button className='buy' type="submit" id="btn" style={{width: '120px', backgroundColor: "#CB5F5F"}} >Checkout </Button>
                        <br />
                    </div>
                    <Card.Title style={{marginBottom: '15px', marginTop: '20px', backgroundColor: '#D6C6B4'}} >You can pay with:</Card.Title>
                    <div className="pay-icons"> 
                        <img src={visa} alt="visa"  style={{height: 40, }}/>
                        <img src={paypal} alt="paypal" style={{height: 40}}/>
                    
                    
                        <img src={gpay} alt="gpay" style={{height: 40}}/>
                        <img src={mastercard} alt="mastercard" style={{height: 40}}/>
                    </div> 
            </Card>
        </div>
        <br />
        <br />
    </div>    
</>
);
};

export default Cart;
