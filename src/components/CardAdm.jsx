import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {BsSearchHeart, BsTrash} from 'react-icons/bs';
import { useLoaderData } from "react-router-dom";


const CardAdm = () => {
  const { CardAdm } = useLoaderData();

return (
  <Card border="light" style={{ width: '18rem' }}>
         <Card.Img variant="top" src={CardAdm.img}  />
         <Card.Body className='text-center'>
           <Card.Title>{CardAdm.title} </Card.Title>
           <Card.Subtitle className="mb-2 text-muted">{CardAdm.price}</Card.Subtitle>
         <Button variant="light"><BsSearchHeart/> View </Button>
         <Button variant="light"><BsPencilSquare/> Edit </Button>
         <Button variant="light"><BsTrash/> Delete </Button>
        </Card.Body>
       </Card>
)
};
  export default CardAdm;

