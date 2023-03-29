import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import { BsSearchHeart, BsPencilSquare, BsTrash, BsX } from 'react-icons/bs';
import '../pages/styleSheetPages/AdmDashboard.css'
import SideBar from '../components/SideBar';
import ProductModalAdm from "../components/ProductModalAdm";
import ButtonNewProduct from '../components/ButtonNewProduct';
import Modal from 'react-bootstrap/Modal';
import EditProduct from "../components/EditProduct";
import { productService } from "../services/productService";


function Dashboard() {

  // const { products } = useLoaderData();
  const [productsData, setProductsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const data = productsData.filter((product) => {
    return product.producItem.title.toLowerCase().includes(searchQuery.toLowerCase()) || product.producItem.price == searchQuery;
  });

  const deleteProduct = async (id) => {
    await productHandler.deleteProduct(id);
    setProductsData(productsData.filter(product => product.producItem.id !== id));
    handleCloseConfirmation();
  };
  const [show, setShow] = useState(false);
  const [productModal, setProductModal] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (productId) => {
    setProductModal(productsData.find(product => product.producItem.id == productId));
    setShow(true);
  };
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const handleCloseConfirmation = () => setShowConfirmation(false);
  const handleShowConfirmation = (productId) => {
    setProductIdToDelete(productId);
    setShowConfirmation(true);
  };

  const [showModal, setShowModal] = useState(false)
  const handleCloseModal = () => setShowModal(false)
  const handleOpenModal = (productId) => {
    setProductModal(productsData.find(product => product.producItem.id == productId));
  }

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
                <React.Fragment key={product.producItem.id}>
                  <EditProduct show={showModal} handleClose={handleCloseModal} productModal={productModal}/> 
                  <ProductModalAdm show={show} handleClose={handleClose} productModal={productModal} />
                  <Card border="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={buildImg(product.base64FileModel.extension, product.base64FileModel.content)} />
                    <Card.Body className='text-center'>
                      <Card.Title>{product.producItem.title} </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">${product.producItem.price}</Card.Subtitle>
                      <Button variant="light" onClick={() => handleShow(product.producItem.id)}><BsSearchHeart /> View </Button>
                      <Button variant="light" onClick={() => handleOpenModal(product.producItem.id)}><BsPencilSquare /> Edit </Button>
                      <Button variant="light" onClick={() => handleShowConfirmation(product.producItem.id)}><BsTrash /> Delete </Button>
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
