import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {BsSearchHeart, BsCart3} from 'react-icons/bs';
import { useLoaderData } from "react-router-dom";
import ProductModalUser from './ProductModalUser';


const CardUser = () => {
  const { CardUser } = useLoaderData();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


/*const ProductList = ({ allProducts, setAllProducts}) => {
  const onAddProduct = () => {
          console.log('add');
  }
  };*/
 /* onClick={() => onAddProduct(product)}*/


return (
  <>
   <ProductModalUser show={show} handleClose={handleClose} product={product} />
    <Card border="light" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={CardUser.img}  />
        <Card.Body className='text-center'>
        <Card.Title>{CardUser.title} </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{CardUser.price}</Card.Subtitle>
        <Button variant="light" onClick={handleShow}><BsSearchHeart/> View </Button>
        <Button variant="light"><BsCart3/> Add to cart </Button>
        </Card.Body>
    </Card>
  </>
)

};
  export default CardUser;



