import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsSearchHeart, BsCart3 } from 'react-icons/bs';
import './styleSheet/Trending.css';
import React, {useState} from 'react';
import ProductModalUser from './ProductModalUser'; 
import '../pages/styleSheetPages/userDashboard.css'
import { Link } from 'react-router-dom';


function Trending({ products}) {
  const randomIndex = Math.floor(Math.random() * (products.length - 3));
  const resultTrending = products.slice(randomIndex, randomIndex + 3);
  const [productList, setProductList] = useState(resultTrending);
  const [productModal, setProductModal] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (productId) => {
    setProductModal(products.find(product => product.id == productId))
    console.log(productModal)
    setShow(true)
  };

  return (
    <>
    <div className="cards">
       <h2 id="last-products"className="title">LAST PRODUCTS</h2>
      {productList.map((product) => {
        return (
          <>
            <ProductModalUser show={show} handleClose={handleClose} product={productModal} />
            <div key={product.id}>

            <Card border="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.img}  />
                    <Card.Body className='text-center'>
                      <Card.Title>{product.title} </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
                    <Button variant="light" onClick={() => handleShow(product.id)}><BsSearchHeart/> View </Button>
                    <Button variant="light"><BsCart3/> Add to cart </Button>
                    </Card.Body>
              </Card>
              </div>
          </>
        );
      })}
    </div>
    </>
  );
}

export default Trending;

