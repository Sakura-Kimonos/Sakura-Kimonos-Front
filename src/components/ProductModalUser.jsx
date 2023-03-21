import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';




const ProductModalUser = ({ show, handleClose, product }) => {
  // console.log(product)
  return (
    <Modal className='d-flex justify-content-center' show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <h1 className='text-center' style={{width: '100%'}}>  {product.title} </h1>
        </Modal.Header>
        <Modal.Body>
                  <div id="modal" className="modal-body" style={{ width: '100%'}} border="light">
                        <img variant="top" style={{height: '400px', width: '400px', alignItems: 'center'}} src={product.img} />
                        <div>
                          
                           <p className='text-center' style={{marginTop: '20px', width: '100%'}}>  {product.description}  </p>
                        
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
                        </div>
                  </div>
        </Modal.Body>
      </Modal>)
};

export default ProductModalUser;