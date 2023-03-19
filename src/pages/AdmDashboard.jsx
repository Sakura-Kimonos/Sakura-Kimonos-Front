import React,{ useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {  useLoaderData } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import {BsSearchHeart, BsCart3, BsPencilSquare} from 'react-icons/bs';
import '../pages/styleSheetPages/AdmDashboard.css'



function Dashboard() {
 
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const { products} = useLoaderData();
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
            <Card border="light" style={{ width: '18rem' }}>
                   <Card.Img variant="top" src={product.img}  />
                   <Card.Body className='text-center'>
                     <Card.Title>{product.title} </Card.Title>
                     <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
                     {/* <Card.Text>
                  Some quick example text to build on the card title and make up the
               bulk of the card's content.
                  </Card.Text> */}
                   <Button variant="light"><BsSearchHeart/> View </Button>
                     <Button variant="light"><BsPencilSquare/> Edit </Button>
                     {/* <Button variant="light"><BsCart3/> Add to cart </Button> */}
                  </Card.Body>
                 </Card>
          )
        })}
      </div>
    </>
    </div>
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