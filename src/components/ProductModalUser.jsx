
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import {BsCart3} from 'react-icons/bs';
import React,{ useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import './styleSheet/ProductModalUser.css'
import { Link } from 'react-router-dom';
import { productService } from "../services/productService";



const ProductModalUser = ({ show, handleClose, productModal}) => {
  const [productsData, setProductsData] = useState([]);

  async function getProducts() {
   
    var resultList = await productService.getProducts();
    setProductsData(resultList);
  }

  function buildImg(extension, content) {
    return "data:" + extension + ";base64," + content;
  }


const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  const addToCart = async (product) => {
    cartProducts.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
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
                           <p className='text-center' style={{marginTop: '20px'}}>  {productModal?.producItem?.description} </p>
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
                            <Link to={`/Cart`}>
                            <Button variant="light" onClick={() => addToCart(product)}><BsCart3/> Add to cart </Button>
                            </Link>
                            </div> 
                  </div>
        </Modal.Body>
      </Modal>
  )
};

export default ProductModalUser;