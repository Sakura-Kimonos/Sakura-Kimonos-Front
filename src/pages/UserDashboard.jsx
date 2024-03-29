import React,{ useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {  useLoaderData } from "react-router-dom";
import {BsSearchHeart, BsCart3} from 'react-icons/bs';
import '../pages/styleSheetPages/UserDashboard.css';
import SideBarLogged from '../components/SideBarLogged';
import ProductModalUser from '../components/ProductModalUser';
import { Link } from 'react-router-dom';
import { productService } from "../services/productService";


function Dashboard() {

  
  const [productsData, setProductsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const data = productsData.filter((product) => {
   
    const lowerCaseSeason = product.producItem.season.toLowerCase();
    const isSeasonMatch = selectedSeason ? lowerCaseSeason === selectedSeason.toLowerCase() : true;
    const isSearchMatch = product.producItem.title.toLowerCase().includes(searchQuery.toLowerCase()) || product.producItem.price == searchQuery;
    return isSeasonMatch && isSearchMatch;
  });

  const [show, setShow] = useState(false);
  const [productModal, setProductModal] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (productId) => {
    setProductModal(productsData.find(product => product.producItem.id == productId));
    
    setShow(true)
  };

    async function getProducts() {
    var resultList = await productService.getProducts();
    setProductsData(resultList);
  }

  function buildImg(extension, content) {
    return "data:" + extension + ";base64," + content;
  }

  const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  const addToCart = async (product) => {
    console.log("cart product array", cartProducts);
    cartProducts.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }
  
  useEffect(() => {
    getProducts()
  },[])

  return (
    <>
    <SideBarLogged/>
    <div className="container-gn" id="text">
        <br />
      <h1> Sakura Kimonos</h1>
      <div className="container-bar">
        <input className="searchStyle" type="text" placeholder="🔍 Search by product name or price"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div>Search by season
  <select className="season-select" value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)}>
    <option value="">All seasons</option>
    <option value="Spring">Spring</option>
    <option value="Summer">Summer</option>
    <option value="Autumn">Autumn</option>
    <option value="Winter">Winter</option>
  </select>
  </div>
      <div className="cards">
        {data.map((product) => {
        return (
          <>
            <ProductModalUser show={show} handleClose={handleClose} productModal={productModal} />
              <Card border="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={buildImg(product.base64FileModel.extension, product.base64FileModel.content)} />
                    <Card.Body className='text-center'>
                      <Card.Title>{product.producItem.title} </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{product.producItem.season}</Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">${product.producItem.price}</Card.Subtitle>
                    <Button variant="light" onClick={() => handleShow(product.producItem.id)}><BsSearchHeart/> View </Button>
                    <Link to='/Cart'>
                    <Button variant="light" onClick={() => addToCart(product)} ><BsCart3/> Add to cart </Button>
                    </Link>
                    </Card.Body>
              </Card>
          </>
          )
        })}
      </div>
      </div>
    </>
  );
}
export default Dashboard;

















