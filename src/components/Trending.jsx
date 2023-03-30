import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsSearchHeart, BsCart3 } from 'react-icons/bs';
import './styleSheet/Trending.css';
import React, {useState, useEffect} from 'react';
import ProductModalUser from './ProductModalUser'; 
import '../pages/styleSheetPages/userDashboard.css'
import { Link } from 'react-router-dom';
import { productService } from '../services/productService';

function Trending({products}) {

  const randomIndex = Math.floor(Math.random() * (products.length - 3));
  const resultTrending = products.slice(randomIndex, randomIndex + 3);
  const [productsData, setProductsData] = useState([]);
  const [productList, setProductList] = useState(resultTrending);
  const [productModal, setProductModal] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (productId) => {
    setProductModal(products.find(product => product.producItem.id == productId))
    setShow(true)
  };

  async function getProducts() {
    var resultList = await productService.getProducts();
    setProductsData(resultList);
  }

  function buildImg(extension, content) {
    return "data:" + extension + ";base64," + content;
}

const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
const addToCart = async (product) => {
  console.log("cart product array", cartProducts);
  cartProducts.push(product);
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}

  useEffect(() => {
    getProducts()
  },[])

  return (
    <>
    <div className="cards">
       <h2 id="last-products"className="title">LAST PRODUCTS</h2>
      {productList.map((product) => {
        return (
          <>
            <ProductModalUser show={show} handleClose={handleClose} productModal={productModal} />
            <div key={product.producItem.id}>

            <Card border="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={buildImg(product.base64FileModel.extension, product.base64FileModel.content)}  />
                    <Card.Body className='text-center'>
                      <Card.Title>{product.producItem.title} </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">${product.producItem.price}</Card.Subtitle>
                    <Button variant="light" onClick={() => handleShow(product.producItem.id)}><BsSearchHeart/> View </Button>
                    <Link to={`/Cart`}>
                    <Button variant="light" onClick={() => addToCart(product)}><BsCart3/> Add to cart </Button>
                    </Link>
                    </Card.Body>
              </Card>
              </div>
          </>
        );
      })}
    </div>
    </>
  );
}

export default Trending;

