import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import {BsPencilSquare, BsTrash, BsX, BsSearchHeart } from 'react-icons/bs';
import Button from "react-bootstrap/Button";
import React,{ useState, useEffect } from "react";
import { productService } from "../services/productService";
import '../components/styleSheet/ProductModalAdm.css'



const ProductModalAdm = ({ show, handleClose, productModal, handleUpdate }) => {
 

  const deleteProduct = async (id) => {
    await productHandler.deleteProduct(id);
    setProductsData(productsData.filter(product => product.producItem.id !== id));
    handleCloseConfirmation();
  };
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const handleCloseConfirmation = () => setShowConfirmation(false);
  const handleShowConfirmation = (productId) => {
    setProductIdToDelete(productId);
    setShowConfirmation(true);
  };

  const [productsData, setProductsData] = useState([])

  async function getProducts() {
    var resultList = await productService.getProducts();
    // console.log(resultList);
    setProductsData(resultList);
  }

  function buildImg(extension, content) {
    return "data:" + extension + ";base64," + content;
  }

  useEffect(() => {
    getProducts()
  },[])


  return (
    <Modal className='d-flex justify-content-center' show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <h3 className='text-center' style={{width: '100%'}}>  {productModal?.producItem?.title} </h3>
        </Modal.Header>
        <Modal.Body>
                  <div id="modal" className="modal-body" style={{ width: '100%'}} border="light">
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}> <img variant="top" style={{width: '350px'}} src={buildImg(productModal?.base64FileModel?.extension, productModal?.base64FileModel?.content)} /> </div>
                           <p className='text-center' style={{marginTop: '20px'}}>  {productModal?.producItem?.description}  </p>
                           <h4 className='text-center' style={{marginTop: '20px'}}>  {productModal?.producItem?.price}$ </h4>
                        
                           <Table striped bordered hover>
                              <tbody>
                                <tr>
                                  <td><strong>Category</strong></td>
                                  <td>{productModal?.producItem?.category}</td>
                                </tr>
                                <tr>
                                  <td><strong>Material</strong></td>
                                  <td>{productModal?.producItem?.material}</td>
                                </tr>
                                <tr>
                                  <th><strong>Season</strong></th>
                                  <th>{productModal?.producItem?.season}</th>
                                </tr>
                                <tr>
                                  <td><strong> Main pattern</strong></td>
                                  <td>{productModal?.producItem?.pattern}</td>
                                </tr>
                              </tbody>
                            </Table>
                            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}> 
                            <Button variant="light" onClick={() => handleUpdate()}><BsPencilSquare/> Edit </Button>
                            <Button variant="light" onClick={() => handleShowConfirmation(product.producItem.id)}><BsTrash/> Delete </Button>
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
                  </div>
        </Modal.Body>
      </Modal>)
};

export default ProductModalAdm;