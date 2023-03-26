import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import { BsSearchHeart, BsPencilSquare, BsTrash } from 'react-icons/bs';
import '../pages/styleSheetPages/AdmDashboard.css'
import SideBar from '../components/SideBar';
import ProductModalAdm from "../components/ProductModalAdm";
import ButtonNewProduct from '../components/ButtonNewProduct';

function Dashboard() {


  const { products } = useLoaderData();
  const [productsData, setProductsData] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
 };
  const data = productsData.filter((product) => {
    return product.title.toLowerCase().includes(searchQuery.toLowerCase()) || product.price == searchQuery;
  });
  const deleteProduct = async (id) => {
    await productHandler.deleteProduct(id);
    setProductsData(productsData.filter(post => post.id !== id))
  }

  const [show, setShow] = useState(false);
  const [productModal, setProductModal] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (productId) => {
    setProductModal(productsData.find(product => product.id == productId));
    setShow(true)
  };

  return (
    <>
      <SideBar />
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

          <ButtonNewProduct />

          <div className="cards">
            {data.map((product) => {
              return (
                <>
                  <ProductModalAdm show={show} handleClose={handleClose} product={productModal} />
                  <Card border="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body className='text-center'>
                      <Card.Title>{product.title} </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
                      <Button variant="light" onClick={() => handleShow(product.id)}><BsSearchHeart /> View </Button>
                      <Button variant="light"><BsPencilSquare/> Edit </Button>
                      <Button variant="light" onClick={() =>deleteProduct(product.id)}><BsTrash/> Delete </Button>
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


