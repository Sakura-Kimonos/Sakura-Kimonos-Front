import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsSearchHeart, BsCart3 } from 'react-icons/bs';
import './styleSheet/Trending.css';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import ProductModalUser from './ProductModalUser'; 


function Trending({ products, deleteProduct }) {
  const randomIndex = Math.floor(Math.random() * (products.length - 3));
  const resultTrending = products.slice(randomIndex, randomIndex + 3);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="cards row justify-content-center">
       <h2 id="last-products"className="title">LAST PRODUCTS</h2>
      {resultTrending.map((product) => {
        return (
          <>
           <ProductModalUser show={show} handleClose={handleClose} product={product} />
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 mb-3" key={product.id}>
            <Card className="card" border="light">
              <Card.Img variant="top" src={product.img} />
              <Card.Body className="text-center">
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
                <Button variant="light" onClick={handleShow}>
                  <BsSearchHeart /> View
                </Button>
                <Button variant="light">
                  <BsCart3 /> Add to cart
                </Button>
              </Card.Body>
              <Link to={`/userDashboard/${product.id}`}>
              </Link>
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

