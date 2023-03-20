import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import "./stylesheets/MoreDetails.css";


const ProductModalUser = ({ show, handleClose, product }) => {

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="ProductTitle"> {product.price}€ - {product.title}  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  <Card className="text-center" style={{ width: '90%'}} border="light">
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                          <Card.Text>
                           <p>  {product.description}  </p>
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
                          </Card.Text>
                        </Card.Body>
                  </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>)
};

export default ProductModalUser;