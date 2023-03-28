import React,{ useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {  useLoaderData } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import {BsSearchHeart, BsCart3} from 'react-icons/bs';
import '../pages/styleSheetPages/UserDashboard.css';
import SideBar from '../components/SideBar';
import ProductModalUser from '../components/ProductModalUser';


function Dashboard() {

  
  const {products} = useLoaderData();
  const [productsData, setProductsData] = useState(products);
 
    
  const data = productsData.filter((product) => {
    const isCategoryMatch = product.category.toLowerCase() === 'kimono';
    return isCategoryMatch 
  });
  

  
  const [show, setShow] = useState(false);
  const [productModal, setProductModal] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (productId) => {
    setProductModal(productsData.find(product => product.id == productId));
    setShow(true)
  };


  return (
    <>
    <SideBar/>
    <div className="container-gn" id="text">
       <br />
      <h1> FULL-SET KIMONOS</h1>
      <div className="container-bar">
 
  
</div>

    <>
      

      <div className="cards">
        {data.map((product) => {
         return (
          <>
            <ProductModalUser show={show} handleClose={handleClose} product={productModal} />
              <Card border="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.img}  />
                    <Card.Body className='text-center'>
                      <Card.Title>{product.title} </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{product.season}</Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
                    <Button variant="light" onClick={() => handleShow(product.id)}><BsSearchHeart/> View </Button>
                    <Button variant="light"><BsCart3/> Add to cart </Button>
                    </Card.Body>
              </Card>
          </>
          )
        })}
      </div>
    </>
    </div>
  </>
  );
}

export default Dashboard;

















