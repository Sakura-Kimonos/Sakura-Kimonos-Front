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
import '../pages/styleSheetPages/Season.css';

function Dashboard() {

  
  const {products} = useLoaderData();
  const [productsData, setProductsData] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const data = productsData.filter((product) => {
    const lowerCaseSeason = product.season.toLowerCase();
    const isSeasonMatch = selectedSeason ? lowerCaseSeason === selectedSeason.toLowerCase() : true;
    const isSearchMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || product.price == searchQuery;
    return isSeasonMatch && isSearchMatch;
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
      <h1> Sakura Kimonos</h1>
      <div className="container-bar">
  <input className="searchStyle" type="text" placeholder="🔍 Search by product name or price"
    value={searchQuery}
    onChange={handleSearchChange}
    
  />
   
  <div>Search by season
  {/* <h5> Search by season</h5> */}
  <select className="season-select" value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)}>
    <option value="">All seasons</option>
    <option value="Spring">Spring</option>
    <option value="Summer">Summer</option>
    <option value="Fall">Fall</option>
    <option value="Winter">Winter</option>
  </select>
  </div>
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

















