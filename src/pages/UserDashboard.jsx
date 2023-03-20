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
import Footer from '../components/Footer';



function Dashboard() {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const {products} = useLoaderData();
  const [productsData, setProductsData] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");
  const data = productsData.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.price.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const deleteProduct = async (id) => {
    await productHandler.deleteProduct(id);
    setProductsData(productsData.filter(post => post.id !== id))
}


  return (
    <>
    <SideBar/>
    <div className="container-gn" id="text">
       <br />
      <h1> Sakura Kimonos</h1>
    <>
      <div className="container-bar">
        <input
          className="searchStyle"
          type="text"
          placeholder="🔍 Search by product name or price"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="cards">
        {data.map((product) => {
         return (
          <>
            <Card border="light" style={{ width: '18rem' }}>
                   <Card.Img variant="top" src={product.img}  />
                   <Card.Body className='text-center'>
                     <Card.Title>{product.title} </Card.Title>
                     <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
                   <Button variant="light" onClick={handleShow}><BsSearchHeart/> View </Button>
                     <Button variant="light"><BsCart3/> Add to cart </Button>
                  </Card.Body>
                 </Card>
                 <ProductModalUser show={show} handleClose={handleClose} product={product} />
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



















// import CardsUser from '../components/CardsUser';

// // import {  useLoaderData } from 'react-router-dom'
// // import Trending from "../components/Trending";
// const UserDashboard = () => {
//     // const {products}  = useLoaderData();
//     return (
// <>

//                 <CardsUser/>
          
//                 </>
//     )
// };
// export default UserDashboard;