import React,{ useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {  useLoaderData } from "react-router-dom";
import {BsSearchHeart, BsCart3} from 'react-icons/bs';
import '../pages/styleSheetPages/UserDashboard.css';
import SideBar from '../components/SideBar';
import ProductModalUser from '../components/ProductModalUser';
import { productService } from "../services/productService";


function Dashboard() {

  // const {products} = useLoaderData();
  const [productsData, setProductsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const data = productsData.filter((product) => {
    return product.producItem.title.toLowerCase().includes(searchQuery.toLowerCase()) || product.producItem.price == searchQuery;
  });
  const [show, setShow] = useState(false);
  const [productModal, setProductModal] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (productId) => {
    setProductModal(productsData.find(product => product.producItem.id == productId));
    // console.log(productsData);
    setShow(true)
  };

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
    <SideBar/>
    <div className="container-gn" id="text">
       <br />
      <h1> Sakura Kimonos</h1>
    <>
      <div className="container-bar">
        <input className="searchStyle" type="text" placeholder="Search by product name or price"
          value={searchQuery}
          onChange={handleSearchChange}
        />
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
                      <Card.Subtitle className="mb-2 text-muted">${product.producItem.price}</Card.Subtitle>
                    <Button variant="light" onClick={() => handleShow(product.producItem.id)}><BsSearchHeart/> View </Button>
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

















