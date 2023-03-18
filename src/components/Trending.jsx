import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {BsSearchHeart, BsCart3} from 'react-icons/bs';
import './styleSheet/Trending.css'

import { Link } from 'react-router-dom';

function Trending({ products, deleteProduct }) {
  
  const randomIndex = Math.floor(Math.random() * (products.length - 3));
  const resultTrending = products.slice(randomIndex, randomIndex + 3);

  return (
    <div className="cards d-flex flex-row justify-content-evenly align-items-center">

      {resultTrending.map(product => {
        return (
            <Card key={product.id} className="card" border="light" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={product.img}  />
                  <Card.Body className='text-center'>
                   <Card.Title>{product.title} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text> */}
                    <Button variant="light"><BsSearchHeart/> View </Button>
                    <Button variant="light"><BsCart3/> Add to cart </Button>
                  </Card.Body>   
              <Link to={`/userDashboard/${product.id}`}><Button className='btn-ad' id="btn-edit">More information</Button></Link>
              </Card>

        )
      })}
    </div>
  );
}

export default Trending;
