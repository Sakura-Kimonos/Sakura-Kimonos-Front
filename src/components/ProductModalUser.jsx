import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';




const ProductModalUser = ({ show, handleClose, product }) => {

  return (
    <Modal className='d-flex justify-content-center' show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>  {product.title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  <div id="modal" className="modal-body" style={{ width: '80%'}} border="light">
                        <Card.Img variant="top" className='modal-img' src={product.img} />
                        <Card.Body>
                          <Card.Text>
                           <p>  {product.description}  </p>
                          </Card.Text>
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
                        </Card.Body>
                  </div>
        </Modal.Body>
      </Modal>)
};

export default ProductModalUser;