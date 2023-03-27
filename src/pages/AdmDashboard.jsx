import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoaderData, Link } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import { BsSearchHeart, BsPencilSquare, BsTrash, BsX } from 'react-icons/bs';
import '../pages/styleSheetPages/AdmDashboard.css'
import SideBar from '../components/SideBar';
import ProductModalAdm from "../components/ProductModalAdm";
import ButtonNewProduct from '../components/ButtonNewProduct';
import Modal from 'react-bootstrap/Modal';

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
    setProductsData(productsData.filter(product => product.id !== id));
    handleCloseConfirmation();
  };

  const [show, setShow] = useState(false);
  const [productModal, setProductModal] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (productId) => {
    setProductModal(productsData.find(product => product.id == productId));
    setShow(true);
  };

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const handleCloseConfirmation = () => setShowConfirmation(false);
  const handleShowConfirmation = (productId) => {
    setProductIdToDelete(productId);
    setShowConfirmation(true);
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
                <React.Fragment key={product.id}>
                  <ProductModalAdm show={show} handleClose={handleClose} product={productModal} />
                  <Card border="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body className='text-center'>
                      <Card.Title>{product.title} </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
                      <Button variant="light" onClick={() => handleShow(product.id)}><BsSearchHeart /> View </Button>
                      <Link to={`editProduct/${product.id}`}>
                      <Button variant="light"><BsPencilSquare /> Edit </Button></Link>
                      <Button variant="light" onClick={() => handleShowConfirmation(product.id)}><BsTrash /> Delete </Button>
                    </Card.Body>
                  </Card>
                </React.Fragment>
              )
            })}
          </div>

          <Modal show={showConfirmation} onHide={handleCloseConfirmation} className="my-modal">
            <Modal.Header closeButton>
              <Modal.Title>Confirm Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
            <Modal.Footer>
              <Button variant="light" onClick={() => handleCloseConfirmation()} className="my-button"><BsX /> Cancel </Button>
              <Button variant="light" onClick={() => deleteProduct(productIdToDelete)} className="my-button"><BsTrash /> Delete </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    </>
  );

}



export default Dashboard;

