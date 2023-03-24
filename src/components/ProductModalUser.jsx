import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import {BsCart3} from 'react-icons/bs';
import Button from "react-bootstrap/Button";
import './styleSheet/ProductModalUser.css'




const ProductModalUser = ({ show, handleClose, product }) => {
  
  return (
    <Modal className='d-flex justify-content-center' show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <h3 className='text-center' style={{width: '100%'}}>  {product.title} </h3>
        </Modal.Header>
        <Modal.Body>
                  <div id="modal" className="modal-body" style={{ width: '100%'}} border="light">
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}> <img variant="top" style={{width: '350px'}} src={product.img} /> </div>
                           <p className='text-center' style={{marginTop: '20px'}}>  {product.description}  </p>
                           <h4 className='text-center' style={{marginTop: '20px'}}>  {product.price}$ </h4>
                        
                           <Table striped bordered hover>
                              <tbody>
                                <tr>
                                  <td><strong>Category</strong></td>
                                  <td>{product.category}</td>
                                </tr>
                                <tr>
                                  <td><strong>Material</strong></td>
                                  <td>{product.material}</td>
                                </tr>
                                <tr>
                                  <th><strong>Season</strong></th>
                                  <th>{product.season}</th>
                                </tr>
                                <tr>
                                  <td><strong> Main pattern</strong></td>
                                  <td>{product.pattern}</td>
                                </tr>
                              </tbody>
                            </Table>
                            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}> <Button variant="light"><BsCart3/> Add to cart </Button> </div> 
                  </div>
        </Modal.Body>
      </Modal>)
};

export default ProductModalUser;